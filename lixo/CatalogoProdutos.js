class CatalogoProdutos {
  // CatalogoProdutos.js
/**
 * Serviço de Catálogo de Produtos
 * Gerencia os dados dos produtos, como nome, preço e estoque.
 */
    constructor() {
      this.produtos = [
        { id: 1, nome: "Produto A", preco: 100, estoque: 10 },
        { id: 2, nome: "Produto B", preco: 200, estoque: 5 }
      ];
    }
  
    listarProdutos() {
      console.log("[CatalogoProdutos] Listando produtos...");
      this.produtos.forEach(p => console.log(`ID: ${p.id}, Nome: ${p.nome}, Preço: R$${p.preco}, Estoque: ${p.estoque}`));
      return this.produtos;
    }
  
    atualizarEstoque(idProduto, quantidade) {
      const produto = this.produtos.find(p => p.id === idProduto);
      if (produto && produto.estoque >= quantidade) {
        produto.estoque -= quantidade;
        console.log(`[CatalogoProdutos] Estoque atualizado para o produto ${produto.nome}. Estoque restante: ${produto.estoque}`);
        return true;
      }
      console.log(`[CatalogoProdutos] Falha ao atualizar estoque. Produto indisponível ou quantidade insuficiente.`);
      return false;
    }
  }

  
export default CatalogoProdutos;