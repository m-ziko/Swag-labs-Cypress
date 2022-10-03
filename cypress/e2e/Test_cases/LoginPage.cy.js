/// <reference types="cypress"/>

context("SwagLabs: login page",function(){

       

    describe("test_login_page",()=>{
        this.beforeEach(function(){
            cy.visit("https://www.saucedemo.com/")
            
        
            })
        before(function(){
         
            let User_name='standard_user'
            let password = 'secret_sauce'



        })

        it('Login_with_valid_creds',()=>{
            
            let User_name='standard_user'
            let password = 'secret_sauce'


            cy.insert_username(User_name)
            cy.insert_password(password)
            cy.click_on_submit_button()
            cy.get('.title').contains('Products')

        })
        it('Login_with_invalid_UserName',()=>{
            
            let User_name='standard_user1'
            let password = 'secret_sauce'


            cy.insert_username(User_name)
            cy.insert_password(password)
            cy.click_on_submit_button()
            cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
            
        })
        it('Login_with_invalid_Password',()=>{
            
            let User_name='standard_user'
            let password = 'secret_sauce1'


            cy.insert_username(User_name)
            cy.insert_password(password)
            cy.click_on_submit_button()
            cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
            
        })
        it('Login_with_invalid_Password',()=>{
            
            let User_name='standard_user'
            let password = 'secret_sauce1'


            cy.insert_username(User_name)
            cy.insert_password(password)
            cy.click_on_submit_button()
            cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
            
        })
        it('Login_with_Empty_UserName',()=>{
            
            let password = 'secret_sauce'


            cy.insert_password(password)
            cy.click_on_submit_button()
            cy.get('[data-test="error"]').contains('Epic sadface: Username is required')
            
        })
        it('Login_with_Empty_Password',()=>{
            
            let User_name='standard_user'


            cy.insert_username(User_name)
            cy.click_on_submit_button()
            cy.get('[data-test="error"]').contains('Epic sadface: Password is required')
            
        })
    })


})
