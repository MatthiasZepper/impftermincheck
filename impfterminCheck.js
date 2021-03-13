import { pruefeTermin } from './pruefeTermin'

/*
 Hier das Bundesland der Impfzentren eintragen
*/

let state = 'Nordrhein-Westfalen'

/*
Es ist ausreichend nur die Postleitzahl
oder die Stadt oder den Namen der Halle anzugeben,
solange dies eindeutig ein Zentrum benennt.
Gibt es in einer Stadt mehrere Zentren der Name der Stadt oder ggf. die Postleitzahl nicht aus.
*/

let places = [
  " 32130 Enger, Impfzentrum des Kreises Herford "," 32479 Hille, Sporthalle Unterlübbe "," 32657 Lemgo, Phoenix Contact Arena "," 33034 Brakel, Kreis Höxter "," 33154 Salzkotten, Corona-Impfzentrum Kreis Paderborn "," 33334 Gütersloh, Kreis Gütersloh Impfzentrum "," 33602 Bielefeld, Stadthalle Bielefeld/Ausstellungshalle "," 44263 Dortmund, IZ_DO_WarsteinerMusicHall "," 44627 Herne, Impfzentrum Herne "," 44791 Bochum, RuhrCongress Bochum "," 45657 Recklinghausen, Impfzentrum Kreis Recklinghausen "," 45891 Gelsenkirchen, Emscher-Lippe-Halle "," 46242 Bottrop, Impfzentrum Bottrop "," 46342 Velen, Impfzentrum Kreis Borken "," 48155 Münster, Stadt Münster - Impfzentrum "," 48249 Dülmen, IZ_COE_Werksgelände Wiesmann "," 48268 Greven, Impfzentrum Kreis Steinfurt "," 57080 Siegen, Impfzentrum des Kreises Siegen-Wittgenstein "," 57439 Attendorn, Impfzentrum für den Kreis Olpe "," 58093 Hagen, Stadthalle Hagen "," 58256 Ennepetal, Impfzentrum des Ennepe-Ruhr-Kreises "," 58511 Lüdenscheid, historische Schützenhalle Loh  "," 59063 Hamm, Neue Dreifachsporthalle der Friedensschule "," 59320 Ennigerloh, Impfzentrum Kreis Warendorf "," 59425 Unna, Kreissporthalle Unna "," 59494 Soest, Impfzentrum Kreis Soest "," 59939 Olsberg, Impfzentrum Hochsauerlandkreis "
            ]

Cypress._.each(places, place => {
  it(`Prüfe Termine in ${place}`, () => {
    pruefeTermin(place,state)
  })
})
