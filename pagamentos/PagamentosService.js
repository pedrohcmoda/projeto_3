class PagamentosService {
  // Método que simula o processamento de um pagamento
  processarPagamento(pedido) {
    const pagamentoAprovado = Math.random() > 0.3; // Simula falha em ~30% dos casos
    if (pagamentoAprovado) {
      console.log("[Pagamentos] Pagamento aprovado.");
      return true;
    }
    console.log("[Pagamentos] Pagamento recusado.");
    return false;
  }
}

export default PagamentosService;
