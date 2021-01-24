### O desafio

> Sua tarefa é fazer um aplicativo que carregue a saida da URL https://jsonplaceholder.typicode.com/users, que retorna uma lista de usuário em JSON. Faça um programa que carregue a saída dessa URL e mostre os seguintes dados:

1. Os websites de todos os usuários
2. O Nome, email e a empresa em que trabalha (em ordem alfabética).
3. Mostrar todos os usuários que no endereço contem a palavra ```suite```
4. Salvar logs de todas interações no elasticsearch
5. EXTRA: Criar test unitário para validar os itens a cima.

### Rodando a aplicação!

Tenha em sua máquina um banco de dados *``` Postgres ```* e forneça as credenciais de acesso no arquivo *``` src/config/database.js ```*.

#### Subindo o servidor
  1. Clone/Baixe este repositório na sua máquina;
  2. Abra o terminal na raiz da pasta *``` do projeto ```* e rode "npm i" ou ainda "yarn" para download das dependências do projeto;
  3. No terminal, rode o comando *``` docker-compose up ```*  para subir o container do ElasticSearch.
  4. Terminado esse processo, rode "npm run start:dev" ou ainda "yarn start:dev" para subir o servidor backend;
  5. Pronto, seu servidor backend está no ar e pronto pra ser acessado no endereço "http://localhost:8080".

## Rotas e Parâmetros

#### /users:
```
- Verbo: Get
- Rota para visualizar Nome, email e empresa de cada usuário, ordenada em ordem Alfabética por nome;
- Parâmetros: nenhum
```

#### /users?address=suite:
```
- Verbo: Get
- Rota para visualizar os usuários que têm 'suite' no endereço;
- Parâmetros: address=suite
```

#### /users/websites:
```
- Verbo: Get
- Rota para visualizar todos os websites dos usuários;
- Parâmetros: nenhum
```
