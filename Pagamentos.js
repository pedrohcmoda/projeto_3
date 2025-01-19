class Pagamentos {
  /**
 * Serviço de Pagamentos
 * Processa os pagamentos de pedidos e altera o estado do pedido para "pago" ou "pendente".
 */
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

  
export default Pagamentos;