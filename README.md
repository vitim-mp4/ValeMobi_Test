Repositório criado para realizar a automatização do teste ultilizando o Cypress.

Instalar Cypress:

*Informacoes inportantes*
- Teste foi realizado com o usuario "Carlos" ja que minha conta do Trademap nao esta disponivel para acesso.
- Para gerar o relatorio dos testes basta executar o comando "npx cypress run --env allure=true"

*Sistema operacional*
- Cypress é um aplicativo de desktop instalado no seu computador. O aplicativo de desktop oferece suporte a estes sistemas operacionais:

*macOS 10.9 e superior (apenas 64 bits)*
*Linux Ubuntu 12.04 e superior, Fedora 21 e Debian 8 (somente 64 bits)*
*Windows 7 e superior*

Caso esteja usando Linux, você pode precisar ter as dependências necessárias instaladas em seu sistema.
(Lembrando que *pode* nao ser preciso)

*Ubuntu/Debian*
- apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
*CentOS*
- yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib

*npm install*
Install Cypress via npm:

- cd /your/project/path
- npm install cypress --save-dev

*yarn add*
Installing Cypress via yarn:

- cd /your/project/path
- yarn add cypress --dev

*Windows*
Install Cypress via Windows:
- Realizar download no link https://download.cypress.io/desktop
- Extrair arquivo

*Abrir Cypress*

Se você usou o npm para instalar, o Cypress agora foi instalado em seu diretório ./node_modules, com seu executável binário acessível em ./node_modules/.bin.

Agora você pode abrir o Cypress a partir da raiz do seu projeto de uma das seguintes maneiras:

- ./node_modules/.bin/cypress open
- npx cypress open
- yarn run cypress open

Caso esteja no Windows ao terminar de extrair e abrir o Cypress basta somente executar o projeto.

*Gitignore:*

- No caso desse projeto para evitar problemas com Windows decidi nao limitar os arquivos do node_modules.