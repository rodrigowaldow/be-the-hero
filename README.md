<!--
*** Obrigado por estar vendo o nosso README. Se você tiver alguma sugestão
*** que possa melhorá-lo ainda mais dê um fork no repositório e crie uma Pull
*** Request ou abra uma Issue com a tag "sugestão".
*** Obrigado novamente! Agora vamos rodar esse projeto incrível :D
-->

<!-- PROJECT SHIELDS -->

<!-- [![npm](https://img.shields.io/npm/v/react-native-template-rocketseat-basic.svg?label=npm%20package)](https://www.npmjs.com/package/react-native-template-rocketseat-basic)
[![npm](https://img.shields.io/npm/dt/react-native-template-rocketseat-basic.svg)](https://www.npmjs.com/package/react-native-template-rocketseat-basic)
[![GitHub issues](https://img.shields.io/github/issues-raw/rocketseat/react-native-template-rocketseat-basic.svg)](https://github.com/Rocketseat/react-native-template-rocketseat-basic/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/rocketseat/react-native-template-rocketseat-basic.svg)](https://github.com/Rocketseat/react-native-template-rocketseat-basic/commits/master)
[![NPM](https://img.shields.io/npm/l/react-native-template-rocketseat-basic.svg)](https://choosealicense.com/licenses/mit) -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Be The Hero - Semana OmniStack 11</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de uma aplicação que possa atender as necessidades existentes em diversas ONG's conectando suas organizações e necessidades a voluntários que desejam fazer a diferença no mundo e tornarem-se o herói de alguém!
Esse projeto foi desenvolvido através das video aulas ministradas pela RocketSeat e foram utilizadas como base, as tecnologias React, NodeJS e React Native.

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- Backend - 
  - [NodeJS](https://nodejs.org/en/) - É um JavaScript runtime criado na engine JavaScript V8 do Chrome;
  - [SQLite3](https://github.com/mapbox/node-sqlite3) - O SQLite é uma biblioteca que implementa um mecanismo de banco de dados SQL;
  - [KnexJS](http://knexjs.org/) - O Knex.js é um construtor de consultas SQL para Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle e Amazon Redshift;
  - [Express](http://expressjs.com/) - Express é uma framework minimalista e flexível para o Node.js que fornece um conjunto robusto de recursos para realização de requisições HTTP;
  - [CORS](https://github.com/expressjs/cors) - O CORS é um pacote Node.js que fornece um middleware do Express;
  - [Jest](https://jestjs.io/en/) - Framework utilizado para testes unitários;
  - [SuperTest](https://github.com/visionmedia/supertest) - Framework que fornece uma abstração de alto nível para testes de requisições HTTP;
  
- Frontend - 
  - [ReactJS](https://reactjs.org/) - O React é um framework que permite o desenvolvimento de aplicações declarativas e baseadas em componentes usando JavaScript;
  - [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
  - [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade da comunidade do React Native de uma navegação de forma fácil de se usar e escrita toda em JavaScript;
  - [React Router](https://reacttraining.com/react-router/) - O React Router surgiu da necessidade da comunidade do React Native de uma navegação de componentes da aplicação;

- Mobile - 
  - [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
  - [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade da comunidade do React Native de uma navegação de forma fácil de se usar e escrita toda em JavaScript;
  - [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
  - [Expo](https://docs.expo.io/) - Expo é um framework e uma plataforma para aplicações React. É um conjunto de ferramentas e serviços criados em torno do React Native e plataformas nativas que ajudam a desenvolver, criar, implantar e iterar rapidamente em iOS, Android e aplicativos da Web a partir da mesma base de código;

### Estrutura de Arquivos

A estrutura de pastas está da seguinte maneira:

```bash
backend
├── src
│   ├── controllers
│   ├── database
│   │   ├── migrations
├── tests
|   ├── integration
│   ├── unit
```

```bash
frontend
├── public
└── src
    ├── assets
    ├── pages
    │   ├── Logon
    │   ├── NewIncident
    │   ├── Profile
    │   └── Register
    └── services
```

```bash
mobile
└── src
    ├── assets
    ├── pages
    │   ├── Detail
    │   └── Incidents
    └── services
```
