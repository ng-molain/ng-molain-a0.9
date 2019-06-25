import { getGreeting } from '../support/app.po';

describe('site', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to site!');
  });
});
