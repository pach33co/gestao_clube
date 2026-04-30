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

Em seguida, precisei atualizar o arquivo app.js que eu tinha feito anteriormente, e importar as routes de cada um.
Para que tudo se conecte perfeitamente e cada entidade consiga ter a sua rota livre e funcionando.

Feito toda essa parte até aqui, fiz os teste dos métodos ( GET, POST, PUT e DELETE ) através do Insomnia, de acordo com os arquivos da pasta controllers.

Clubes:
post/clubes -> http://localhost:3000/clubes
get/clubes -> http://localhost:3000/clubes
get/clubes/id -> http://localhost:3000/clubes/1
get/clubes/cidade -> http://localhost:3000/clubes?cidade=Rio de Janeiro
get/clubes/estado -> http://localhost:3000/clubes?estado=Rio de Janeiro
get/clubes/pais -> http://localhost:3000/clubes?pais=Brasil
put/clubes/id -> http://localhost:3000/clubes/1
delete/clubes/id -> http://localhost:3000/clubes/1

Jogadores:
post/jogadores -> http://localhost:3000/jogadores
get/jogadores -> http://localhost:3000/jogadores
get/jogadores/id -> http://localhost:3000/jogadores/1
get/jogadores/posicao -> http://localhost:3000/jogadores?posicao=Meio-campo
get/jogadores/categoria -> http://localhost:3000/jogadores?categoria=Profissional
put/jogadores/id -> http://localhost:3000/jogadores/1
delete/jogadores/id -> http://localhost:3000/jogadores/1

Campeonatos:
post/campeonatos -> http://localhost:3000/campeonatos
get/campeonatos -> http://localhost:3000/campeonatos
get/campeonatos/id -> http://localhost:3000/campeonatos/1
put/campeonatos/id -> http://localhost:3000/campeonatos/1
delete/campeonatos/id -> http://localhost:3000/campeonatos/1

Partidas:
post/partidas -> http://localhost:3000/partidas
get/partidas -> http://localhost:3000/partidas
get/partidas/id -> http://localhost:3000/partidas/1
get/partidas/campeonato -> http://localhost:3000/partidas?campeonato=1
put/partidas/id -> http://localhost:3000/partidas/1
delete/partidas/id -> http://localhost:3000/partidas/1