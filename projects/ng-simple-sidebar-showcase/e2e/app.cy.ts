describe('ng-simple-sidebar showcase', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the welcome page', () => {
    cy.contains('Welcome').should('exist');
  });

  it('should navigate to about page', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About').should('exist');
  });

  it('should navigate back to welcome', () => {
    cy.contains('Welcome').click();
    cy.url().should('include', '/welcome');
    cy.contains('Welcome').should('exist');
  });
});