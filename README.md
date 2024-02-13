<div align='center'>
  <h1>
    🍕 PizzaShop Web
  </h1>

  > Dashboard para restaurantes de delivery acompanharem seus pedidos, métricas e gerenciamento de entregas.
</div>

## 📄 Projeto

Esse projeto tem como foco exercitar tanto os conceitos sobre o React, quanto a comunicação com APIs via requisições HTTP. Também, apresentar os testes em aplicação frontend. Portanto, iremos desenvolver uma aplicação de gerenciamento de uma pizzaria (dashboard de administrador) utilizando Vite, React Router DOM, React Hook Form, shadcn/ui, React Query, Vitest e mais!

![image](https://github.com/Azanniel/pizzashop-web/assets/71537090/8871c6a6-f820-467d-804b-c94ba095fb6c)

## 🔧 Executando

Após clonar o repositório, acesse a pasta do projeto e execute os comandos abaixo:

```bash
pnpm install
pnpm run dev
```

Certifique-se de que o projeto de [API](https://github.com/rocketseat-education/pizzashop-api) esteja rodando localmente.

## 🧪 Execução dos testes

A aplicação possui tanto testes unitários quanto testes de ponta a ponta (E2E). Os testes unitários podem ser executados usando o comando abaixo:

```bash
pnpm run test
```

Já para os testes de ponta a ponta foi utilizado o [playwright](https://playwright.dev/) que é uma alternativa ao [Cypress](https://www.cypress.io/) e que executa os testes concorrentemente. Para executar os testes usando a CLI utilize:

```bash
pnpm playwright test
```

Já para executar os testes usando a interface disponibilizada pela ferramenta, utilize:

```bash
pnpm playwright test --ui
```
