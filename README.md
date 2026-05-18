## Projeto Gestão de Clube - backend e frontend
## Status do Projeto: Em desenvolvimento
--------------------------------------------------------

## Sobre o Projeto
Esse projeto está sendo desenvolvido com o objetivo de colocar em pratica todo o meu conhecimento de backend e frontend. Estou buscando evoluir como programador e melhor ainda mais a minha estrutura de código e o meu olhar e raciocinio diante dos problemas.
Como um apaixonado por futebol e tecnologia, resolvi mergulhar e criar uma API de gestão de clube, onde o usuário consiga, por exemplo, cadastrar jogadores, campeonatos, partidas e clubes. Além claro de fazer todos os métodos HTTP ( get, post, put e delete ).

## O que foi feito até o momento
Comecei esse projeto estruturando o banco de dados de como seriam as tabelas no MySQL Workbench. Lá eu criei um database chamando gestao_clube, com as seguintes tabelas: clubes, jogadores, campeonatos e partidas( você pode conferir essas tabelas no arquivo database.sql que está dentro da pasta backend ).

Depois disso fui para a parte de código no vscode. Mas antes, fui instalar tudo que eu iria utilizar no backend através do terminal:
- npm init -y ( para criar os arquivos package.json )
- npm install express ( para instalar a biblioteca express )
- npm install mysql2 ( para instalar o MySQL )
- npm install nodemon --save-dev ( para instalar a dependência de desenvolvimento )
- npm install dotenv ( pacote que irá ler o arquivo .env )

Agora sim, posso seguir para o código...criando o arquivo database.sql ( que eu citei anteriormente ) e o .env com as informações de acesso do meu banco de dados.

Em seguida fui para o arquivo app.js, onde importei o dotenv, o express e o cors, definindo a porta de acesso da API, os métodos e coloquei um console.log para me confirmar de que o servidor estaria funcionando normalmente( basicamente uma receita de bolo nessa parte ).

Feito o app.js, fui para a pasta config, onde criei o arquivo database.js. Nessa camada, importei o mysql2 e dotenv, já que lá eu preciso confirmar o acesso das informações com o meu banco de dados do .env.

Ou seja, fui pensando no fluxo que eu precisava seguir:
Route → Controller → Service → Model → Banco

Já tinha feito a parte do Banco, agora precisava ir para a Model. Nessa pasta eu criei quatro arquivos:
- campeonato.model.js
- clube.model.js
- jogador.model.js
- partida.model.js

Em cada arquivo, fiz o GET, POST, PUT e DELETE de cada tabela ( cada arquivo da model corresponde a uma tabela que criei lá no início no banco de dados no MySQL ).

Na pasta controller, onde também desenvolvi quatro arquivos, um para cada tabela, precisei criar o req e o res de cada método para todos ( clube, campeonato, jogador e partida ).
Isso é feito para que o backend consiga responder as necessidades do usuário de acordo com as condições estabelecidas na Model.

Logo após a controller, fui para a pasta routes, onde importei a Router do express e criei a rota de cada método.
Nessa pasta eu consigo desenvolver as routes http que serão utilizadas para cada tipo de solicitação do usuário.

Em seguida, precisei atualizar o arquivo app.js que eu tinha feito anteriormente, e importei as routes de cada um.
Para que tudo se conecte perfeitamente e cada entidade consiga ter a sua rota livre e funcionando.

Feito toda essa parte até aqui, fiz os teste dos métodos ( GET, POST, PUT e DELETE ) através do Insomnia, de acordo com os arquivos da pasta controllers.

Clubes:
- post/clubes -> http://localhost:3000/clubes
- get/clubes -> http://localhost:3000/clubes
- get/clubes/id -> http://localhost:3000/clubes/1
- get/clubes/cidade -> http://localhost:3000/clubes?cidade=Rio de Janeiro
- get/clubes/estado -> http://localhost:3000/clubes?estado=Rio de Janeiro
- get/clubes/pais -> http://localhost:3000/clubes?pais=Brasil
- put/clubes/id -> http://localhost:3000/clubes/1
- delete/clubes/id -> http://localhost:3000/clubes/1

Jogadores:
- post/jogadores -> http://localhost:3000/jogadores
- get/jogadores -> http://localhost:3000/jogadores
- get/jogadores/id -> http://localhost:3000/jogadores/1
- get/jogadores/posicao -> http://localhost:3000/jogadores?posicao=Meio-campo
- get/jogadores/categoria -> http://localhost:3000/jogadores?categoria=Profissional
- put/jogadores/id -> http://localhost:3000/jogadores/1
- delete/jogadores/id -> http://localhost:3000/jogadores/1

Campeonatos:
- post/campeonatos -> http://localhost:3000/campeonatos
- get/campeonatos -> http://localhost:3000/campeonatos
- get/campeonatos/id -> http://localhost:3000/campeonatos/1
- put/campeonatos/id -> http://localhost:3000/campeonatos/1
- delete/campeonatos/id -> http://localhost:3000/campeonatos/1

Partidas:
- post/partidas -> http://localhost:3000/partidas
- get/partidas -> http://localhost:3000/partidas
- get/partidas/id -> http://localhost:3000/partidas/1
- get/partidas/campeonato -> http://localhost:3000/partidas?campeonato=1
- put/partidas/id -> http://localhost:3000/partidas/1
- delete/partidas/id -> http://localhost:3000/partidas/1

