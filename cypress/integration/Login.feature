Feature: Login site VR

    Background: Acessar site da VR Beneficios
        Given acessar site VR

    @testeum
    Scenario: Visualizar opção de recuperar senha esquecida
        When acessar pagina de login
        Then devo visualizar botao de recuperar senha esquecida

    @testedois
    Scenario Outline: Realizar login com dados inválidos
        Given acessar site VR
        And informo <email> incorreto
        And informo <senha> incorreta
        When clico no botão de realizar login
        Then devo visualizar mensagem de erro

        Examples:
            | email                        | senha      |
            | gabriel.fernando@gmail.com   | Senha94030 |
            | aquino.agostinho@hotmail.com | 999820SgB  |
