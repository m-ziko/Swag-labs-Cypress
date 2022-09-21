Cypress.Commands.add('insert_username',
(user_name)=>{
    cy.get('[data-test="username"]').type(user_name)

})

Cypress.Commands.add('insert_password',
(password)=>{
    cy.get('[data-test="password"]').type(password)

})
Cypress.Commands.add('click_on_submit_button',()=>{

    cy.get('[data-test="login-button"]').click()
  
})