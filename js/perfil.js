// ════════════════════════════════════════════════
//  js/perfil.js — Lógica da página de perfil
// ════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'));
  const p      = PRESTADORES.find(x => x.id === id);

  const container = document.getElementById('perfilContainer');

  if (!p) {
    container.innerHTML = `
      <div class="text-center py-5">
        <p class="text-muted">Profissional não encontrado.</p>
        <a href="../index.html" class="btn ec-btn-green mt-3">Voltar ao catálogo</a>
      </div>`;
    return;
  }

  // atualiza título da aba
  document.title = `${p.nome} — EncontreCaap`;

  const iniciais = p.nome.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  const stars    = Array.from({ length: 5 }, (_, i) => i < p.rating ? '★' : '☆').join('');

  container.innerHTML = `
    <!-- Hero do perfil -->
    <div class="ec-perfil-hero mb-4">
      <div class="d-flex align-items-center gap-4 flex-wrap">
        <div class="ec-perfil-avatar av-${p.id % 8}" aria-hidden="true">${iniciais}</div>
        <div>
          <span class="ec-perfil-categoria">${p.categoria}</span>
          <h1 class="ec-perfil-nome">${p.nome}</h1>
          <p class="ec-perfil-cidade mb-2">
            <i class="bi bi-geo-alt me-1" aria-hidden="true"></i>${p.cidade}
          </p>
          <div class="ec-perfil-stars" aria-label="Avaliação: ${p.rating} de 5 estrelas">${stars}</div>
        </div>
      </div>
    </div>

    <!-- Cards de métricas -->
    <div class="row g-3 mb-4">
      <div class="col-4">
        <div class="ec-info-card">
          <strong>${p.anos_experiencia}</strong>
          <span>Anos de exp.</span>
        </div>
      </div>
      <div class="col-4">
        <div class="ec-info-card">
          <strong>${p.rating}.0</strong>
          <span>Avaliação</span>
        </div>
      </div>
      <div class="col-4">
        <div class="ec-info-card">
          <strong>✓</strong>
          <span>Verificado</span>
        </div>
      </div>
    </div>

    <!-- Bio -->
    <section class="ec-bio-card" aria-labelledby="bio-titulo">
      <h2 id="bio-titulo">Sobre o serviço</h2>
      <p>${p.bio}</p>
    </section>

  `;
});
