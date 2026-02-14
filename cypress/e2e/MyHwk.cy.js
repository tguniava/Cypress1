


//Test Case 1: Register User
describe('Automation Exercise Test Suite', () => {
beforeEach (() => {
  cy.visit ('https://www.automationexercise.com/')
  cy.contains ('Home').should ('be.visible')

})


  it('Register New user', () => {
    cy.contains ("Signup / Login").click ()
    cy.contains ('New User Signup!').should("be.visible")
    cy.get ('[data-qa="signup-name"]').type ('tamar')
    cy.get ('[data-qa="signup-email"]').type ('tguniava@yahoo.com')
    cy.get ('[data-qa="signup-button"]').click()
    cy.contains ("Enter Account Information").should ("be.visible")
    cy.get('#id_gender1').check()
    cy.get ('#password').type ('guno')
    cy.get ('#days').select ('10')
    cy.get ('#months').select ("February")
    cy.get ('#years').select ('1994')
    cy.get ("#newsletter").check()

    cy.get ('#optin').check()
  
    cy.get ('#first_name').type ('Tamar')
    cy.get ('#last_name').type ('Guniava')
    cy.get ('#company').type ('GZAAT')
    cy.get ('#address1').type ('West Side')
    cy.get ('#country').select ('USA')
    cy.get ('#state').type ('New York')
    cy.get ('#city').type ('New York')
    cy.get ('#zipcode').type ('10019')
    cy.get ('#mobile_number').type ("+12599905959")
    
    cy.get ('[data-qa="create-account"]').click()
    cy.contains ('Account Created!').should ('be.visible')
    cy.get ('[data-qa="continue-button"]').click()
    cy.contains ('Logged in as Tamar').should ('be.visible')

    cy.contains ('Delete Account').click()
    cy.contains ('Account Deleted!').should ("be.visible")
    cy.get('[data-qa="continue-button"]').click()


  })

  it('Test Case 2: Login User with correct email and password', () => {
    
    cy.contains ('Signup / Login').click()
    cy.contains ('Login to your account').should ("be.visible")
    cy.get ('[data-qa="login-email"]'). type ('test@gmail.com');
    cy.get ('[data-qa="login-password"]').type ("password345"); 
    cy.get ('[data-qa="login-button"]'). click()
    cy.contains ("logged in as username").should ("be.visible")
    cy.contains ("Delete Account").click()
    cy.contains ("ACCOUNT DELETED").should ("be.visible")
  })
   
  it('Test Case 3: Login with incorrect email and password', ()=>{
  cy.contains ('Signup / Login').click ()
  cy.contains ('Login to your account').should("be.visible")
  cy.get ('[data-qa="login-email"]').type ('wrongemail@gmail.com')
  cy.get ('[data-qa="login-password"]').type ("wrongpassword678")
  cy.get ('[data-qa="login-button"]').click()
  cy.contains ("Your email or password is incorrect!").should ("be.visible")

})

it ('Test Case 4: Logout User',()=> {
cy.contains ("Signup / Login").click()
cy.contains ('Login to your account').should ("be.visible")
cy.get('[data-qa="login-email"]').type ("email@gmail.com")
cy.get('[data-qa="login-password"]').type ("password567")
cy.get('[data-qa="login-button"]').click()
cy.contains ("logged in as username").should ("be.visible")
cy.get('[data-qa="logout-button"]').should ("be.visible").click()
cy.contains ("Login to your account").should ("be.visible")
})

it ('Test Case 5: Register User with existing email', ()=> {
cy.contains("signup/Login"). click()
cy.contains('New User Signup!').should ("be.visible")
cy.get('[data-qa="signup-name"]').type ('user')
cy.get('[data-qa="signup-email"]').type ("user@gmail.com")
cy.get('[data-qa="signup-button"]').click()
cy.contains('Email Address already exist').should ("be.visible")


})

})
//Test Case 5: Register User with existing email
//1. Launch browser
//2. Navigate to url 'http://automationexercise.com'
//3. Verify that home page is visible successfully
//4. Click on 'Signup / Login' button
//5. Verify 'New User Signup!' is visible
//6. Enter name and already registered email address
//7. Click 'Signup' button
//8. Verify error 'Email Address already exist!' is visible



//Test Case 4: Logout User
//1. Launch browser
//2. Navigate to url 'http://automationexercise.com'
//3. Verify that home page is visible successfully
//4. Click on 'Signup / Login' button
//5. Verify 'Login to your account' is visible
//6. Enter correct email address and password
//7. Click 'login' button
//8. Verify that 'Logged in as username' is visible
//9. Click 'Logout' button
//10. Verify that user is navigated to login page

//Test Case 3: Login User with incorrect email and password
//1. Launch browser
//2. Navigate to url 'http://automationexercise.com'
//3. Verify that home page is visible successfully
//4. Click on 'Signup / Login' button
//5. Verify 'Login to your account' is visible
//6. Enter incorrect email address and password
//7. Click 'login' button
//8. Verify error 'Your email or password is incorrect!' is visible

//Test Case 2: Login User with correct email and password
//1. Launch browser
//2. Navigate to url 'http://automationexercise.com'
//3. Verify that home page is visible successfully
//4. Click on 'Signup / Login' button
//5. Verify 'Login to your account' is visible
//6. Enter correct email address and password
//7. Click 'login' button
//8. Verify that 'Logged in as username' is visible
//9. Click 'Delete Account' button
//10. Verify that 'ACCOUNT DELETED!' is visible




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
//19. 
//20.