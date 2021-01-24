#### Subindo o servidor
  1. Clone/Baixe este repositório na sua máquina;
  2. Abra o terminal na raiz da pasta *``` do projeto ```* e rode "npm i" ou ainda "yarn" para download das dependências do projeto;
  3. No terminal, rode o comando *``` docker-compose up ```*  para subir o container do ElasticSearch.
  4. Terminado esse processo, rode "npm run start:dev" ou ainda "yarn start:dev" para subir o servidor backend;
  5. Pronto, seu servidor backend está no ar e pronto pra ser acessado no endereço "http://localhost:3333".

## Rotas e Parâmetros

#### /balance:
```
- Verbo: GET
- Rota para visualizar todos os balanços;
- Parâmetros: nenhum
```

#### /balance:
```
- Verbo: POST
- Rota para visualizar os usuários que têm 'suite' no endereço;
- Parâmetros: body {
  companyId: string,
  date: string,
  balanceSheet: string
}
```
