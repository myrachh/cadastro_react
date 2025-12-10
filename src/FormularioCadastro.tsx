import { useState } from "react";
import "./FormularioCadastro.css";

export default function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = () => {
    console.log("Dados enviados:", { nome, email, telefone, senha });
    setEnviado(true);

    setTimeout(() => {
      setNome("");
      setEmail("");
      setTelefone("");
      setSenha("");
      setEnviado(false);
    }, 2500);
  };

  if (enviado) {
    return (
      <div className="container">
        <div className="card sucesso">
          <h2>✓ Sucesso!</h2>
          <p>Cadastro realizado com sucesso.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Formulário de Cadastro</h1>

        <div className="form-group">
          <label>Nome Completo</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
          />
        </div>

        <div className="form-group">
          <label>Telefone</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>

        <button onClick={handleEnviar}>Cadastrar</button>
      </div>
    </div>
  );
}
