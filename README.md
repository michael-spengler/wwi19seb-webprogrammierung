# WWI19SEB Web Programmierung

## Zeitraum
10.05.2021 - 30.07.2021

## Technologische Inhalte
1. Grundlagen: HTML, CSS, JavaScript, TypeScript
2. Frontendentwicklungsframeworks: VueJS, Angular
3. Backend Laufzeitumgebungen: NodeJS, Deno 
4. Backendentwicklungsframeworks wie NestJS
5. Testframeworks: z.B. [CodeceptJS](https://codecept.io/) and their usage for Web Harvesting / Web Crawling
6. Chat Bot Integrationen: Telegram, Slack, Discord, Reddit, Twitter  
7. Smart Contract Development: Ethereum Blockchain + Binance Smartchain

## Projektvorschläge
Kann grundsätzlich von den Studierenden kommen solange die o.g. Technologien und die von Herrn Pagnia (Verteilte Systeme) gewünschten Schwerpunkte erkundet werden können.

Siehe Issues Tab... 

### Skills des Dozenten
1. Chat Bots
2. Blockchains / DLT / Smart Contract Development
3. Progressive Web Apps
4. Web Harvesting / Web Crawling (e.g. to solve the chicken and egg problem)
5. Natural Language Processing (NLP)
6. Machine Learning (Basics)




## Telegram
https://t.me/joinchat/ZMUpP9w5V0IzNDky

## Voraussetzungen
1. https://code.visualstudio.com/insiders/  
2. https://github.com account  
3. https://telegram.org  
4. https://brave.com  
5. https://nodejs.org/en/ (recommended version)
6. https://deno.land/

## Empfehlungen auf dem Pfad der Erkenntnis
1. Investiere ein paar Stunden in freies Experimentieren bei [w3 schools](https://www.w3schools.com)   
2. Ziehe Dir [dieses Video](https://www.youtube.com/watch?v=mhnpeOLiQTg) rein
3. Experimentiere mit NodeJS und Deno 
4. Stelle Fragen per Telegram Channel oder per stackoverflow - auch wenn die Fragen vielleicht "dumm" erscheinen.  


## Vorlesungen
### 20.05.2021

![wwi19-seb-20052021](https://user-images.githubusercontent.com/43786652/119804240-746a3000-bee0-11eb-8024-9d37e24709e8.png)

### 27.05.2021
1. Sicherstellen, dass jeder nachvollziehen kann was das folgende Programm tut.
https://github.com/michael-spengler/wwi19seb-webprogrammierung/blob/main/example-application/backend/example-deno-server.ts

1.1. Mietwagenanbieter + Hotelzimmeranbieter
Der Request geht an den Coordinator


2. Sicherstellen, dass Deno bei jedem funktioniert

3. die erste angular app entwickeln  
3.1 https://angular.io/guide/setup-local 
3.2 Sicherstellen, dass dies bei jedem funktioniert 

4. Invitation based Authentication vorstellen

5. Web Harvesting erläutern  
Solving the Chicken And Egg Challenge --> getting content into your application  
E.g. content which comes from fb groups (https://www.facebook.com/groups/196177820486972/events)   
5.1 https://codecept.io/quickstart/

6. Image Recognition erläutern
Could also be used in the context of solving the chicken and egg problem (5)  

### 10.06.2021
1. Sicherstellen, dass das [vue cli](https://v3.vuejs.org/guide/installation.html#cli) bei jedem installiert werden konnte und funktioniert
```sh
npm install -g @vue/cli
```
2. Die erste vuejs app entwickeln 
```sh
npm init vite-app example-vue-app
```

3. Ein Frontend Beispiel für das Verteilte Systeme Szenario entwerfen
**User Story**
As a traveler I want to book a flight and a hotel room in order to enjoy a relaxed vacation
If the booking of the hotel room goes wrong also the booking of the flight shall be cancelled and vice versa.
We will use a REST API 

4. GitHub Actions & GitHub Pages based Deployment vorstellen - siehe [FFC](https://github.com/fancy-flashcard/ffc)

5. Chatbot im Kontext der FFC vorstellen



**Entscheidung**
Es steht jedem frei ob er sich bei mir auf das "VS Frontend fokussiert" oder zu einem "freestyle projekt" beiträgt oder zu beiden.

Bei den freestyle projekten könnt ihr gerne sehr triviale backend implementierungen (z.B. keine Datenbank, keine Normalisiert bzgl. Datenmodell). Ihr könnt sogar eine Client Only App entwickelnt - siehe z.B. [Fancy Flashcards Classic](https://github.com/fancy-flashcard/ffc).

Qualitätsmerkmale auf welche ich jedoch immer wert lege sind:

1. High separation of concerns
2. TypeSafety
3. High Cohesion und Loose Coupling (interfaces) 

Wir brauchen die Endpoints + die zu erwartenden Daten


### 17.06.2021
1. Das [Angular basierte Beispielfrontend](https://github.com/michael-spengler/wwi19seb-webprogrammierung/tree/main/example-two-phase-commit-showcase-angular) an eines der Two-Phase-Commit Backends anbinden.

2. [Svelte](https://svelte.dev/) vorstellen und grob mit angular, react und vue [vergleichen](https://www.youtube.com/watch?v=DZyWNS4fVE0&t=58s)  

3. [Snel](https://github.com/crewdevio/Snel) vorstellen und eine example-svelte-app erstellen
```sh
snel create example-svelte-app
```

4. Typische Technologieentscheidungen in der Web Entwicklung
4.1. Welches Frontend (wie soll der User mit meiner Web App interagieren? e.g. Browser, Telegram Chatbot, ...)
4.2. Brauche ich ein Backend? Wenn ja: Welche Laufzeitumgebung soll das Backend nutzen? 
4.3. Brauche ich eine Persistenz für Anwendungsdaten? Wenn ja: Brauche ich eine Datenbank?

5. Die Inhalte der vorangegangenen Vorlesungen grob wiederholen

Feedback an Spengler:
Grundsätzlich ist es gut vieles Innovatives kennenzulernen - gleichzeitig wäre es wertvoll etwas tiefer in ausgewählte Technologien einzutauchen!!

Umfrage Ergebnis: Ausgewählte Deep Dives
Umfrage Ergebnis Deep Dives: Angular (18) / React (7) / Deno (2) / Svelte (1)

Exkurs: Argumente aus der Crowd für React
Gut angefühlt (evtl. einfach weil wir tief drin waren)
Auszug aus einem Video zum Thema angular vs. react: https://youtu.be/khhRY2vZGKs?t=273 

Investiere in Technologien, die mit einer hohen Wahrscheinlichkeit eine long term mainstream adoption erreichen und bei denen "design for flexibility" built in ist. ... Weil dadurch das gesamte Wertschöpfungspotential m.E. maximal ist --> Invest in non-proprietary technologies.

6. Deep Dive Angular
Parent - Child Components + Component Interaction
Angular - Logarithmische Lernkurve 

7. Zeit für Gruppenarbeiten an FreeStyle Projekten und an den Two-Phase-Commit showcases

### 24.06.2021
1. TSLint / static code checks automation...
Potential [TSLINT Template](https://github.com/michael-spengler/tslint/blob/master/tslint.json)
Potential automation support by adding commit hooks via [husky](https://www.npmjs.com/package/husky)

2. Trading Bots (why manual trading seems not recommendable)
Beispiel für [Sentiment Analyse](https://github.com/DHBWMannheim/MachineLearning) --> [Ergebnisse](https://ml.klopapier.exchange/sentiment/twitter)  
Beispiel für [Technische Analyse](https://github.com/DHBWMannheim/MachineLearning) --> [Ergebnisse](https://ml.klopapier.exchange/technical/ETH-USD?days=1)  
Beispiel für [Fundamental Analyse]() (tbd) Warren Buffet - was ist die Value Proposition? Wie ist das Timing von Meilensteinen...
Beispiel für [Insider Trading]() (tbd) XRP + [ICP](https://coinmarketcap.com/currencies/internet-computer/)
Beispiel für [Marktmanipulation]() (tbd) Die Manipulationsmasse ist in einem passenden Verhältnis zum Hebelwirkungsinstrument zu gestalten.

Don't let FUD and FOMO guide you individually.

Fee Schedule [Binance Futures](https://www.binance.com/en/support/faq/360033544231),

3. Chatbots
Beispiel Implementierungen siehe [DHBW Learning Apps](https://github.com/michael-spengler/DHBW-Learning-Apps)

4. Further Deep Dives into the Angular world
[Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)

5. Show one possibility for Component Interaction in Svelte 
Beispiele siehe [DHBW Chatbot](https://github.com/michael-spengler/DHBW-Learning-Apps/blob/main/dhbw-chatbot/src/App.svelte#L92-L94) 

6. Hinweis: Wenn möglich weitgehen "mobile first" entwickeln. Hintergrund: Es ist einfacher den Content auf einem großen Screen darzustellen - es kann dann allerdings sehr schwierig werden das "runterzudampfen". Etc....

### 1.7.21 (13:30!!!!)
1. Angular Deep Dive --> Angular Material / Bootstrap Grid (responsiveness)  
2. Analyse the angular based [Dance Planner Frontend](https://github.com/dance-planner/dance)   
3. Develop a lightweight svelte based alternative  
4. Deploy this lightweight alternative via GitHub Pages  
5. Try to provide such a thing completely without a dedicated backend - fetch the data from the raw jsons on github instead...  
6. Try the forms in issues based approach for event creation...  
7. Zeit für die Gruppenarbeiten  
8. Exkurs zum Thema Sentiment Analyse --> [Sentiment Dashboard](http://h2933354.stratoserver.net/dashboard)  
9. Exkurs UI Mockup Creation Tool - z.B. https://balsamiq.cloud/#  
10. prepare the [frontend for the two phase commit](https://github.com/michael-spengler/wwi19seb-webprogrammierung/tree/main/example-two-phase-commit-showcase-angular)   


### 8.7.21 (13:30!!!)
1. (Check oder) Zusammenstöpseln der 2 phase commit Geschichte --> In [dieser Methode](https://github.com/michael-spengler/wwi19seb-webprogrammierung/blob/main/example-two-phase-commit-showcase-angular/src/app/booking-table/booking-table.component.ts#L24) sollten wir den Backend Call implementieren.






