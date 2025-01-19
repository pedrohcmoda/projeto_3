# Sistema de Gerenciamento de Pedidos - Simulação de Microsserviços

Este projeto simula uma arquitetura de microsserviços para um sistema de gerenciamento de pedidos.

## Autores

Este projeto foi desenvolvido por:
- Pedro Henrique Cunha Moda
- Carlos Koiti Yamanaka

## Estrutura do Projeto

O projeto é composto por quatro microsserviços:

1. Serviço de Autenticação (`Autenticacao.js`)
2. Serviço de Catálogo de Produtos (`CatalogoProdutos.js`)
3. Serviço de Pedidos (`Pedidos.js`)
4. Serviço de Pagamentos (`Pagamentos.js`)

A simulação do fluxo completo é realizada no arquivo `index.js`.

## Como Executar

1. Certifique-se de ter o Node.js instalado.
2. Execute o comando: `node index.js`

## Fluxo Simulado

1. O usuário faz login.
2. O catálogo de produtos é exibido.
3. O usuário seleciona produtos e cria um pedido.
4. O pagamento é processado e o status do pedido é atualizado.

## Mecanismos de Falha

- O serviço de autenticação pode falhar se as credenciais estiverem incorretas.
- O serviço de catálogo pode falhar se não houver estoque suficiente.
- O serviço de pagamentos tem uma chance de 30% de falha simulada.

## Diagrama de Interação

[[LINK](https://raw.githubusercontent.com/pedrohcmoda/projeto_3/refs/heads/main/micro.png)]

## Notas de Desenvolvimento

Este projeto foi desenvolvido como parte de um trabalho acadêmico para demonstrar o funcionamento de uma arquitetura de microsserviços. Implementamos cada serviço separadamente e depois integramos tudo no fluxo principal.

Enfrentamos alguns desafios interessantes, especialmente na simulação das falhas e na garantia de que cada serviço mantivesse sua independência. Foi uma ótima oportunidade para aplicar na prática os conceitos de microsserviços que aprendemos em aula.
