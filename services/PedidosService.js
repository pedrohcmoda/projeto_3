import Pedido from "../models/Pedido.js";

class PedidosService {
  constructor() {
    this.pedidos = [];
  }

  criarPedido(usuario, itens) {
    const total = itens.reduce(
      (soma, item) => soma + item.preco * item.quantidade,
      0
    );
    const pedido = new Pedido(usuario, itens, total);
    this.pedidos.push(pedido);
    console.log(`[Pedidos] Pedido criado para ${usuario}. Total: R$${total}`);
    return pedido;
  }

  atualizarStatusPedido(pedido, status) {
    pedido.status = status;
    console.log(`[Pedidos] Status do pedido atualizado para '${status}'`);
  }
}

export default PedidosService;
