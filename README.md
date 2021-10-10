# Burger Queen (API Client)

## Índice

- [1. Projeto](#1-projeto)
- [2. Planejamento](#2-planejamentoo)
- [3. Protótipo](#3-protótipo)
- [4. Paleta de Cores](#4-paleta-de-cores)
- [5. Logotipo](#5-logotipo)
- [6. Desenvolvimento](#6-desenvolvimento)
- [7. UI e UX](#7-ui-e-ux)
- [8. Objetivos de aprendizagem](#7-objetivos-de-aprendizagem)

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

![planejamento](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/main/planejamento.png)

## 3. Protótipo

De acordo com as informações passadas pelo cliente, desenvolvemos o protótipo de baixa fidelidade, primeiramente
para mobile.

![protótipo](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/main/baixaFidelidade.png)

Fizemos ajustes no protótipo, pois identificamos, atraves de pesquisa com usuários, que algumas alterações seriam
benéficas e trariam mais agilidade a aplicação e tornaria a ferramenta mais fácil para os funcionários.
Abaixo o protótipo de alta fidelidade, disponivel para mobile, tablete e desktop.

![protótipo] ()

## 4. Paleta de Cores

A paleta de cores foi escolhida com tons que remetem ao sertão nordestino brasileiro.

![paleta](https://github.com/palomacqueiroz/SAP006-burger-queen-api-client/blob/main/paleta.png)

## 5.Logotipo

## 6.Desenvolvimento

 - A aplicação foi desenvolvida como SPA (single-page application), para que o usuário tenha a experiência similar à de um aplicativo para desktop.

- É responsiva para tablets utilizados na horizontal, mobile e Desktop.

- Utilizamos React JS para componentizar todo o site. Isso mantém a aplicação com alto desempenho e também permite que os componentes sejam reutilizados, gerando um código de fácil manutenção por qualquer desenvolvedor.

- Instalamos o ESLint na aplicação para manter o código padronizado e pronto para ser testado.

:writing_hand: **História de usuário #1**

  <div align="center">
    <img alt='História de Usuário 1' src="src/Assets/garcom.png">
    </img>
  </div>

:writing_hand: **História de usuário #2**

  <div align="center">
    <img alt='História de Usuário 2' src="app/src/images/readme/hu2.png">
    </img>
  </div>

:writing_hand: **História de usuário #3**

  <div align="center">
    <img alt='História de Usuário 3' src="app/src/images/readme/hu3.png">
    </img>
  </div>

:writing_hand: **História de usuário #4**

  <div align="center">
    <img alt='História de Usuário 4' src="app/src/images/readme/hu4.png">
    </img>
  </div>
  
 
Com base nas histórias dos usuários, definimos algumas funcionalidades para a aplicação:

|              HU #1 :heavy_check_mark:              	|           HU #2 :heavy_check_mark:          	|           HU #3 :heavy_check_mark:           	|          HU #4 :heavy_check_mark:          	|
|:--------------------------------------------------:	|:-------------------------------------------:	|:--------------------------------------------:	|:------------------------------------------:	|
|                 Criar login e senha                	|       Anotar nome do cliente e a mesa       	|            Ver os pedidos em ordem           	| Ver a lista de pedidos prontos para servir 	|
| Registar usuário conforme setor (cozinha ou salão) 	| Adicionar e/ou excluir produtos aos pedidos 	| Marcar pedido como 'PRONTO' para ser servido 	|    Marque os pedidos que foram entregues   	|
|            Fazer login na tela correta             	|     Ver resumo e o valor total do pedido    	| Ver o tempo que levou para preparar o pedido 	|                                            	|
|                                                    	|        Enviar o pedido para a cozinha       	|                                              	|                                            	|


#### [Historia de usuario 1] Garçom/Garçonete deve poder entrar no sistema, caso o admin já lhe tenha dado as credenciais

Eu, como garçom/garçonete quero entrar no sistema de pedidos.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

- Acessar uma tela de login.
- Inserir email e senha.
- Receber mensagens de erros compreensíveis, conforme o erro e as informações inseridas.
- Entrar no sistema de pedidos caso as credenciais forem corretas.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

- Você deve ter recebido _code review_ de pelo menos uma parceira.
- Fez _testes_ unitários e, além disso, testou seu produto manualmente.
- Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
- Você deu deploy de seu aplicativo e marcou sua versão (tag git).

---

#### [História de usuário 2] Garçom/Garçonete deve ser capaz de anotar o pedido do cliente

Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não
depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a
cozinha para serem preparados em ordem.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

- Anotar o nome do cliente.
- Adicionar produtos aos pedidos.
- Excluir produtos.
- Ver resumo e o total da compra.
- Enviar o pedido para a cozinha (guardar em algum banco de dados).
- Funcionar bem em um _tablet_.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

- Você deve ter recebido _code review_ de pelo menos uma parceira.
- Fez _testes_ unitários e, além disso, testou seu produto manualmente.
- Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
- Você deu deploy de seu aplicativo e marcou sua versão (tag git).

---

#### [História de usuário 3] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder
marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido
está pronto para ser entregue ao cliente.

##### Critérios de aceitação

- Ver os pedidos ordenados à medida em que são feitos.
- Marcar os pedidos que foram preparados e estão prontos para serem servidos.
- Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado
  como concluído.

##### Definição de pronto

- Você deve ter recebido _code review_ de pelo menos uma parceira.
- Fez _testes_ unitários e, além disso, testou seu produto manualmente.
- Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
- Você deu deploy de seu aplicativo e marcou sua versão (tag git).

---

#### [Historia de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los
rapidamente aos clientes.

##### Critérios de aceitação

- Ver a lista de pedidos prontos para servir.
- Marcar os pedidos que foram entregues.

##### Definição de pronto

- Você deve ter recebido _code review_ de pelo menos uma parceira.
- Fez _testes_ unitários e, além disso, testou seu produto manualmente.
- Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
- Você deu deploy de seu aplicativo e marcou sua versão (tag git).
- Os dados devem ser mantidos intactos, mesmo depois que um pedido for
  finalizado. Tudo isso para poder ter estatísticas no futuro.


## 7.UI e UX

# Principais objetivos de UI: 

- Leitura clara de todos os textos

- Consistência e padrões para não confundir os usuários

- Design minimalista

- Navegação intuitiva

- Responsivo em tablets

- Liberdade e controle do usuário

# Principal objetivos de UX: 

- Ouvir os usuários e compreender como está a sua experiência com a aplicação.

Fizemos uma pesquisa com os usuários para sabermos sua opinião sobre a usabilidade, layout e funcionalidades
da aplicação e identificar as possíveis melhorias que poderíamos fazer.

# Feedback e Sugestões de Melhorias

## 8.Objetivos de aprendizagem

### HTML e CSS
- [ ] **Uso de HTML semântico**
- [ ] **Uso de seletores de CSS**
- [ ] **Empregar o modelo de caixa (box model): borda, margem, preenchimento**
- [ ] **Uso de flexbox en CSS**
- [ ] **Uso de media queries**

### JavaScript
- [ ] **Testes unitários**
- [ ] **Testes assíncronos**
- [ ] **Mocking**
- [ ] **Uso ES modules**
- [ ] **Uso de linter (ESLINT)**
- [ ] **Uso de identificadores descritivos (Nomenclatura | Semântica)**

### Git e GitHub
- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**
- [ ] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**
- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**
- [ ] **GitHub: Implantação com GitHub Pages**
- [ ] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**
- [ ] **GitHub: Organização pelo Github (projects | issues | labels | milestones | releases)**

### HTTP
- [ ] **Solicitações o requisições (request) e respostas (response).**
- [ ] **Cabeçalhos (headers)**
- [ ] **Corpo (body)**
- [ ] **Verbos HTTP**
- [ ] **Codigos de status de HTTP**
- [ ] **Encodings e JSON**
- [ ] **CORS (Cross-Origin Resource Sharing)**

### react
- [ ] **jsx**
- [ ] **components**
- [ ] **events**
- [ ] **lists-and-keys**
- [ ] **conditional-rendering**
- [ ] **lifting-up-state**
- [ ] **hooks**
- [ ] **css-modules**
- [ ] **routing**

### UX (User eXperience)
- [ ] **Desenhar a aplicação pensando e entendendo o usuário**
- [ ] **Criar protótipos para obter feedback e iterar**
- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**
- [ ] **Planejar e executar testes de usabilidade**

