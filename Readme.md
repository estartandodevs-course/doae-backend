#Doaê

### Introdução

Este documento tem como finalidade especificar as funcionalidades, regras de negócio utilizadas no projeto, tecnologias a serem utilizadas, metodologias de desenvolvimento, arquitetura, meios de comunicação da equipe, definição das tarefas principais e as prioridades.

Doaê conecta pessoas que buscam fazer doações para as melhores ONGs com causas em que acreditam, que demonstram com transparência onde aplicam suas arrecadações. Pois, através da nossa plataforma, o usuário pode ter acesso a informações e novidades de cada ONG parceira, receber notícias, saber o andamento dos projetos das instituições e, principalmente, ajudar de forma realmente impactante!

### Requisitos funcionais

- **Login**
  - Entradas
    - E-mail
    - Senha
  - Processamento
    - Verificar se o usuário/instituição existe no banco de dados
    - Verificar se a senha corresponde a senha salva no banco de dados
  - Saída
    - Sucesso
      - Usuário logado.
    - Erro
      - E-mail e/ou senha inválido.
      - Usuário inexistente
      - Campos obrigatórios não preenchidos
- **Cadastro de instituição**
  - Entradas
    - E-mail
    - CNPJ
    - Nome
    - Descrição
    - Cep
    - Agência
    - Conta
    - Pix
    - Telefone
    - Site
    - Logo
    - Identificador externo
    - Senha
  - Processamento
    - Verificar se e-mail já não existe no banco de dados
    - Verificar se CNPJ já não existe no banco de dados
    - Verificar se a senha contém 8 caracteres, contém pelo menos uma letra maiúscula, uma letra minúscula e um símbolo.
  - Saída
    - Sucesso
      - Cadastro realizado
    - Erro
      - E-mail já existente
      - CNPJ já existente
      - Senha inferior a 8 caracteres
      - Senha precisa ter pelo menos uma letra maiúscula, uma letra minúscula e um símbolo.
- **Cadastro da Meta**
  - Entradas
    - Nome,
    - Valor,
    - Quantia atual,
    - Id da instituição
    - Descrição
    - Data limite
  - Processamento
    - Verificar se a empresa já foi cadastrada
      - Retornar as informações visíveis
    - Salvar Informações no banco de dados caso a empresa não esteja cadastrada
  - Saída
    - Sucesso
      - Meta cadastrada
    - Erro
      - Meta já cadastrada
      - Campos obrigatórios não preenchidos

- **Cadastro de Produtos**
  - Entradas
    - Id
    - Nome
    - Valor
    - Id da instituição
  - Processamento
    - Verifica se o produto ja foi cadastrado
      - Retorna as informações vísiveis
    - Salva no banco de dados caso o produto não esteja cadastrado
  - Saída
    - Sucesso
      - Produto cadastrado
    - Erro
      - Produto já cadastrado
      - Dados obrigatórios em branco
  
 - **Cadastro de Produtos da Meta**
   - Entradas
      - Id
      - id da meta
      - Id do produto
    - Processamento
      - Verifica se o produto ja foi cadastrado
      - Retorna as informações vísiveis
      - Salva no banco de dados caso o produto não esteja cadastrado
    - Saída
      - Sucesso
        - Produto cadastrado
      - Erro
        - Produto já cadastrado
        - Dados obrigatórios em branco

- **Cadastro de Doação**
  - Entradas
    - id,
    - Id da Instituição
    - Valor
    - Email do doador
    - Id da meta
  - Processamento
    - Verificar se todos os dados estão preenchidos
    - Salvar no banco de dados
  - Saídas
    - Sucesso
      - Doação realizada com sucesso!
    - Erro
      - Dados incorretos
      - Campos obrigatórios em branco

- **Cadastro de Postagem**
  - Entradas
    - Id
    - Descrição
    - Id da instituição
    - Midia
  - Processamento
    - Verificar se todos os dados estão preenchidos
    - Salvar no banco de dados
  - Saídas
    - Sucesso
      - Postagem realizada com sucesso!
    - Erro
      - Dados incorretos
      - Campos obrigatórios em branco

