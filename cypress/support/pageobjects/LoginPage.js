/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    
    // Chamada da URL do site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }

    // Clica no botão de realizar login
    clicarBotaoRealizarLogin() {
        cy.get(loginElements.botaoRealizarLogin()).click()
        cy.wait(4000)
    }

    // Informa email no campo input do email
    informarEmail(email) {
        cy.get(loginElements.inputEmail()).type(email)
    }

    // Informa senha no campo input da senha
    informarSenha(senha) {
        cy.get(loginElements.inputSenha()).type(senha)
    }

    // Verifica se botão tem o texto "Esqueceu sua senha?"
    visualizarBotaoRecuperarSenha() {
        cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Esqueceu sua senha?')
    }

    // Visualizar mensagem de erro "Usuário ou senha inválidos."
    visualizarErroLogin() {
        cy.get(loginElements.mensagemErro()).should('contain', 'Usuário ou senha inválidos.')
    }
    
}

export default LoginPage;
