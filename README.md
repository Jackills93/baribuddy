# BariBuddy 🍻

Web app mobile per recensire locali e pub in provincia di Bari con il gruppo di amici.

**App:** https://jackills93.github.io/baribuddy/

## Funzionalità

- 📍 Locali reali della provincia di Bari già caricati, con possibilità di aggiungerne altri
- 🔎 Filtri per categoria (ristorante, pesce, carne, panini, pizzeria, pub), fascia di prezzo, facilità di parcheggio e numero di persone
- ⭐ Recensioni con voto 1-5, persone, parcheggio trovato, prezzo percepito e tipo di menù ordinato
- 🏆 Classifica: podio, più votati, meno votati e "ancora da provare"
- ☁️ Database condiviso: le recensioni si sincronizzano automaticamente tra tutti i telefoni del gruppo
- 📤 Fallback offline: link di condivisione con i dati inclusi e backup manuale

## Uso

Apri il link sul telefono e aggiungilo alla schermata Home per usarlo come app.

Single-file HTML/CSS/JS, nessuna dipendenza. Storage locale in `localStorage`, sincronizzazione di gruppo via [textdb.online](https://textdb.online). Ogni telefono conserva una copia completa dei dati e la ripubblica dopo il merge, quindi il gruppo non perde mai le recensioni anche se il record remoto sparisce.
