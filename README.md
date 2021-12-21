# Opdrachtbeschrijving

## Inleiding

Je gaat een kleine applicatie bouwen die de populairste 15 posts op Reddit ophaalt via hun API en deze op een webpagina laat
zien. De gebruiker kan op de subreddit-klikken om hier meer informatie over te bekijken, of op de post zelf (en wordt
dan doorgelinkt naar Reddit zelf). Je maakt gebruikt van dynamic routing voor de subreddit-detail-pagina, communiceert
het laden van de posts met de gebruiker en bedenkt jouw eigen styling en/of layout voor dit project.

### Informatie op de homepagina

```
Hottest 15 posts on Reddit

-----------------------------------------------------------------------------------------
Men of reddit, what have you done in 2021 and it made you freaking proud of yourself?  
r/AskMen | 8.003 comments - 10.033 ups
-----------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------
Getting vaccinated today? 
r/TooAfraidToAsk | 14.003 comments - 10.033 ups
-----------------------------------------------------------------------------------------

[... + nog 13 andere posts hier]
```

### Informatie op de subreddit specificatie pagina

```
r/TooAfraidToAsk
Subreddit specifications

[banner-afbeelding-van-subreddit]

Title
Everything & Anything You Were Too Afraid To Ask

Description  
there is a holup inside all of us

Number of subscribers  
1.401.136


< Back to overview
```

## Randvoorwaarden

Jouw applicatie voldoet aan de volgende voorwaarden:

- Je zet het project zelf op, from scratch. _Let op_: ook git initialiseer je zelf. Daarna zorg je dat je de main branch direct naar GitHub pusht, een nieuwe branch aanmaakt en dan daarop verder werkt. Anders heb je straks geen Pull Request die kan worden nagekeken.
- De applicatie bevat slechts twee pagina's: één home-pagina en één subreddit-specificatie-pagina die informatie over
  iedere subreddit weer zou kunnen geven. Hij is dus herbruikbaar. Hier gebruik je dynamic routing en dynamic params
  voor.
- Om de top 15 hottest posts op te halen, gebruik je het volgende endpoint: `GET https://www.reddit.com/hot.json?limit=15`.
  Je hebt geen API key nodig.
- Om de informatie over de subreddit `r/tumblr` op te halen, gebruik je het volgende API
  endpoint: `GET https://www.reddit.com/r/tumblr/about.json`. Je hebt geen API key nodig.
- Door op de naam van de subreddit te klikken, wordt de gebruiker doorgelinkt naar de subreddit-specificatie-pagina;
- Door op de titel van de post te klikken, wordt de gebruiker doorgelinkt naar de echte post op Reddit.com;
- Zorg dat je (kleine!) componenten maakt van elementen die vaak terugkomen in jouw applicatie. Als je componenten maken nog lastig vindt, doe je dit pas aan het einde. Iedere pagina en ieder component krijgen hun eigen CSS bestand:
```
src
  └── components
  |    └── button
  |        ├── Button.js
  |        └── Button.css
  |    └── header
  |        ├── Header.js
  |        └── Header.css
  └── pages
       └── homepage
           ├── Home.js
           └── Home.css
```
- Alle aantallen (ups, comments, subscribers) geef je weer in een punt-notatie:
  - 10000 wordt 10.000
  - 8005 wordt 8.005
  - 1456734 wordt 14.567.34
  - 450 wordt 450
- Tijdens het ophalen van de data laat je de gebruiker duidelijk zien dat dat er informatie geladen wordt;
- Als er iets mis gaat bij het ophalen van de data, geef je een foutmelding weer op de pagina;
- Op de subreddit-specificatie pagina gebruik je het bijgevoegde SVG-icoon (in de `assets` map) voor de `< Back to overview`-link
- In het tabblad wordt een eigen icoontje en titel weergegeven (bijvoorbeeld het logo van Reddit)

![screenshot](./src/assets/screenshot.png)

- Bedenk je eigen styling en layout voor deze opdracht;
- Schrijf een duidelijke `README.md`, waarin je in jouw eigen woorden beschrijft:
  - Wat dit project doet
  - Welke technieken je hebt gebruikt
  - Hoe een developer zonder verstand van frontend, dit project zelfstandig kan installeren en starten;