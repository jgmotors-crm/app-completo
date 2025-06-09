import React from 'react';

function Login() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Login - JG Motors</h2>
      <input placeholder="Email" /><br /><br />
      <input placeholder="Senha" type="password" /><br /><br />
      <button>Entrar</button>
    </div>
  );
}

export default Login;
