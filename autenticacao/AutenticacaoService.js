import Usuario from "./models/Usuario.js";

class AutenticacaoService {
  constructor() {
    this.usuarios = [new Usuario("usuario1", "senha123")];
  }

  fazerLogin(nome, senha) {
    const usuario = this.usuarios.find(
      (u) => u.nome === nome && u.senha === senha
    );
    if (usuario) {
      console.log(`[Autenticacao] Login bem-sucedido para ${nome}`);
      return true;
    }
    console.log(`[Autenticacao] Falha no login para ${nome}`);
    return false;
  }
}

export default AutenticacaoService;
