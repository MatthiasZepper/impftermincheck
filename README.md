<p align="center">
  <video width="1121" height="540" controls>
  <source src="./termincheck.mp4" type="video/mp4">
</video></p>

# Impftermine prüfen

#### implementiert als Cypress.io Routine

Dieses Skript steuert einen Browser so, als ob ein Mensch händisch in dem jeweiligen Impfzentrum nach einem Termin suchen würde und wertet die Antwort des Servers automatisiert aus.

*Aufgrund der raren Termine konnte die zuverlässige Erkennung freier Kapazitäten leider noch nicht gründlich getestet werden*

## Verwendung

- [Cypress installieren](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing)
  ```
  cd /your/project/path
  npm install cypress --save-dev
  ```
- [Cypress starten](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Opening-Cypress)
  ```
  $(npm bin)/cypress open
  ```
- `pruefeTermin.js` und `impfterminCheck.js` in das Verzeichnis `/your/project/path/cypress/integration/` kopieren

- `impfterminCheck.js` im Texteditor bearbeiten:

  1.) Gewünschtes Bundesland festlegen
  ```JavaScript
  let state = "Nordrhein-Westfalen"
  ```
  2.)  Zu prüfende Zentren festlegen:
  ```JavaScript
  let places = [
      "44263 Dortmund",
      "Impfzentrum Herne",
      "RuhrCongress Bochum",
      "Gelsenkirchen",
      "46242"
            ]
  ```
  *Solange der Text ein Impfzentrum eindeutig identifiziert muss nicht der volle Eintrag angegeben werden*

- [impfterminCheck.js ausführen](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview)  

## Lizenz

MIT License (MIT)
