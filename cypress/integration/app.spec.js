describe('Navigation', () => {
    it('should navigate to posts page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="posts"]').click()

        cy.url().should('include', '/posts')

        cy.get('h1').contains('Post 1')
    })
})