Ao finalizar os arquivos da pasta routes, comecei a desenvolver os arquivos da pasta service que são responsáveis pelas condições de negócio do projeto.
Por exemplo, no arquivo clube.service.js:
- Determinei que todas informações na hora de criar um clube, eram obrigatórias de serem preenchidas;
- O formato da imagem do clube, tinha que terminar em .png;
- O nome do clube não poderia ter menos que 3 letras;
- O nome do estádio do clube não poderia ter menos que 5 letras;
- Cidade, estado e país, não poderiam conter números.

Feito esse arquivo, eu retomei para a controller, para determinar os códigos e as mensagens que o usuário iria receber caso cometesse alguma irregularidade dessa.
Só que acabei ficando com uma quantidade muito grande de if/else if.
Então criei uma pasta chamada Errors, com um arquivo chamado validation.error.js.
Dentro deste arquivo criei uma estrutura de class extendida de Error para utilizar nas mensagens do arquivo clube.service.js.
E no arquivo clube.controller, já que o status (400) estava sendo muito repetido, criei um catch(error) menor onde:
- Se o retorno tivesse o status (400) o sistema entregaria a mensagem de erro específica da condição;
- Se o retorno fosse (500) o sistema entregaria a própria mensagem do status.

Fiz isso em todos os arquivos da pasta service (partida.service, jogador.service, clube.service e campeonato.service)

Pronto, até aqui fiz toda estrutura do backend!

Agora pra começar o frontend, preciso utilizar o comando ( npm create vite@latest . -- --template react ) para cirar os arquivos do react dentro da pasta /frontend.

Depois dos arquivos do React já criados, organizei as pastas que vou utilizar dentro do src do /frontend
- components -> componentes reutilizáveis (botões, cards, tabelas...)
- pages -> páginas completas (lista de clubes, lista de jogadores...)
- service -> funções que chamam a API do backend

Nos arquivos da pasta /frontend/src/service é onde eu preciso fazer as chamadas da API.
Nesse caso, até o momento fiz do arquivo partida.service.js e do campeonato.service.js para listar tanto as partidas quanto os campeonatos.

Desta forma desenvolvi os arquivo Home.jsx e NavBar.jsx onde utilizei os padrões:
- useState -> para armazenar as informações
- useEffect -> para utilizar as informações quando carregar

No caso da Home criei a função buscarPartidas para listar as partidas do backend, e na NavBar para listar os campeonatos.

Em seguida, no arquivo do App.jsx, importei esses dois ( Home.jsx e NavBar.jsx ) para começar a estruturar a parte visual da página.

Porém, algo não estava ficando legal no layout!
Na hora de puxar a partida do backend utilizando o `SELECT * FROM partidas` ele retornava apenas o ID do clube.

Então, para resolver essa questão precisei ajustar no partida.model.js no método GET e adicionar um JOIN:
`SELECT partidas.*, clube_a.nome_clube AS nome_clubeA, clube_b.nome_clube AS nome_clubeB FROM partidas
JOIN clubes AS clube_a ON partidas.clubeA = clube_a.id
JOIN clubes AS clube_b ON partidas.clubeB = clube_b.id`

Em seguida, criei o arquivo Sidebar.jsx, com a funcionalidade de listar os jogadores recém cadastrados no sistema ( como se fossem jogadores de destaque ) e adicionei a funcionalidade de filtro por campeonato na NavBar.jsx.
Para isso criei uma constante dentro da function App ( const [campeonatoSelecionado, setCampeonatoSelecionado] = useState(null) ) onde o campeonatoSelecionado eu chamei na Home e o setCampeonatoSelecionado eu chamei na NavBar, e passei ele como props para cada um ( props = é a forma de passar informações de um componente pai para um filho ).
Nesse caso:
- O App.jsx guarda o campeonatoSelecionado
- A NavBar.jsx muda o campeonato quando clica
- O Home.jsx filtra as partidas de acordo com o campeonatoSelecionado

Além disso na pasta service, precisei criar a function listarPartidasPorCampeonato passando o campeonatoId, para que a rota certa fosse executada de acordo com a ação do usuário ao clicar no campeonato correspondente.

Para melhorar a experiência visual, adicionei imagens dos escudos dos clubes e fotos dos jogadores. As imagens ficam armazenadas na pasta /public do frontend, e os caminhos são salvos no banco de dados. Para trazer os escudos junto com as partidas, precisei atualizar o JOIN no partida.model.js:

`SELECT partidas.*, clube_a.nome_clube AS nome_clubeA, clube_b.nome_clube AS nome_clubeB, clube_a.escudo_clube AS escudo_clubeA, clube_b.escudo_clube AS escudo_clubeB FROM partidas JOIN clubes AS clube_a ON partidas.clubeA = clube_a.id JOIN clubes AS clube_b ON partidas.clubeB = clube_b.id`

Também implementei o React Router para navegação entre páginas:
- npm install react-router-dom ( para instalar o React Router )

Com isso criei três páginas:
- Home.jsx -> página inicial com a lista de partidas
- Clubes.jsx -> lista todos os clubes cadastrados
- Jogadores.jsx -> lista todos os jogadores cadastrados

E adicionei os Links de navegação na NavBar para acessar cada página.

Para estilizar o projeto utilizei CSS puro, criando um arquivo CSS para cada componente:
- NavBar.css
- Sidebar.css
- Footer.css
- Home.css
- Clubes.css
- Jogadores.css

Além disso instalei a biblioteca React Icons ( npm install react-icons ) para adicionar os ícones das redes sociais na NavBar e no Footer.