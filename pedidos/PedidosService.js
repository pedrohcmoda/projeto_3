import Pedido from "./models/Pedido.js";

class PedidosService {
  constructor() {
    this.pedidos = [];
  }

  //Método para criar um pedido, recebendo um usuário e uma lista de itens
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

  //Método para listar os pedidos cadastrados
  atualizarStatusPedido(pedido, status) {
    pedido.status = status;
    console.log(`[Pedidos] Status do pedido atualizado para '${status}'`);
  }
}

export default PedidosService;
