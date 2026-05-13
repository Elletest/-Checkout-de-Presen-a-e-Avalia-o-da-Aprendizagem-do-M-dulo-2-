// ════════════════════════════════════════════════
//  js/cadastro.js — Lógica do formulário de cadastro
//  Usa validação nativa do Bootstrap 5
// ════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const form      = document.getElementById('formCadastro');
  const btnSubmit = document.getElementById('btnSubmit');
  const alerta    = document.getElementById('alerta');

  form.addEventListener('submit', e => {
    e.preventDefault();
    e.stopPropagation();

    // Ativa validação visual do Bootstrap
    form.classList.add('was-validated');

    if (!form.checkValidity()) return;

    // Simula envio (aqui você integraria com o Supabase)
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Cadastrando...';

    setTimeout(() => {
      // Coleta os dados do formulário
      const dados = {
        nome:     document.getElementById('nome').value,
        categoria: document.getElementById('categoria').value,
        anos:     document.getElementById('anos').value,
        cidade:   document.getElementById('cidade').value,
        whatsapp: document.getElementById('whatsapp').value,
        bio:      document.getElementById('bio').value,
      };

      console.log('Dados para salvar no Supabase:', dados);

      // Exibe sucesso
      alerta.className = 'alert alert-success-ec d-block';
      alerta.innerHTML = `
        <i class="bi bi-check-circle-fill me-2"></i>
        <strong>Cadastro realizado com sucesso!</strong><br>
        Seu perfil já está visível no catálogo.
        <a href="../index.html" class="alert-link ms-2">Ver catálogo →</a>
      `;

      form.reset();
      form.classList.remove('was-validated');
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = '<i class="bi bi-person-check me-2"></i>Cadastrar gratuitamente';

      alerta.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  });
});
