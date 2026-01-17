#utf-8
#language: pt

Funcionalidade: Checkout de cafés

Cenário: Adicionar três cafés e finalizar compra
    Dado que estou na página inicial
    Quando adiciono 3 cafés ao carrinho
    E recuso a oferta de café extra
    Então devo ver o total correto no carrinho
    E o total deve ser "$34.00"
    Quando acesso o total
    E preencho nome e email
    Então devo conseguir finalizar o cadastro