describe('Test Suite', () => {
  it('It should display the searched ip address information', () => {
    cy.visit('/')

    cy.get('[data-testid="input"]').type('67.99.175.165')
    cy.get('[data-testid="search-btn"]').click()

    cy.get('[data-testid="ip"] > .item__text > :nth-child(2)').should(
      'have.text',
      '67.99.175.165'
    )

    cy.get('[data-testid="city"] > .item__text > :nth-child(2)').should(
      'have.text',
      'Buffalo'
    )

    cy.get('[data-testid="state"] > .item__text > :nth-child(2)').should(
      'have.text',
      'New York'
    )

    cy.get('[data-testid="country"] > .item__text > :nth-child(2)').should(
      'contain.text',
      'United States'
    )

    cy.get('[data-testid="continent"] > .item__text > :nth-child(2)').should(
      'have.text',
      'North America'
    )

    cy.get('[data-testid="latitude"] > .item__text > :nth-child(2)').should(
      'have.text',
      '42.91550064086914'
    )

    cy.get('[data-testid="longitude"] > .item__text > :nth-child(2)').should(
      'have.text',
      '-78.8822021484375'
    )

    cy.get('[data-testid="language"] > .item__text > :nth-child(2)').should(
      'have.text',
      'English (EN)'
    )

    cy.get('[data-testid="currency"] > .item__text > :nth-child(2)').should(
      'have.text',
      'US Dollar (USD)'
    )

    cy.get('[data-testid="ddd"] > .item__text > :nth-child(2)').should(
      'have.text',
      '+1'
    )

    cy.get('[data-testid="is_tor"] > .item__text > :nth-child(2)').should(
      'have.text',
      'No'
    )

    cy.get('[data-testid="is_proxy"] > .item__text > :nth-child(2)').should(
      'have.text',
      'No'
    )

    cy.get(
      '[data-testid="is_datacenter"] > .item__text > :nth-child(2)'
    ).should('have.text', 'No')
  })

  it('Should show a error message when ip is incorrect', () => {
    cy.visit('/')

    cy.get("[data-testid='page-language']").select(0).should('have.value', 'en')

    cy.get('[data-testid="input"]').type('0.0.0')
    cy.get('[data-testid="search-btn"]').click()

    cy.get('[data-testid="warning"] > p')
      .should('exist')
      .and('have.text', 'Por favor, insira um endereço IP válido!')
  })
})
