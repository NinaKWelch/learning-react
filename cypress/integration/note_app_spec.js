
describe('Note app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3002/api/tests/reset')
    const user = {
      name: 'Superuser',
      username: 'root',
      password: 'rootpw'
    }
    cy.request('POST', 'http://localhost:3002/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Notes')
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.contains('Log in').click()
      cy.get('#username').type('root')
      cy.get('#password').type('rootpw')
      cy.contains('button', 'Login').click()
    })

    it('name of the user is shown', function() {
      cy.contains('Superuser logged in')
    })

    it('a new note can be created', function() {
      cy.contains('New note')
        .click()
      cy.get('input')
        .type('a note created by cypress')
      cy.contains('button', 'Save').click()
      cy.contains('a note created by cypress')
    })
  })
})