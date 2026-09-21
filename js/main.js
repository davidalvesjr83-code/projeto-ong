const formCadastro = document.getElementById('formCadastro');

if (formCadastro) {
  formCadastro.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    if (!nome || !email) {
      alert('Por favor, preencha nome e e-mail!');
      return;
    }

    const dados = { nome, email, telefone };
    localStorage.setItem('cadastro', JSON.stringify(dados));

    alert('Cadastro realizado com sucesso! Obrigado, ' + nome + '!');
    formCadastro.reset();
  });
}
