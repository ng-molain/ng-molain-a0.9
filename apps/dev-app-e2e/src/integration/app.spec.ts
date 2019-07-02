import { getGreeting } from '../support/app.po';

describe('dev-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to dev-app!');
  });
});