### Rodando a API

```powershell
# Clone este repositório
$ git clone https://github.com/estartandodevs-course/doae-backend.git

# Acesse a pasta do projeto no terminal/cmd
$ cd doae-backend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# Nosso servidor está no ar no link 
$ https://doae-api.onrender.com/
```

**Formato da resposta**

| Resposta da API | JSON |
| --------------- | ---- |
| Métodos aceitos | GET  |

###Rotas 


***Criar instituição:***

```jsx
https: 
```
Parâmetros - Corpo da Requisição

```jsx
{
	"nome": "Lar das moças cegas",
	"email": "comunicacao@lmc.org.br",
	"cnpj": "58198227000173.",
    "descrição" : "A proposta do LMC é que a pessoa com deficiência visual receba todo atendimento necessário para habilitação, reabilitação e inclusão dela na sociedade",
    "cep": "11060-000",
    "agência": "2973",
    "conta":"04262-1",
    "pix": "comunicacao@lmc.org.br",
    "telefone": "(13) 3226.2760",
    "site": "http://www.lmc.org.br/",
    "logo": "lmc.png",
    "identificado externo": "lnf-dshn-435",
    "senha": "Larmocacega1!"
}
```
Resposta

```jsx 
{
    "id": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "nome": "Lar das moças cegas",
	"email": "comunicacao@lmc.org.br",
	"cnpj": "58198227000173.",
    "descrição" : "A proposta do LMC é que a pessoa com deficiência visual receba todo atendimento necessário para habilitação, reabilitação e inclusão dela na sociedade",
    "cep": "11060-000",
    "agência": "2973",
    "conta":"04262-1",
    "pix": "comunicacao@lmc.org.br",
    "telefone": "(13) 3226.2760",
    "site": "http://www.lmc.org.br/",
    "logo": "lmc.png",
    "identificado externo": "lnf-dshn-435",
    "senha": "Larmocacega1!"
}
```
***Listar instituições***
```jsx
https://
```

Resposta

```jsx
[
  {
    "id": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "nome": "Lar das moças cegas",
	"email": "comunicacao@lmc.org.br",
	"cnpj": "58198227000173.",
    "descrição" : "A proposta do LMC é que a pessoa com deficiência visual receba todo atendimento necessário para habilitação, reabilitação e inclusão dela na sociedade",
    "cep": "11060-000",
    "agência": "2973",
    "conta":"04262-1",
    "pix": "comunicacao@lmc.org.br",
    "telefone": "(13) 3226.2760",
    "site": "http://www.lmc.org.br/",
    "logo": "lmc.png",
    "identificado externo": "lnf-dshn-435",
    "senha": "Larmocacega1!"
  },
  
];
```

***listar instituição por id***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "d1000da0-8921-4b88-9a6d-ccf5c5b473ff"
}
```
Resposta
```jsx
{
    "id": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "nome": "Lar das moças cegas",
	"email": "comunicacao@lmc.org.br",
	"cnpj": "58198227000173.",
    "descrição" : "A proposta do LMC é que a pessoa com deficiência visual receba todo atendimento necessário para habilitação, reabilitação e inclusão dela na sociedade",
    "cep": "11060-000",
    "agência": "2973",
    "conta":"04262-1",
    "pix": "comunicacao@lmc.org.br",
    "telefone": "(13) 3226.2760",
    "site": "http://www.lmc.org.br/",
    "logo": "lmc.png",
    "identificado externo": "lnf-dshn-435",
    "senha": "Larmocacega1!"
}
```
***Atualizar Instituição***

Parâmetros - Corpo da Requisição
```jsx
{
    "id": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "nome": "Lar das moças cegas",
    "descrição" : "A proposta do LMC é que a pessoa com deficiência visual receba todo atendimento necessário para habilitação, reabilitação e inclusão dela na sociedade",
    "agência": "2973",
    "conta":"04262-1",
    "pix": "comunicacao@lmc.org.br",
    "telefone": "(13) 3226.2760"
}
```

Resposta
```jsx
"Instituição atualizada com sucesso"
```

***Atualizar credenciais da Instituição***

Parâmetros - Corpo da Requisição
```jsx
{
    "id": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "email": "comunicacao@lmc.org.br",
    "senha": "Larmocacega1!"
}
```
Resposta
```jsx
    "Credenciais atualizadas com sucesso"
