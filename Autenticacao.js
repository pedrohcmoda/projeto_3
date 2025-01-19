class Autenticacao {
  /**
 * Serviço de Autenticação
 * Responsável por gerenciar o login dos usuários e autenticar os acessos ao sistema.
 */
    constructor() {
      this.usuarios = [{ nome: "usuario1", senha: "senha123" }];
    }
  
    fazerLogin(nome, senha) {
      const usuario = this.usuarios.find(u => u.nome === nome && u.senha === senha);
      if (usuario) {
        console.log(`[Autenticacao] Login bem-sucedido para ${nome}`);
        return true;
      }
      console.log(`[Autenticacao] Falha no login para ${nome}`);
      return false;
    }
  }

export default Autenticacao;