


//Test Case 1: Register User
describe('Test Case 1: Register User', () => {
  it('Register New user', () => {
    cy.visit('http://automationexercise.com')
    cy.contains ('Home').should ('be.visible')
    cy.contains ('Signup / Login') .click ()
    cy.contains ('New User Signup!').should("be.visible")
    cy.get ('[data-qa="signup-name"]').type ('tamar')
    cy.get ('[data-qa="signup-email"]').type ('tguniava@aat.ge')
    cy.get ('[data-qa="signup-button"]').click()
    cy.contains ("Enter Account Information").should ("be.visible")
    cy.get('#id_gender1').check ()
    cy.get ('#password').type ('guno')
    cy.get ('#days').type ('10')
    cy.get ('#months').type ("February")
    cy.get ('#years').type ('1994')
    cy.get ("#newsletter").check ()

    cy.get ('#optin').check()
  
    cy.get ('#first_name').type ('Tamar')
    cy.get ('#last_name').type ('Guniava')
    cy.get ('#company').type ('GZAAT')
    cy.get ('#address1').type ('Kipshidze street')
    cy.get ('#country').type ('Georgia')
    cy.get ('#state').type ('Tbilisi')
    cy.get ('#city').type ('Tbilisi')
    cy.get ('#zipcode').type ('0179')
    cy.get ('#mobile_number').type ("599905959")
    
    cy.get ('[data-qa="create-account"]').click ()
    cy.contains ('Account Created!').should ('be.visible')
    cy.get ('[data-qa="continue-button"]').click ()
    cy.contains ('Logged in as username').should ('be.visible')

    cy.contains ('Delete Account').click ()
    cy.contains ('Account Deleted!').should ("be.visible")
    cy.contains ('[data-qa="continue -button"]').click()


  })
})
//1. Launch browser
//2. Navigate to url 'http://automationexercise.com'
//3. Verify that home page is visible successfully
//4. Click on 'Signup / Login' button
//5. Verify 'New User Signup!' is visible
//6. Enter name and email address
//7. Click 'Signup' button
//8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
//9. Fill details: Title, Name, Email, Password, Date of birth
//10. Select checkbox 'Sign up for our newsletter!'
//11. Select checkbox 'Receive special offers from our partners!'
//12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
//13. Click 'Create Account button'
//14. Verify that 'ACCOUNT CREATED!' is visible
//15. Click 'Continue' button
//16. Verify that 'Logged in as username' is visible
//17. Click 'Delete Account' button
//18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
