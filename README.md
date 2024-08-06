# Gioco Battaglia pokemon

## 📝 Descrizione
Questo progetto prende API esterne dal sito **pokeapi.co** ovvero Le immagini e le caratteristiche di pokemon e rappresenta un gioco dove diversi pokemon combattono uno contro altro paragonando cosi chi e il più forte.
<br>Utente può scegliere un pokemon della lista a suo piacere, o inserire il nome del pokemon sulla barra di ricerca per trovare il pokemon interessato.</br> 
Una volta scelto il suo pokemon utente può premere pulsante "Fight" attaccando cosi il pokemon dell avversario e ricevendo il danno dal esso.
Il pokemon che rimane senza la vita per primo perde.

## 🔧 Tecnologie utilizzate
- HTML
- CSS
- JavaScript
    - *Api*
        - *addEventListener, querySelectorAll, fetch, json, parseInt, Math.floor, Math.random, setTimeout, createElement, add, includes, append, remove, scrollTo, forEach*
  
## 📥 Istruzioni per l'installazione

  ### :small_blue_diamond: Metodo N1: Scaricare cartella Zip
  1. Premere sul pulsante `Code` e scegliere `Download ZIP`.
  2. Scaricare la cartella ZIP.
  3. Mettere la cartella ZIP nella cartella dove si desidera estrarre il contenuto.
  4. Fare clic con il tasto `RMB - Right mouse button` sulla cartella ZIP e selezionare `Estrarre tutto`.
  5. Scegliere il percorso dove si desidera estrarre il contenuto (di default i contenuti verranno estratti dove attualmente si trova la cartella ZIP).
  6. Premere `Estrarre`.
  <br>✅ Ottimo! Ora si possono usare i contenuti scaricati.</br>

### :small_blue_diamond: Metodo N2: Copiare il progetto attraverso HTTPS
1. Creare una nuova cartella.
2. Copiare il percorso della cartella creata facendo clic con il tasto `RMB - Right mouse button` sulla cartella e scegliere `Copia percorso`.
3. Aprire il prompt dei comandi:
    - **Per Windows**: Premere `Win + R` e digitare `cmd`.
    - **Per macOS**: Aprire il Terminale (puoi trovarlo in `Applicazioni` > `Utility` > `Terminale` o cercarlo con `Spotlight`.
    - **Per Linux**: Aprire il `terminale` dal menu delle `applicazioni`.
4. Spostarsi nella cartella creata con il comando `cd "percorso cartella"`.
5. Verificare la posizione corrente con il comando `dir` (`ls` su `macOS` e `Linux`).
6. Se si è nella cartella desiderata, eseguire il comando `git clone "HTTPS link from GitHub"`.
<br>✅ Ottimo! Il progetto è stato copiato.</br>

## 🖱️ Istruzioni per l'uso
Tutto il progetto è manipolabile con il Mouse (LMB - Left mouse button).

1. Selezionare il pokemon dalla lista (barra a destra) o inserire il suo nome nella barra di ricerca e premere "Search"
2. Premere pulsante "Fight" per eseguire attacco e ricevere il danno dall pokemon nemico

La quantità iniziale di pokemon è di 100 ma può essere aumentata fino a un numero di 1025 pokemons. 
  - aprire il file `script.js` 
  - In riga 5 `const maxPok = 100;` cambiare la quantità della variabile `maxPok` mettendo quella interessata (max 1025).