```
***Atualizar logo da Instituição***

Parâmetros - Corpo da requisição
```jsx 
{
    "id": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "logo": "lmc.png"
}
```

Resposta
```jsx 
   "Logo atualizada com sucesso"
```

***Excluir Instituição***

Parâmetros - Corpo da Requisição
```jsx
https:
```

Resposta
```jsx
"Instituição deletada com sucesso"
```

***Criar meta:***

```jsx
https: 
```
Parâmetros - Corpo da Requisição

```jsx
{
 	"nome" : "cesta básica",
    "valor": 300.00,
	"quantia atual": 0,
	"id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "descrição": "Nossa meta é conseguir agraciar uma família com uma cesta básica até o início do próximo mês",
	"data limite": "22/12/22"
}
```
Resposta

```jsx 
{
    "id": "jfndsj-435k-kodf54-34245nh",
    "nome" : "cesta básica",
    "valor": 300.00,
	"quantia atual": 0,
	"id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "descrição": "Nossa meta é conseguir agraciar uma família com uma cesta básica até o início do próximo mês",
	"data limite": "22/12/22"
}
```
***Listar metas***
```jsx
https://
```

Resposta

```jsx
[
  {
   "id": "jfndsj-435k-kodf54-34245nh",
    "nome" : "cesta básica",
    "valor": 300.00,
	"quantia atual": 0,
	"id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "descrição": "Nossa meta é conseguir agraciar uma família com uma cesta básica até o início do próximo mês",
	"data limite": "22/12/22"
  },
  
];
```

***listar meta por id***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "jfndsj-435k-kodf54-34245nh"
}
```
Resposta
```jsx
{
    "id": "jfndsj-435k-kodf54-34245nh",
    "nome" : "cesta básica",
    "valor": 300.00,
	"quantia atual": 0,
	"id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "descrição": "Nossa meta é conseguir agraciar uma família com uma cesta básica até o início do próximo mês",
	"data limite": "22/12/22"
}
```
***listar meta por id da instituição***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "d1000da0-8921-4b88-9a6d-ccf5c5b473ff"
}
```
Resposta
```jsx
{
    "id": "jfndsj-435k-kodf54-34245nh",
    "nome" : "cesta básica",
    "valor": 300.00,
	"quantia atual": 0,
	"id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "descrição": "Nossa meta é conseguir agraciar uma família com uma cesta básica até o início do próximo mês",
	"data limite": "22/12/22"
}
```

***Atualizar Meta***

Parâmetros - Corpo da Requisição
```jsx
{
   "id": "jfndsj-435k-kodf54-34245nh",
    "nome" : "cesta básica",
    "valor": 300.00,
}
```

Resposta
```jsx
"Meta atualizada com sucesso"
```

***Atualizar quantia atual da meta***

Parâmetros - Corpo da Requisição
```jsx
{
    "id": "jfndsj-435k-kodf54-34245nh",
    "valor": 300.00,
    "id do produto" : "ifdi43-634fs-jsdi4f-4ndy34"
}
```
Resposta
```jsx
    "Quantia atualizada com sucesso"
