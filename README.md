# Burger Queen (API Client)

## Índice

- [1. Projeto](#1-projeto)
- [2. Planejamento](#2-planejamentoo)
- [3. Protótipo](#3-protótipo)
- [4. Paleta de Cores](#4-paleta-de-cores)
- [5. Logotipo](#5-logotipo)
- [6. Desenvolvimento](#6-desenvolvimento)
- [7. UI e UX](#7-ui-e-ux)
- [8. Objetivos de aprendizagem](#8-objetivos-de-aprendizagem)
- [9. Tecnologias utilizadas](#9-tecnologias-utilizadas)
- [9. Desenvolvedoras](#9-desenvolvedoras)

---

## 1. Projeto

Vixi é um pequeno restaurante 24h que tem como cardápio principal hambúrgueres, como houve um aumento
significativo no movimento do empreendimento, será necessário ter um sistema próprio que auxilie 
os funcionários do salão e da cozinha, a controlar o fluxo de pedidos de forma ordenada e eficiente.

Nosso cliente solicitou que desenvolvesemos uma interface (cliente) que se integre com a API
(servidor) que outra equipe de desenvolvedoras está trabalhando simultaneamente, sua principal 
exigência é ter uma aplicação feita para utilização principalmente em tablets, com fácil usabilidade 
para que seus funcionários consigam acesar a plataforma com facilidade.


## 2. Planejamento

Para conseguir entregar todas as funcionalidades do projeto, organizamos todo o fluxo de desenvolvimento 
utilizando o método Kanban no Github Projects, utilizamos issues, milestone, labels para controlar as tarefas, 
organizar diferentes tipos de problemas, melhorias e bugs do projeto

Dessa forma, definimos:

- MVP (Mínimo Produto Viável)

- Critérios mínimos de aceitação

- Divisão de tarefas

- FDP (Fatiar, Descartar e Priorizar)

![planejamento](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/feat/readme/src/Assets/planejamento.png)

## 3. Protótipo

De acordo com as informações passadas pelo cliente, desenvolvemos o protótipo de baixa fidelidade, primeiramente
para mobile.

![protótipo](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/feat/readme/src/Assets/baixaFidelidade.png)

Fizemos ajustes no protótipo, pois identificamos, atraves de pesquisa com usuários, que algumas alterações seriam
benéficas e trariam mais agilidade a aplicação e tornaria a ferramenta mais fácil para os funcionários.
Abaixo o protótipo de alta fidelidade, tablete e desktop.

![protótipo](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/feat/readme/src/Assets/prot%C3%B3tipo.png)

## 4. Paleta de Cores

A paleta de cores foi escolhida com tons que remetem ao sertão nordestino brasileiro.

![paleta](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/feat/readme/src/Assets/paleta.png)

## 5.Logotipo e Nome do Restaurante

As imagens no logo e o nome do restaurante, foram escolhidos para homenagiar nossos pais, nascidos nos estados de Pernambuco e Piaui e também o sertão nordestino brasileiro.

![logotipo](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/feat/readme/src/Assets/vixiLogo.png)

## 6.Desenvolvimento

 - A aplicação foi desenvolvida como SPA (single-page application), para que o usuário tenha a experiência similar à de um aplicativo para desktop.

- É responsiva para tablets utilizados na horizontal e Desktop.

- Utilizamos React JS para componentizar todo o site. Isso mantém a aplicação com alto desempenho e também permite que os componentes sejam reutilizados, gerando um código de fácil manutenção por qualquer desenvolvedor.

- Instalamos o ESLint na aplicação para manter o código padronizado e pronto para ser testado.

:writing_hand: **História de usuário #1**

  <div align="center">
    <img alt='História de Usuário 1' src="src/Assets/hu1.png">
    </img>
  </div>

:writing_hand: **História de usuário #2**

  <div align="center">
    <img alt='História de Usuário 2' src="src/Assets/hu2.png">
    </img>
  </div>

:writing_hand: **História de usuário #3**

  <div align="center">
    <img alt='História de Usuário 3' src="src/Assets/hu3.png">
    </img>
  </div>

:writing_hand: **História de usuário #4**

  <div align="center">
    <img alt='História de Usuário 4' src="src/Assets/hu4.png">
    </img>
  </div>
  
 
Com base nas histórias dos usuários, organizamos o passo a passo do que deveriamos desenvolver:

|              HU #1 :heavy_check_mark:              	|           HU #2 :heavy_check_mark:          	|           HU #3 :heavy_check_mark:           	|          HU #4 :heavy_check_mark:          	|
|:--------------------------------------------------:	|:-------------------------------------------:	|:--------------------------------------------:	|:------------------------------------------:	|
|                 Criar login e senha                	|       Anotar nome do cliente e a mesa       	|            Ver os pedidos em ordem           	| Ver a lista de pedidos prontos para servir 	|
| Registrar usuário conforme setor(cozinha ou salão) 	| Adicionar e/ou excluir produtos aos pedidos 	| Marcar pedido como 'PRONTO' para ser servido 	|    Marcar os pedidos que foram entregues   	|
|            Fazer login na tela correta             	|     Ver resumo e o valor total do pedido    	| Ver o tempo que levou para preparar o pedido 	|                                            	|
|                                                    	|        Enviar o pedido para a cozinha       	|                                              	|                                            	|

## Aplicação

Resultado da aplicação após finalizarmos as 4 histórias de usuários.

![login](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/feat/readme/src/Assets/telaLogin.png)

![cadastro](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/feat/readme/src/Assets/telaCadastro.png)

![menu](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/feat/readme/src/Assets/menuCardapio.png)

![kitchen](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/feat/readme/src/Assets/cozinha.png)

![status](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/feat/readme/src/Assets/statuspedido.png)

![notFound](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/feat/readme/src/Assets/notFound.png)

## Acessos

Abaixo deixamos login e senha de contas já cadastradas para que possam utilizar a aplicação.

- Cozinha - cozinha@email.com - Senha: 123456

- Salão - salao@email.com - Senha: 123456

## 7.UI e UX

## Principais objetivos de UI: 

- Leitura clara de todos os textos

- Consistência e padrões para não confundir os usuários

- Design minimalista

- Navegação intuitiva

- Responsivo em tablets

- Liberdade e controle do usuário

## Principal objetivos de UX: 

- Ouvir os usuários e compreender como está a sua experiência com a aplicação.

Fizemos uma pesquisa com os usuários para sabermos as opiniões sobre a usabilidade, layout e funcionalidades da aplicação e identificar as possíveis melhorias que poderíamos fazer.

## Feedback e Sugestões de Melhorias

- Gostaram da paleta de cores, nome do restaurante e acharam fácil utilizar a aplicação.
- Fazer responsividade para mobile.
- Dividir lanches simples de duplos.

## 8.Objetivos de aprendizagem

### HTML e CSS
- [x] **Uso de HTML semântico**
- [x] **Uso de seletores de CSS**
- [x] **Empregar o modelo de caixa (box model): borda, margem, preenchimento**
- [x] **Uso de flexbox en CSS**
- [x] **Uso de media queries**

### JavaScript
- [x] **Testes unitários**
- [ ] **Testes assíncronos**
- [ ] **Mocking**
- [x] **Uso ES modules**
- [x] **Uso de linter (ESLINT)**
- [x] **Uso de identificadores descritivos (Nomenclatura | Semântica)**

### Git e GitHub
- [x] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**
- [x] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**
- [x] **GitHub: Criação de contas e repositórios, configuração de chave SSH**
- [x] **GitHub: Implantação com GitHub Pages**
- [x] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**
- [x] **GitHub: Organização pelo Github (projects | issues | labels | milestones | releases)**

### HTTP
- [x] **Solicitações o requisições (request) e respostas (response).**
- [x] **Cabeçalhos (headers)**
- [x] **Corpo (body)**
- [x] **Verbos HTTP**
- [x] **Codigos de status de HTTP**
- [x] **Encodings e JSON**
- [x] **CORS (Cross-Origin Resource Sharing)**

### react
- [x] **jsx**
- [x] **components**
- [x] **events**
- [x] **lists-and-keys**
- [x] **conditional-rendering**
- [x] **lifting-up-state**
- [x] **hooks**
- [x] **css-modules**
- [x] **routing**

### UX (User eXperience)
- [x] **Desenhar a aplicação pensando e entendendo o usuário**
- [x] **Criar protótipos para obter feedback e iterar**
- [x] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**
- [x] **Planejar e executar testes de usabilidade**


## 9.Tecnologias utilizadas

<div style="display: inline_block"><br>
  <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="JS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">  
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="SCSS" height="30" width="50" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
</div>

### Deploy
<div style="display: inline_block"><br>
  <img align="center" alt="netlify" height="30" width="55"src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
</div>

## 10.Desenvolvedoras

Abaixo link de nosso repositório e linkedin.

<div align='center'>

|                              Letícia Aniceto                             	      |                                 Paloma Queiroz                                	|
|:------------------------------------------------------------------------------: |:------------------------------------------------------------------------------:	|
|<img alt="Leticia" src="src/Assets/leticiaDev.png" height='200px'></img> | <img alt="Paloma" src="src/Assets/palomaDev.png" height='200px'></img> 	|
| <a href='https://github.com/leticia-aniceto'><img alt='GitHub - Leticia' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/leticia-braga-aniceto/'><img alt='LinkedIn - Leticia' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a>  |  <a href='https://github.com/palomacqueiroz'><img alt='GitHub - Paloma' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/palomac-queiroz/'><img alt='LinkedIn - Paloma' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a> 	|          	|
</div>

