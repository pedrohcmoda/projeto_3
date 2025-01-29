//Modelo de produto para ser utilizado no serviço de catálogo de produtos
class Produto {
  constructor(id, nome, preco, estoque) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
}

export default Produto;
