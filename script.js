let userInitialHealth;
let aiInitialHealth;
let gameEnd = false; //after win or lose became true

const maxPok = 100; //max 1025
pokListQ.textContent = maxPok;
const hpDivider = 10;

let randomUserPok = Math.floor(Math.random() * maxPok) + 1;
let randomAiPok = Math.floor(Math.random() * maxPok) + 1;

let userCurrentHealth = parseInt(userHealthText.textContent);
let aiCurrentHealth = parseInt(aiHealthText.textContent);

let userAtk;
let aiAtk;

// Reset health function
function resetHealth() {
    userCurrentHealth = userInitialHealth;
    aiCurrentHealth = aiInitialHealth;
    userHealthText.textContent = userInitialHealth;
    aiHealthText.textContent = aiInitialHealth;
    userHealthbar.style.width = '100%';
    aiHealthbar.style.width = '100%';
}

//
async function getPokList() {
    for (let i = 1; i <= maxPok; i++) {
        //
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        try {
            const data = await response.json();
            const pokItem = document.createElement('div');
            pokItem.classList.add('pokListItem');
            pokItem.textContent = `${data.id} - ${data.name}`;
            pokList.append(pokItem);

            if (data.id % 2 === 0) {
                pokItem.style.backgroundColor = 'rgb(50, 130, 170)';
            } else {
                pokItem.style.backgroundColor = 'rgb(50, 120, 170)';
            }

            if (i === randomUserPok) {
                pokItem.classList.add('pokListItemActive');
                pokList.scrollTo({
                    top: pokItem.offsetTop - pokList.offsetTop,
                    behavior: 'smooth'
                });
            }

            //click
            pokItem.addEventListener('click', () => {
                userPokId.innerText = `${data.id}/${maxPok}`; // id
                userPokName.innerText = `${data.name}`; // name
                userPokImg.src = `${data.sprites.front_default}`; // img
                userPokCharHp.innerText = `Hp: ${data.stats[0].base_stat}`;
                userPokCharAtk.innerText = `Atk: ${data.stats[1].base_stat}`;
                userPokCharDef.innerText = `Def: ${data.stats[2].base_stat}%`;
                userPokCharSpd.innerText = `Spd: ${data.stats[5].base_stat}`;
                
                userInitialHealth = data.stats[0].base_stat; // hp
                userHealthText.textContent = userInitialHealth;
                resetHealth()
            });

            const activateItem = document.querySelectorAll('.pokListItem');
            activateItem.forEach(i => {
                i.addEventListener('click', () => {
                    activateItem.forEach(a => a.classList.remove('pokListItemActive'));
                    i.classList.add('pokListItemActive');
                });
            });

            btnInput.addEventListener('click', () => {
                const inputValue = input.value;

                if (inputValue.includes(data.name)) {
                    input.value = '';

                    //input
                    userPokId.innerText = `${data.id}/${maxPok}`; // id
                    userPokName.innerText = `${data.name}`; // name
                    userPokImg.src = `${data.sprites.front_default}`; // img
                    userPokCharHp.innerText = `Hp: ${data.stats[0].base_stat}`;
                    userPokCharAtk.innerText = `Atk: ${data.stats[1].base_stat}`;
                    userPokCharDef.innerText = `Def: ${data.stats[2].base_stat}%`;
                    userPokCharSpd.innerText = `Spd: ${data.stats[5].base_stat}`;

                    userInitialHealth = data.stats[0].base_stat; // hp
                    userHealthText.textContent = userInitialHealth;
                    resetHealth()

                    const activateItem = document.querySelectorAll('.pokListItem');
                    activateItem.forEach(i => {
                        i.classList.remove('pokListItemActive');
                        if (i.textContent.includes(inputValue)) {
                            i.classList.add('pokListItemActive');
                            scrollToItem = i;
                        }
                    });

                    if (scrollToItem) {
                        pokList.scrollTo({
                            top: scrollToItem.offsetTop - pokList.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        } catch (error) {
            console.log('Error:', error);
        }
    }
}
getPokList();

async function getUserPok() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomUserPok}`);
    if (response.ok) {
        try {
            const data = await response.json();
            userPokId.innerText = `${data.id}/${maxPok}`; // id
            userPokName.innerText = `${data.name}`; // name
            userPokImg.src = `${data.sprites.front_default}`; // img
            userPokCharHp.innerText = `Hp: ${data.stats[0].base_stat}`;
            userPokCharAtk.innerText = `Atk: ${data.stats[1].base_stat}`;
            userPokCharDef.innerText = `Def: ${data.stats[2].base_stat}%`;
            userPokCharSpd.innerText = `Spd: ${data.stats[5].base_stat}`;

            userInitialHealth = data.stats[0].base_stat; // hp
            userHealthText.textContent = userInitialHealth;

            userAtk = data.stats[1].base_stat / hpDivider; // atk
            userDef = data.stats[2].base_stat; // def %

            // Update user's health bar
            randomUserPok = Math.floor(Math.random() * maxPok) + 1;
            userCurrentHealth = parseInt(userHealthText.textContent);
            const userPercentage = (userCurrentHealth / userInitialHealth) * 100;
            userHealthbar.style.width = userPercentage + '%';
        } catch (errore) {
            console.log('Error parsing JSON:', errore);
        }
    } else {
        console.log('Error:', response.status);
    }
}
getUserPok()

async function geAitPok() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomAiPok}`);
    if (response.ok) {
        try {
            const data = await response.json();
            aiPokId.innerText = `${data.id}/${maxPok}`; // id
            aiPokName.innerText = `${data.name}`; // name
            aiPokImg.src = `${data.sprites.front_default}`; // img
            aiPokCharHp.innerText = `Hp: ${data.stats[0].base_stat}`;
            aiPokCharAtk.innerText = `Atk: ${data.stats[1].base_stat}`;
            aiPokCharDef.innerText = `Def: ${data.stats[2].base_stat}%`;
            aiPokCharSpd.innerText = `Spd: ${data.stats[5].base_stat}`;

            aiInitialHealth = data.stats[0].base_stat; // hp
            aiHealthText.textContent = aiInitialHealth;

            aiAtk = data.stats[1].base_stat / hpDivider; // atk
            aiDef = data.stats[2].base_stat; // def %

            // Update AI's health bar
            randomAiPok = Math.floor(Math.random() * maxPok) + 1;
            aiCurrentHealth = parseInt(aiHealthText.textContent);
            const aiPercentage = (aiCurrentHealth / aiInitialHealth) * 100;
            aiHealthbar.style.width = aiPercentage + '%';

        } catch (errore) {
            console.log('Error parsing JSON:', errore);
        }
    } else {
        console.log('Error:', response.status);
    }
}
geAitPok()

// Click damage
btnFight.addEventListener('click', () => {

    //user
    if (userCurrentHealth > ((aiAtk * userDef) / 100)) {
        userCurrentHealth -= ((aiAtk * userDef) / 100);
        userHealthText.textContent = Math.floor(userCurrentHealth);
        // Update user's health bar
        const userPercentage = (userCurrentHealth / userInitialHealth) * 100;
        userHealthbar.style.width = userPercentage + '%';
    } else {
        userHealthText.textContent = 0;
        userHealthbar.style.width = 0 + '%';
        //
        userPokImg.style.backgroundColor = 'rgb(230, 71, 71)';
        aiPokImg.style.backgroundColor = 'rgb(120, 214, 92)';
        //
        console.log(`${aiPokName.textContent} win\n${userPokName.textContent} loose`)
        // Make button invisible and disabled
        btnFight.style.visibility = 'hidden';
        // Set timeout to make button visible and enabled after 2 seconds
        setTimeout(() => {
            resetHealth();
            getUserPok();
            btnFight.style.visibility = 'visible';
            aiPokImg.style.backgroundColor = 'rgb(77, 77, 77)';
            userPokImg.style.backgroundColor = 'rgb(77, 77, 77)';
        }, 2000);
    }
    //ai
    if (aiCurrentHealth > ((userAtk * aiDef) / 100)) {
        aiCurrentHealth -= ((userAtk * aiDef) / 100);
        aiHealthText.textContent = Math.floor(aiCurrentHealth);
        // Update AI's health bar
        const aiPercentage = (aiCurrentHealth / aiInitialHealth) * 100;
        aiHealthbar.style.width = aiPercentage + '%';
    } else {
        aiHealthText.textContent = 0;
        aiHealthbar.style.width = 0 + '%';
        //
        aiPokImg.style.backgroundColor = 'rgb(230, 71, 71)';
        userPokImg.style.backgroundColor = 'rgb(120, 214, 92)';
        //
        console.log(`${userPokName.textContent} win\n${aiPokName.textContent} loose`)
        // Make button invisible and disabled
        btnFight.style.visibility = 'hidden';
        // Set timeout to make button visible and enabled after 2 seconds
        setTimeout(() => {
            resetHealth();
            geAitPok();
            btnFight.style.visibility = 'visible';
            aiPokImg.style.backgroundColor = 'rgb(77, 77, 77)';
            userPokImg.style.backgroundColor = 'rgb(77, 77, 77)';
        }, 2000);
    }
});
