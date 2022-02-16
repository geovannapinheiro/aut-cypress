
var faker = require('faker');
describe('Funcionalidade Pré-cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });


    it('Deve completar o pré cadastro com sucesso', () => {
        //Setting faker variables
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let email = faker.internet.email(nomeFaker) //creates an email address matching the first faker name


        //Filling out form
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()      

    });

});