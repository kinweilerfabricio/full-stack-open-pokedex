/*global cy */

describe('Pokedex app', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5000'); // ajusta si es otro puerto
    cy.contains('pikachu', { timeout: 10000 });
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.');
  });
});