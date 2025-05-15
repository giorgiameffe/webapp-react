# Setup Web App React-Day Two

Essendo un progetto sviluppato sia lato front-end che back-end, il **Day One** viene illustrato nel README della repository `webapp-express`.

## Consegna

Ora è il momento di prepararci al frontend della nostra Web App!

### MILESTONE 1
- Mettiamo su un nuovo progetto React aiutandoci con Vite;
- Ripuliamo come sempre l’app da file e codice di esempio non necessari;
- Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo).

### MILESTONE 2

- Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
- Creiamo 2 pagine:
  - La home, in cui mostreremo la lista dei film;
  - La pagina di dettaglio di un singolo film.

### MILESTONE 3

- Configuriamo l’app di backend (repo webapp-express) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware CORS;
- Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri.

#### Bonus

- Impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props!
- Aggiungere, nella pagina dei film, un campo per cercare su tutti i campi utili del db (es. titolo, abstract);
- Curare l’aspetto estetico della vostra applicazione.

---

# Setup Web App React-Day Three

## Consegna

### MILESTONE 1

- Colleghiamo la lista dei movies a una pagina di dettaglio movie;
- Effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni.

### MILESTONE 2

Rappresentiamo le informazioni del movie.

## MILESTONE 3

Creiamo un componente ReviewCard per rappresentare le informazioni delle recensioni.

#### Bonus

Rappresentiamo tutti i voti delle recensioni con un componente StarRating.

#### Bonus Bonus

- Sul backend, iniziamo a realizzare una rotta /movies/:id/reviews per aggiungere una nuova recensione;
- Può restituire un semplice testo "Rotta per aggiungere una recensione".

---

# Setup Web App React-Day Four

## Consegna

### MILESTONE 2 (FRONTEND)

- Creiamo un componente che contenga il form per le recensioni;
- Inseriamo questo componente nella pagina di dettaglio del film;
- All’invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre.

Per la **MILESTONE 1(BACKEND)** e il **bonus** vi rimando al README della repositoy `webapp-express`.

# Setup Web App React-Day Four

## Consegna

- Concludiamo migliorando l’esperienza sulla nostra SPA, inserendo un loader;
- Creiamo un componente loader;
- Questo componente deve poter apparire su qualunque pagina della nostra app;
- Creiamo e sfruttiamo un Context per dare la possibilità ad ogni componente di attivare o disattivare il loader sulla propria pagina.

### Bonus

Personalizziamo l’aspetto della nostra app col CSS.