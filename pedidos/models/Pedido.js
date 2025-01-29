// Modelo de pedido para ser utilizado no serviço de pedidos
class Pedido {
  constructor(usuario, itens, total, status = "pendente") {
    this.usuario = usuario;
    this.itens = itens;
    this.total = total;
    this.status = status;
  }
}

export default Pedido;
