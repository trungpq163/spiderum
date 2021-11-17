describe('shared-ui: Svg component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=svg--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Svg!');
    });
});
