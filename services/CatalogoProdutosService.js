import Produto from "../models/Produto.js";

class CatalogoProdutosService {
  constructor() {
    this.produtos = [
      new Produto(1, "Produto A", 100, 10),
      new Produto(2, "Produto B", 200, 5),
    ];
  }

  listarProdutos() {
    console.log("[CatalogoProdutos] Listando produtos...");
    this.produtos.forEach((p) =>
      console.log(
        `ID: ${p.id}, Nome: ${p.nome}, Preço: R$${p.preco}, Estoque: ${p.estoque}`
      )
    );
    return this.produtos;
  }

  atualizarEstoque(idProduto, quantidade) {
    const produto = this.produtos.find((p) => p.id === idProduto);
    if (produto && produto.estoque >= quantidade) {
      produto.estoque -= quantidade;
      console.log(
        `[CatalogoProdutos] Estoque atualizado para o produto ${produto.nome}. Estoque restante: ${produto.estoque}`
      );
      return true;
    }
    console.log(
      `[CatalogoProdutos] Falha ao atualizar estoque. Produto indisponível ou quantidade insuficiente.`
    );
    return false;
  }
}

export default CatalogoProdutosService;
