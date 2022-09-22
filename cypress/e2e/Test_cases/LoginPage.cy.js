/// <reference types="cypress"/>

context("SwagLabs: login page",function(){


  before(function(){
    cy.visit("https://www.saucedemo.com/")
    

    })
    describe("test_login_page",()=>{

        before(function(){
         
            let User_name='standard_user'
            let password = 'secret_sauce'



        })

        it.only('Login_with_valid_creds',()=>{
            
            let User_name='standard_user'
            let password = 'secret_sauce'


            cy.insert_username(User_name)
            cy.insert_password(password)
            cy.click_on_submit_button()
            cy.get('.title').contains('Products')
        })
    })


})