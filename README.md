# RestAssured API Tests com Json-Server Mock

Este projeto é um modelo de testes de API utilizando **RestAssured** e um **mock server** com **Json-server** para simular as respostas com dados de usuários.

📌 **Visão Geral**

Este relatório documenta os testes funcionais realizados na API utilizando **RestAssured** e **TestNG**. O objetivo é validar o correto funcionamento dos endpoints da API e garantir que os dados retornados estão de acordo com as expectativas.

## Objetivo

O objetivo deste projeto é validar o funcionamento correto da API de usuários, cobrindo os seguintes cenários:

- **GET** usuário com sucesso.
- **POST** usuário com sucesso.
- **POST** usuário faltando campo obrigatório.
- **GET** simulando um erro no servidor com path inválido.

## Tecnologias Utilizadas

- **RestAssured**: Para automação de testes de API.
- **Json-server**: Para criar um servidor de API simulando as respostas para os cenários de testes.
- **TestNG**: Para executar e organizar os testes.
- **Fixtures**: Para armazenar dados de teste (massas de dados fixas).

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

### Principais Arquivos

- **Fixtures**: Contém os dados utilizados nos testes, como informações de usuário válidas e inválidas.
- **Tests**: Contém os cenários de teste que validam o comportamento da API.
- **Mocks**: Contém a configuração do Json-server para simulação dos endpoints e dados.

## Como Rodar o Projeto

### Pré-requisitos

- **Java 11+**
- **Maven** (para dependências)
- **Nodejs** (para instalar os pacotes do json-server)

### Passos

1. Clone este repositório:
   ```bash
   git clone https://github.com/FilipeTavaresR/RestAssuredAutomation

2. cd json-server
   npm install

3. node server.js para iniciar o servidor mock

## Testes Implementados

1. **GET usuário com sucesso**: Valida a recuperação de um usuário existente.
2. **POST usuário com sucesso**: Valida o registro de um novo usuário.
3. **POST usuário faltando campo obrigatório**: Testa a resposta da API ao tentar criar um usuário com dados incompletos.
4. **GET com erro no servidor (path inválido)**: Valida o comportamento da API quando um caminho inválido é acessado.

## Postman

Segue uma collection no postman apotando para o servidor mock que executa os mesmos cenários implementados no restassured.


## Relatório de execução dos testes  

![image](https://github.com/user-attachments/assets/5371798e-bdbf-4e00-9b22-945869c2f91c)
![image](https://github.com/user-attachments/assets/8e803977-f29e-46b4-869d-8b0e8b552599)

## Contribuições

Sinta-se à vontade para explorar este projeto e aprender sobre a implementação de testes de API com **RestAssured** e **Json-server**.

## Licença

Este projeto não possui uma licença formal, mas é de código aberto para fins educacionais.