```

***Excluir Meta***

Parâmetros - Corpo da Requisição
```jsx
https:
```

Resposta
```jsx
"Meta deletada com sucesso"
```
***Criar Doação:***

```jsx
https: 
```
Parâmetros - Corpo da Requisição

```jsx
{
	"id da instituição" : "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
	"valor": 15.00,
	"email doador": "nataliadasilva.bezerra@gmail.com",
	"id da meta": "jfndsj-435k-kodf54-34245nh"
}
```
Resposta

```jsx 
{
    "id": "dsji3-mkn4-3n2jn-nk234",
    "id da instituição" : "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
	"valor": 15.00,
	"email doador": "nataliadasilva.bezerra@gmail.com",
	"id da meta": "jfndsj-435k-kodf54-34245nh",
    "status": "doação realizada"
}
```
***Listar doações***
```jsx
https://
```

Resposta

```jsx
[
  {
   "id": "dsji3-mkn4-3n2jn-nk234",
    "id da instituição" : "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
	"valor": 15.00,
	"email doador": "nataliadasilva.bezerra@gmail.com",
	"id da meta": "jfndsj-435k-kodf54-34245nh",
    "status": "doação realizada"
  },
  
];
```

***listar doação por id***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "dsji3-mkn4-3n2jn-nk234"
}
```
Resposta
```jsx
{
    "id": "dsji3-mkn4-3n2jn-nk234",
    "id da instituição" : "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
	"valor": 15.00,
	"email doador": "nataliadasilva.bezerra@gmail.com",
	"id da meta": "jfndsj-435k-kodf54-34245nh",
    "status": "doação realizada"
}
```
***listar doação por id da instituição***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "d1000da0-8921-4b88-9a6d-ccf5c5b473ff"
}
```
Resposta
```jsx
{
    "id": "dsji3-mkn4-3n2jn-nk234",
    "id da instituição" : "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
	"valor": 15.00,
	"email doador": "nataliadasilva.bezerra@gmail.com",
	"id da meta": "jfndsj-435k-kodf54-34245nh",
    "status": "doação realizada"
}
```
***listar doação por id da meta***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "jfndsj-435k-kodf54-34245nh"
}
```
Resposta
```jsx
{
    "id": "dsji3-mkn4-3n2jn-nk234",
    "id da instituição" : "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
	"valor": 15.00,
	"email doador": "nataliadasilva.bezerra@gmail.com",
	"id da meta": "jfndsj-435k-kodf54-34245nh",
    "status": "doação realizada"
}
```

***Atualizar Doação***

Parâmetros - Corpo da Requisição
```jsx
{
   "id": "dsji3-mkn4-3n2jn-nk234",
    "status": "doação realizada"
}
```

Resposta
```jsx
"Doação atualizada com sucesso"
```

***Excluir Doação***

Parâmetros - Corpo da Requisição
```jsx
https:
```

Resposta
```jsx
"Doação deletada com sucesso"
```

***Criar Produto:***

```jsx
https: 
```
Parâmetros - Corpo da Requisição

```jsx
{
	"nome": "arroz",
	"valor": 5.00,
	"id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff" 
}
```
Resposta

```jsx 
{
    "id" : "dfg43-nuh23-mudssb943-54376d",
    "nome": "arroz",
	"valor": 5.00,
	"id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff"
}
```
***listar produto por id***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "dfg43-nuh23-mudssb943-54376d"
}
```
Resposta
```jsx
{
    "id" : "dfg43-nuh23-mudssb943-54376d",
    "nome": "arroz",
	"valor": 5.00,
	"id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff"
}
```
***listar produto por id da instituição***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "d1000da0-8921-4b88-9a6d-ccf5c5b473ff"
}
```
Resposta
```jsx
{
    "id" : "dfg43-nuh23-mudssb943-54376d",
    "nome": "arroz",
	"valor": 5.00,
	"id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff"
}
```
***Atualizar Produto***

Parâmetros - Corpo da Requisição
```jsx
{
   "id": "dfg43-nuh23-mudssb943-54376d",
    "nome": "arroz",
    "valor": 5.00
}
```

Resposta
```jsx
"Protuto atualizado com sucesso"
```

***Excluir Produto***

Parâmetros - Corpo da Requisição
```jsx
https:
```

Resposta
```jsx
"Produto deletado com sucesso"
```

***Criar Produto da meta:***

```jsx
https: 
```
Parâmetros - Corpo da Requisição

