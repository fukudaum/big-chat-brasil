# Frontend do Sistema de Gerenciamento de Usuários

## Descrição

Este projeto é a parte frontend de um sistema de gerenciamento de usuários. Ele permite visualizar, editar e enviar mensagens para os usuários cadastrados. Além disso, o sistema suporta a atualização do tipo de plano e saldo para usuários com plano pré-pago, e o limite de mensagens para usuários com plano pós-pago.

## Tecnologias Utilizadas

- React
- Axios
- React Router Dom
- CSS

## Funcionalidades

- Listagem de usuários
- Detalhamento de usuário
- Edição de informações de usuário
- Envio de mensagens para usuários
- Adição de saldo para usuários com plano pré-pago
- Atualização do limite de mensagens para usuários com plano pós-pago
- Alteração do tipo de plano do usuário

## Premissas Assumidas

1. **Endpoints de API**: O frontend se comunica com uma API backend que está sendo executada no `localhost` na porta `3010`.
2. **Tipos de Plano**: Existem dois tipos de plano - `PRE_PAID` (pré-pago) e `POST_PAID` (pós-pago).
3. **Campos Obrigatórios**: Alguns campos são obrigatórios durante a criação e edição de usuários, como `email`, `username`, `cpf`, `cnpj`, `password`, `phone` e `companyName`.

## Pré-requisitos

- Node.js instalado
- npm ou yarn instalado

## Instalação

1. Clone o repositório:
    ```sh
    git clone <URL_DO_REPOSITORIO>
    ```
2. Navegue até o diretório do frontend:
    ```sh
    cd caminho/do/frontend
    ```
3. Instale as dependências:
    ```sh
    npm install
    # ou
    yarn install
    ```

## Execução

Para iniciar a aplicação em modo de desenvolvimento, execute:
```sh
npm start
# ou
yarn start
