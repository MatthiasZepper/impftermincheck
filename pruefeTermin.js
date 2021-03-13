export const pruefeTermin = (place, state) => {

     // Webseite aufrufen
       cy.visit('https://www.impfterminservice.de/impftermine', {timeout: 20000})
       cy.contains('Auswahl bestätigen').click()
       cy.getCookies()

     // Bundesland auswählen
       cy.get(':nth-child(1) > .d-flex > .select2 > .selection > .select2-selection').click()
       cy.get('[formcontrolname="state"]').select(state.toString(),{force: true}).should('have.value',state.toString())
       .invoke('val')
       cy.getCookies()

     // Impfzentrum auswählen
       cy.get(':nth-child(2) > .d-flex > .select2 > .selection > .select2-selection').click()

       // Einfache Lösung funktioniert nicht zuverlässig, da
       // manchmal Zeilenumbrüche oder zusätzliche Leerzeichen in den Namen der Impfzentren enthalten sind
       //cy.get('[data-select2-id="4"][formcontrolname="center"]').select(place.toString(),{force: true})

       // Dann halt umständlich, aber dafür reicht ein Teil der Bezeichnung wie Postleitzahl, Ort oder Name der Halle.
       cy.get('[data-select2-id="4"][formcontrolname="center"]')
         .should('contain.text',place.toString())
          // value der ausgewählten option in variable schreiben
         .contains(place.toString()).then($selcenter => {
            let centername = $selcenter.text();
            let centerselector = $selcenter.val();
            cy.log('Selecting ${centername}')
            cy.get('[data-select2-id="4"][formcontrolname="center"]').select(centerselector,{force: true}).invoke('val')
         })
         // Ende des umständlichen Teils

       cy.get('button[type="submit"]').contains('Zum Impfzentrum').click()
       cy.getCookies()

     // Impfanspruch verneinen
       cy.url().should('include', '/impftermine/service?plz=')
       cy.contains('Auswahl bestätigen').click()
       cy.getCookies()
       cy.get('.ets-radio-wrapper > :nth-child(2) > span').click().wait(4500)

        cy.get('body').then(($body) => {
           if ($body.text().includes('keine freien Termine in Ihrer Region')) {
             throw new Error(`Keine Termine frei`)
                } else {
             cy.get('.ets-login-form-section-wrapper',{ log: false }).contains('Personalausweis oder ein anderer Lichtbildausweis').should('exist')
              }
         })
}
