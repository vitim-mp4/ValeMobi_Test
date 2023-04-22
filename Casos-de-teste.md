language: pt-br

Funcionalidade: Login
Como um usupario no sistema TradeMap
Eu quero realizar o Login
Para acessar todas as funcionalidades da plataforma

Precondição:
Dado que "Carlos" tem uma conta no TradeMap

Cenario 1: Login valido com E-mail
Dado que "Carlos" tem uma conta no TradeMap
E acesso a plataforma
E preenche o campo de "E-mail, CPF ou celular" com o E-mail
E preenche o campo de "Senha"
Quando ele clica no botão "Entrar na minha conta"
Então ele deve ser redirecionado para a tela "home" da plataforma

Cenario 2: Login valido com CPF
Dado que "Carlos" tem uma conta no TradeMap
E acesso a plataforma
E preenche o campo de "E-mail, CPF ou celular" com o CPF
E preenche o campo de "Senha"
Quando ele clica no botão "Entrar na minha conta"
Então ele deve ser redirecionado para a tela "home" da plataforma

Cenario 3: Login valido com Telefone
Dado que "Carlos" tem uma conta no TradeMap
E acesso a plataforma
E preenche o campo de "E-mail, CPF ou celular" com o Telefone
E preenche o campo de "Senha"
Quando ele clica no botão "Entrar na minha conta"
Então ele deve ser redirecionado para a tela "home" da plataforma

Precondição:
Dado que não tenho conta cadastrada

Cenario 4: Login invalido com E-mail
Dado que não tenho conta cadastrada
E acesso a plataforma
E preenche o campo de "E-mail, CPF ou celular" com um E-mail inesistente
E preenche o campo de "Senha" com uma senha inesistente
Quando ele clica no botão "Entrar na minha conta"
Então não deve acontecer nada

Cenario 5: Login invalido com CPF
Dado que não tenho conta cadastrada
E acesso a plataforma
E preenche o campo de "E-mail, CPF ou celular" com um CPF inesistente
E preenche o campo de "Senha" com uma senha inesistente
Quando ele clica no botão "Entrar na minha conta"
Então não deve acontecer nada

Cenario 6: Login invalido com Telefone
Dado que não tenho conta cadastrada
E acesso a plataforma
E preenche o campo de "E-mail, CPF ou celular" com um Telefone inesistente
E preenche o campo de "Senha" com uma senha inesistente
Quando ele clica no botão "Entrar na minha conta"
Então não deve acontecer nada