/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements'
import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const homeElements = new HomeElements
const url = Cypress.config("baseUrl")

class HomePage {
    
    // Validar Mensagens do botão de Compre online"
    visualizarMensagem() {
        cy.get(homeElements.mensagemSucesso()).should('contain', 'Compre online')
    }
    
    // Validar botão visivel
    btnVisivelPraVoce() {
        cy.get(':nth-child(3) > .vr-main-navigation__link')
    }    
    
    // Clica no botão Pra Voce
    clicarBotaoPraVoce() {
        cy.get(':nth-child(3) > .vr-main-navigation__link').click()
        //cy.get(homeElements.btnPravoce()).click()
    }    

    // Clica no botão Onde usar
    clicarBotaoOndeUsar() {
        cy.get('.vr-hero__actions > .vr-button--negative').click()
        //cy.get(homeElements.OndeUsarMeuVR()).click()
    }

    campoSiteVisivel() {
        cy.visit('#endereco')
    }

    campoVisivel() {        
        cy.get(homeElements.endereco()).should('contain', 'Digite o nome ou endereço de um lugar')
    }
    
}

export default HomePage;
