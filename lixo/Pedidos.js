class Pedidos {
  /**
 * Serviço de Pedidos
 * Gerencia a criação de pedidos, associando usuários aos itens comprados e calculando o total da compra.
 */
    constructor() {
      this.pedidos = [];
    }
  
    criarPedido(usuario, itens) {
      const total = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
      const pedido = { usuario, itens, total, status: "pendente" };
      this.pedidos.push(pedido);
      console.log(`[Pedidos] Pedido criado para ${usuario}. Total: R$${total}`);
      return pedido;
    }
  
    atualizarStatusPedido(pedido, status) {
      pedido.status = status;
      console.log(`[Pedidos] Status do pedido atualizado para '${status}'`);
    }
  }



  
export default Pedidos;