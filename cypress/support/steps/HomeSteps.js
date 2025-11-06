/* global Given, Then, When */

import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage
const homePage = new HomePage

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

if (typeof Then !== 'Validar Caso de testes 002 - Home do site VR')
{
When(/^clico no botao pra voce$/, () => {
    homePage.clicarBotaoPraVoce();
    return true;
});
When(/^clico no botao unde usar meu vr$/, () => {
	homePage.clicarBotaoOndeUsar();
    return true;
});
Then(/^devera ser apresentado tela do google com mapa$/, () => {
	homePage.campoVisivel();
    return true;
});
}