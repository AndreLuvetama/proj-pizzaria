<h1>Pizzaria Prospere</h1>

--------------------------------------
Prática React js(Desenvolvimento front)
Case: Pizzaria
Um sistema para pedido de pizza online utilizando React.js e Spring-boot no Back.

Funcionalidade: Login
                Cadastro
                Visualização do cardápio e seleção do item desejado.


<h2>Ferramentas utilizadas</h2>

- React
- Java Spring Boot
- Next.js 14
- MysQL
- Axios
- uuid
- ContextAPI
- TailwindCSS
- Figma
- https://pixabay.com/pt/ (Download de imagens)
- Git/ GitHub

- <h2>Scrum</h2>
A ultização do Scrum poderia ser ultilizado para o monitoramento do time, neste caso o time poderia ter uma reunião de 15 minutos todos os dias no
início do trabalho. Nessa reunião poderiam abordar o estatdo de cada atividade, as dificuldades e os avanços.

<h2>Docker</h2>
1. Criar o arquivo docker-compose.yml por onde será configurado as portas, os bancos e os ambientes que será usado
 Exemplo:
version: "3"
services:

  auth-db:
    image: postgres:11
    container_name: auth-db
    restart: always
    environment:
      - POSTGRES_DB=auth-db
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=111111
    ports:
      - 5435:5432
      
      Comando doker
      docker run --name db_pizza -p 5432:5432 -e POSTGRES_DB=db_pizza -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11

  <h3>Apresentação do Layout</h3>

![image](https://github.com/AndreLuvetama/proj-pizzaria/assets/8740271/fdd7f0e3-18b4-4390-8e04-93c1157f9846)

![image](https://github.com/AndreLuvetama/proj-pizzaria/assets/8740271/345abcef-5768-4bd7-902d-2fcc5def366d)

![image](https://github.com/AndreLuvetama/proj-pizzaria/assets/8740271/e1d5bca4-19b3-4bdc-9a45-bbfd425ce3df)

![image](https://github.com/AndreLuvetama/proj-pizzaria/assets/8740271/92e59d78-5cfb-439e-bed9-403ba52bb8bf)

![image](https://github.com/AndreLuvetama/proj-pizzaria/assets/8740271/e451f4db-ee7b-41d7-b541-4a2b4838cf54)






                
