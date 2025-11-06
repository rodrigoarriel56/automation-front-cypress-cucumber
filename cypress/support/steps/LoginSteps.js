/* global Given, Then, When */
const { Given } = require('cucumber')
console.log(`Cukes: ${cukes}`)


import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage
const email = 'email'
const senha = 'senha'

if (typeof Given !== 'Validar Caso de testes 001 - Login no site VR') 
{
Given(/^acessar{int} site VR$/, function(cukes) {
	loginPage.acessarSite();
});
When(/^acessar pagina de login$/, () => {
	loginPage.informarEmail(email);
});
Then(/^devo visualizar botao de recuperar senha esquecida$/, () => {
	loginPage.informarSenha(senha);
    return true;
});
}

if (typeof Given !== 'Validar login no site VR por usuários e senha')
{
Given("acessar site VR", () => {
    loginPage.acessarSite();
})

When("acessar pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
    loginPage.informarEmail(email);
    loginPage.informarSenha(senha);
    loginPage.clicarBotaoRealizarLogin();   
})
}