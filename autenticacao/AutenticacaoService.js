import Usuario from "./models/Usuario.js";

class AutenticacaoService {
  constructor() {
    this.usuarios = [new Usuario("usuario1", "senha123")];
  }
  //Método para fazer login simulando um acesso a um banco de dados, retornando uma falha ou um sucesso
  //E setando o token do usuário caso ele tenha sucesso na autenticação
  fazerLogin(nome, senha) {
    const usuario = this.usuarios.find(
      (u) => u.nome === nome && u.senha === senha
    );
    if (usuario) {
      console.log(`[Autenticacao] Login bem-sucedido para ${nome}`);
      console.log(`O token setado foi ${Math.random().toString(36).substring(2)}`);
      return true;
    }
    console.log(`[Autenticacao] Falha no login para ${nome}`);
    return false;
  }
}

export default AutenticacaoService;