```jsx
{
	"id do produto": "dfg43-nuh23-mudssb943-54376d",
    "id da meta": "jfndsj-435k-kodf54-34245nh"
}
```
Resposta

```jsx 
{
    "id" : "knfd6-jfnd44-9453nk-843nin",
    "id do produto": "dfg43-nuh23-mudssb943-54376d",
    "id da meta": "jfndsj-435k-kodf54-34245nh"
}
```
***listar produto da meta por id do produto***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "dfg43-nuh23-mudssb943-54376d"
}
```
Resposta
```jsx
{
    "id" : "knfd6-jfnd44-9453nk-843nin",
    "id do produto": "dfg43-nuh23-mudssb943-54376d",
    "id da meta": "jfndsj-435k-kodf54-34245nh"
}
```
***listar produto por id da meta***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "jfndsj-435k-kodf54-34245nh"
}
```
Resposta
```jsx
{
    "id" : "knfd6-jfnd44-9453nk-843nin",
    "id do produto": "dfg43-nuh23-mudssb943-54376d",
    "id da meta": "jfndsj-435k-kodf54-34245nh"
}
```
***listar produto por id do produto da meta***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "knfd6-jfnd44-9453nk-843nin"
}
```
Resposta
```jsx
{
    "id" : "knfd6-jfnd44-9453nk-843nin",
    "id do produto": "dfg43-nuh23-mudssb943-54376d",
    "id da meta": "jfndsj-435k-kodf54-34245nh"
}
```
***Excluir Produto da meta***

Parâmetros - Corpo da Requisição
```jsx
https:
```

Resposta
```jsx
"Produto da meta deletado com sucesso"
```
***Criar Publicação:***

```jsx
https: 
```
Parâmetros - Corpo da Requisição

```jsx
{
	"descrição": "Hoje istribuimos cestasn básicas no bairro de Vila Mariana",
    "id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "midia": "arquivo.jpg"
}
```
Resposta

```jsx 
{
    "id": "hds773-odsfn987-32nju3-864nj",
    "descrição": "Hoje istribuimos cestasn básicas no bairro de Vila Mariana",
    "id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "midia": "arquivo.jpg"
}
```
***Listar Publicações***
```jsx
https://
```

Resposta

```jsx
[
  {
   "id": "hds773-odsfn987-32nju3-864nj",
   "descrição": "Hoje istribuimos cestasn básicas no bairro de Vila Mariana",
    "id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "midia": "arquivo.jpg"
  },
  
];
```

***listar publicação por id***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "hds773-odsfn987-32nju3-864nj"
}
```
Resposta
```jsx
{
    "id": "hds773-odsfn987-32nju3-864nj",
    "descrição": "Hoje istribuimos cestasn básicas no bairro de Vila Mariana",
    "id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "midia": "arquivo.jpg"
}
```
***listar publicação por id da instituição***
```jsx
https:
```
Parâmetros - Corpo da Requisição
```jsx
{
    "id" : "d1000da0-8921-4b88-9a6d-ccf5c5b473ff"
}
```
Resposta
```jsx
{
    "id": "hds773-odsfn987-32nju3-864nj",
    "descrição": "Hoje istribuimos cestasn básicas no bairro de Vila Mariana",
    "id da instituição": "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    "midia": "arquivo.jpg"
}
```
***Atualizar Publicação***

Parâmetros - Corpo da Requisição
```jsx
{
   "id": "hds773-odsfn987-32nju3-864nj",
    "descrição": "Hoje istribuimos cestasn básicas no bairro de Vila Mariana"
}
```

Resposta
```jsx
"Publicação atualizada com sucesso"
```
***Atualizar Mídia da Publicação***

Parâmetros - Corpo da Requisição
```jsx
{
   "id": "hds773-odsfn987-32nju3-864nj",
   "midia": "arquivo.jpg"
}
```

Resposta
```jsx
"Mídia da publicação atualizada com sucesso"
```
***Excluir Publicação***

Parâmetros - Corpo da Requisição
```jsx
https:
```

Resposta
```jsx
"Publicação deletada com sucesso"
```