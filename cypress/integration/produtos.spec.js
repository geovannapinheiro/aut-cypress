

describe('Funcionalidade Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            // .first()
            //.eq(3)
            //.last()
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });


    it.only('Deve adicionar produto ao carrinho', () => {
        var qtde = 3;
        
        //Searching product
        cy.get('[class="product-block grid"]')
        // .first()
        //.eq(3)
        //.last()
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()

        //Setting preferences
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(qtde)

        //Adding to cart and validating addition
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items')

        //Checking cart
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtde)
        cy.get('.woocommerce-message').should('contain', qtde + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

        });



});