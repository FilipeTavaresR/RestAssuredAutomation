# RestAssured API Tests + K6 Performance tests

Este projeto apresenta um modelo de testes de API utilizando **RestAssured**, testes de performance com **K6** e um mock server com **Json-server** para simular respostas com dados de usuários.

## 📌 Visão Geral

Este relatório documenta os testes funcionais e de performance realizados na API, utilizando **RestAssured** e **K6**, para validar o correto funcionamento dos endpoints e garantir que os dados retornados estejam de acordo com as expectativas.

## 🎯 Objetivo

O objetivo deste projeto é validar o funcionamento correto da API de usuários, cobrindo os seguintes cenários:

- **GET** usuário com sucesso.
- **POST** usuário com sucesso.
- **POST** usuário faltando campo obrigatório.
- **GET** simulando um erro no servidor com path inválido.

## 🚀 Tecnologias Utilizadas

- **RestAssured:** Automação de testes de API.
- **Json-server:** Mock de API para simulação dos cenários de teste.
- **TestNG:** Organização e execução dos testes.
- **Fixtures:** Armazenamento de dados de teste fixos.
- **K6:** Testes de carga e performance.
- **Grafana + Prometheus (Opcional):** Monitoramento e visualização de métricas de performance.

## 📂 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

### 📁 Principais Diretórios

- **Fixtures:** Contém os dados utilizados nos testes, como informações de usuário válidas e inválidas.
- **Tests:** Cenários de teste para validar o comportamento da API.
   - **Performance tests:** Testes de carga e stress na API mock.
   - **Contract:** Testes para validar o contrato da API.
   - **Funcional:** Cenários de testes funcionais.     
- **json-server:** Configuração do Json-server para simulação dos endpoints.
  
## 🛠 Como Rodar o Projeto

### ✅ Pré-requisitos

- **Java 11+**
- **Maven** (para dependências)
- **Nodejs** (para instalação do json-server)
- **K6** (para testes de performance)

### Como executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/FilipeTavaresR/RestAssuredAutomation

2. No terminal rode os comandos a seguir:  
   ```bash
   cd caminhoDoProjeto/json-server
   npm install

3. Inicie o servidor mock:
   ```bash
   node server.js 

## 🧪 Testes Implementados

1. **GET usuário com sucesso**: Recuperação de um usuário existente.
2. **POST usuário com sucesso**: Registro de um novo usuário.
3. **POST usuário faltando campo obrigatório**: Validação da resposta da API para dados incompletos.
4. **GET com erro no servidor (path inválido)**: Valida o comportamento da API quando um caminho inválido é acessado.

## 🌐 Postman

Uma collection do Postman está disponível para testar a API mock:
[API Tests postman_collection.json](files%2FAPI%20Tests%20postman_collection.json)

## Postman

## 🚀 Testes de Performance com k6

### 🎯 Objetivos

- Realizar testes de carga e stress na API
- Medir métricas-chave de performance:
   - Latência (p95, p99)
   - Taxa de requisições por segundo (RPS)
   - Taxa de erros
   - Uso de recursos durante testes

### 🛠 Tecnologias Adicionais

- **Grafana + Prometheus** (Opcional): Para dashboard e monitoramento

### 🔹 Execução dos Testes de Performance

1. [Instale o k6](https://grafana.com/docs/k6/latest/set-up/install-k6/)
2. Execute o teste:
   ```bash
   cd src/test/java/org/restassuredtests/performance 
   k6 run performance-tests.js
  
### 📊 Monitoramento com Grafana + Prometheus (Opcional)
Caso deseje visualizar as métricas no Grafana:
1. Instale as ferramentas necessárias:
   - [Grafana](https://grafana.com/grafana/download/8.2.3)
   - [Prometheus](https://prometheus.io/download/)
   - [Windows Exporter (caso esteja no Windows)](https://github.com/prometheus-community/windows_exporter/releases)
2. Adicione essa configuração no prometheus.yml:
   ```bash
   scrape_configs:
     - job_name: "prometheus"
       static_configs:
         - targets: ["localhost:9090"]
     - job_name: "windows"
       static_configs:
         - targets: ["localhost:9182"]
       metrics_path: /metrics
3. Inicie o Prometheus:
   ```bash
   ./prometheus --config.file=prometheus.yml --web.enable-remote-write-receiver
4. Execute o teste de performance enviando os dados para o Prometheus:
   ```bash
   k6 run --out experimental-prometheus-rw performance-test.js
5. No Grafana, importe um dashboard utilizando o seguinte JSON: [Dashboard_Grafana.json](files/Dashboard_Grafana.json)
6. Acesse o Grafana no navegador: [http://localhost:3000/](http://localhost:3000/)

## 📊 Relatórios de Execução

![image](https://github.com/user-attachments/assets/5371798e-bdbf-4e00-9b22-945869c2f91c)
![image](https://github.com/user-attachments/assets/8e803977-f29e-46b4-869d-8b0e8b552599)
![image](https://github.com/user-attachments/assets/2b0e75a2-a5c8-4977-872b-7f14c289cfe2)
![image](https://github.com/user-attachments/assets/af1250c0-0918-46a5-9b07-907508355953)
![image](https://github.com/user-attachments/assets/b017a8da-20e6-43bd-a4af-101a97b3439c)
![image](https://github.com/user-attachments/assets/0490bed7-f44c-4eea-9da3-c8f0761bd2b8)

## 🤝 Contribuições

Sinta-se à vontade para explorar este projeto e aprender sobre a implementação de testes de API com **RestAssured**, testes de performance com **k6** e mocks com **Json-server**.

## 📜 Licença

Este projeto não possui uma licença formal, mas é de código aberto para fins educacionais.
