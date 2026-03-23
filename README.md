# API MVC com Node.js e Express - Atividade 6 
Este projeto consiste no desenvolvimento de uma API utilizando Node.js e Express, estruturada com o padrão de arquitetura MVC (Model-View-Controller).

A aplicação foi criada com o objetivo de praticar conceitos fundamentais de desenvolvimento backend, como criação de rotas, organização de código em camadas e retorno de dados em formato JSON, que é amplamente utilizado em APIs.

A estrutura MVC foi adotada para tornar o projeto mais organizado, escalável e próximo de práticas utilizadas no mercado de desenvolvimento de software.

📚 Informações Acadêmicas

Matéria: WEBII
Professor: Adauto Michelotti
Curso: Desenvolvimento de Sistemas
Instituição: ETEC - Escola Técnica Estadual Professor Massuyuki Kawano-Tupã

🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

Node.js
Ambiente de execução JavaScript que permite rodar código fora do navegador, sendo amplamente utilizado para desenvolvimento de aplicações backend.

Express
Framework minimalista para Node.js que facilita a criação de servidores web e APIs, oferecendo ferramentas para gerenciamento de rotas, requisições e respostas HTTP.

JavaScript
Linguagem de programação utilizada em toda a aplicação, responsável pela lógica do servidor e manipulação das requisições.

JSON (JavaScript Object Notation)
Formato utilizado para troca de dados entre cliente e servidor, muito comum em APIs REST.

🧩 Arquitetura do Projeto

O projeto utiliza o padrão MVC (Model-View-Controller), que separa as responsabilidades da aplicação em diferentes camadas.

Controllers

Os controllers são responsáveis por conter a lógica das rotas da aplicação.
Eles recebem as requisições feitas pelo cliente, processam os dados e retornam uma resposta.

No projeto, existem controllers responsáveis por retornar mensagens de teste e por simular uma estrutura básica de gerenciamento de usuários.

Routes

As routes definem os endpoints da API, ou seja, os caminhos que podem ser acessados através de requisições HTTP.

Cada rota direciona a requisição para um controller específico, que executa a lógica necessária.

App

O arquivo responsável por configurar o Express, registrar as rotas e preparar a aplicação para ser executada.

Server

Responsável por inicializar o servidor e definir a porta em que a API ficará disponível.

📡 Funcionamento da API

A API possui rotas simples criadas para fins de aprendizado e testes.

Uma das rotas retorna uma mensagem de teste, utilizada para verificar se o servidor está funcionando corretamente.

Outra rota simula um endpoint relacionado a usuários, retornando uma resposta indicando que a API foi iniciada com sucesso.

As respostas da API são enviadas em formato JSON, que é o padrão mais utilizado na comunicação entre aplicações web.

🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar:

Estruturação de projetos backend
Criação de APIs REST
Organização de código utilizando MVC
Uso do Node.js e Express
Manipulação de rotas e requisições HTTP
Retorno de dados em JSON

👨‍💻 Autor
Rafael Ladeira Reyes

Estudante de Desenvolvimento de Sistemas, focado em aprimorar conhecimentos em programação e desenvolvimento de software.
