import AutenticacaoService from "./autenticacao/AutenticacaoService.js";
import CatalogoProdutosService from "./catalogoProdutos/CatalogoProdutosService.js";
import PedidosService from "./pedidos/PedidosService.js";
import PagamentosService from "./pagamentos/PagamentosService.js";

function simularFluxo() {
  console.log("Iniciando simulação do fluxo de pedido...");

  const servicoAutenticacao = new AutenticacaoService();
  const catalogoProdutos = new CatalogoProdutosService();
  const servicoPedidos = new PedidosService();
  const servicoPagamentos = new PagamentosService();

  // Etapa 1: Login
  console.log("\n--- Etapa 1: Autenticação ---");
  const autenticado = servicoAutenticacao.fazerLogin("usuario1", "senha123");
  if (!autenticado) {
    console.log("Simulação encerrada devido a falha na autenticação.");
    return;
  }

  // Etapa 2: Listar produtos
  console.log("\n--- Etapa 2: Listagem de Produtos ---");
  const produtos = catalogoProdutos.listarProdutos();

  // Etapa 3: Selecionar itens e criar pedido
  console.log("\n--- Etapa 3: Criação do Pedido ---");
  const itensSelecionados = [
    { ...produtos[0], quantidade: 2 },
    { ...produtos[1], quantidade: 1 },
  ];

  console.log("Verificando estoque dos itens selecionados...");
  for (const item of itensSelecionados) {
    if (!catalogoProdutos.atualizarEstoque(item.id, item.quantidade)) {
      console.log("Simulação encerrada devido a falta de estoque.");
      return;
    }
  }

  const pedido = servicoPedidos.criarPedido("usuario1", itensSelecionados);

  // Etapa 4: Processar pagamento
  console.log("\n--- Etapa 4: Processamento do Pagamento ---");
  const pagamentoAprovado = servicoPagamentos.processarPagamento(pedido);

  if (pagamentoAprovado) {
    servicoPedidos.atualizarStatusPedido(pedido, "pago");
  } else {
    servicoPedidos.atualizarStatusPedido(pedido, "pendente");
  }

  console.log("\nSimulação concluída.");
}

// Executar a simulação
simularFluxo();
