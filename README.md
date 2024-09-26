#Project movie

Questa è un'applicazione web Pannello di Controllo Film sviluppata con React. Permette agli utenti di navigare, filtrare e esplorare informazioni dettagliate sui film. L'app offre modalità scura e chiara, paginazione, layout responsive, e funzioni come una pagina dettagliata per ogni film, valutazioni, recensioni, e un indicatore di caricamento personalizzato.

##Funzionalità
Supporto alla modalità scura e chiara: Possibilità di passare tra i temi scuro e chiaro per un'esperienza visiva personalizzata.
Pagina dettagliata dei film: Visualizza informazioni dettagliate su ciascun film, tra cui cast, generi, durata e recensioni.
Paginazione: Supporta la navigazione tra diverse pagine di film, migliorando l'esperienza utente nella gestione di grandi dataset.
Valutazione dei film: Mostra la valutazione di un film, permettendo agli utenti di vedere quanto sia apprezzato.
Indicatore di caricamento: Indicatore di caricamento animato personalizzato per transizioni fluide durante il recupero dei dati.
Carosello di immagini: Mostra immagini e dettagli del cast in un carosello slider responsive.
Card e Recensioni: Mostra i film in formato card e recensioni con avatar degli utenti in un formato scrollabile.
Filtri nella barra laterale: Filtra i film per genere o altri criteri utilizzando una barra laterale con checkbox scrollabili.
Design responsive: Il layout si adatta a diverse dimensioni dello schermo, garantendo un'esperienza fluida sia su dispositivi mobili che desktop.
Struttura delle Cartelle

Copia codice
.
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── Movie.jsx
├── SinglePage.jsx
├── ThemeContext.jsx
├── Sidebar.jsx
├── Spinner.jsx
├── Slider.jsx
├── Pagination.jsx
├── MovieRating.jsx
├── Mode.jsx
├── Card.jsx
├── CardReviews.jsx
├── functions.js
├── useFetch.js
├── spinner.css
├── pagination.css
├── singlePage.css
├── slider.css
├── sidebar.css
├── mode.css
├── card.css
├── cardReviews.css

###App.jsx
Il componente principale che rende visibile il pannello di controllo dei film, gestendo la navigazione e la modalità scura e chiara.

###App.css
Contiene gli stili per il layout generale, le modalità scura e chiara, e il design responsive​(App).

###index.css
Impostazioni globali CSS per font, smoothing, e consistenza del layout​(index).

###Movie.jsx
Mostra i singoli film all'interno del pannello di controllo. Ogni film è visualizzato in formato card, con dettagli come titolo, genere e poster.

###SinglePage.jsx
Visualizza informazioni dettagliate su un film specifico, tra cui cast, durata, generi e recensioni. La pagina include anche un'immagine di copertina e contenuti correlati​(singlePage).

###Pagination.jsx
Fornisce controlli di paginazione, permettendo agli utenti di navigare tra diverse pagine di risultati dei film. Sono inclusi pulsanti per pagine precedenti e successive, oltre ai dettagli della pagina corrente​(pagination).

###MovieRating.jsx
Mostra la valutazione del film, aiutando gli utenti a capire quanto è apprezzato un determinato film.

###Mode.jsx
Un pulsante flottante che consente di passare tra le modalità scura e chiara. È posizionato nell'angolo in basso a destra dello schermo per un facile accesso​(mode).

###Sidebar.jsx
Include filtri per generi di film o altre categorie, con campi di ricerca e checkbox per una navigazione semplice. La barra laterale è scrollabile per elenchi lunghi​(sidebar).

###Spinner.jsx
Mostra un indicatore di caricamento quando i dati vengono recuperati, fornendo un feedback visivo che l'app sta lavorando in background​(spinner).

###Slider.jsx
Un carosello slider utilizzato per visualizzare immagini e dettagli del cast, inclusi i nomi degli attori e i ruoli dei personaggi​(slider).

###Card.jsx
Mostra i film in formato card con un'immagine di sfondo e un titolo sovrapposto. La card include un effetto gradiente nella parte inferiore dove viene visualizzato il titolo​(card).

###CardReviews.jsx
Mostra le recensioni degli utenti in un contenitore scrollabile. Le recensioni includono avatar degli utenti, nomi e il contenuto della recensione, con un layout responsive che si adatta a diverse dimensioni dello schermo​(cardRevievs).

###functions.js
Contiene funzioni di utilità come translateTime, che converte la durata da minuti a ore e minuti​(functions).

###useFetch.js
Un hook personalizzato per il recupero di dati dalle API, utilizzando SWR. Supporta l'autenticazione basata su token e gestisce gli stati di errore​(useFetch).

###spinner.css
Stili CSS per l'indicatore di caricamento, con dimensioni, colori e proprietà di animazione​(spinner).

###pagination.css
Stili CSS per i controlli di paginazione, garantendo che i pulsanti e le informazioni sulla pagina siano adeguatamente centrati e stilizzati​(pagination).

###singlePage.css
Stili per la pagina dettagliata del film, inclusi l'immagine di copertina, i dettagli del cast e il layout per i contenuti correlati​(singlePage).

###slider.css
CSS per il carosello slider sulla pagina dettagliata del film, con stili responsive per la visualizzazione delle immagini del cast​(slider).

###sidebar.css
Stili per la barra laterale utilizzata per filtrare i film. Include stili per i campi di input e le checkbox, con un'esperienza utente pulita e intuitiva​(sidebar).

###mode.css
CSS per il pulsante di attivazione della modalità scura/chiara, con effetti di hover per un'esperienza utente migliore​(mode).

###card.css
CSS per le card dei film, con stili per le immagini di sfondo, gradienti e sovrapposizioni di testo​(card).

###cardReviews.css
CSS per la sezione delle recensioni degli utenti, con stili per avatar, contenuto delle recensioni e un elenco scrollabile di recensioni​(cardRevievs).

##Tecnologie Utilizzate
React: Libreria JavaScript per la costruzione di interfacce utente.
SWR: Libreria per il recupero di dati, utilizzata per gestire richieste API.
CSS: Stili personalizzati per le modalità scura/chiara, la paginazione e le animazioni.
Context API: Per la gestione dello stato globale dell'app, in particolare per il cambio di tema.
Hook personalizzati: Per gestire il recupero dei dati dalle API e lo stato dell'applicazione.