// ════════════════════════════════════════════════
//  js/main.js — Lógica do catálogo principal
// ════════════════════════════════════════════════

const CORES = ['av-0','av-1','av-2','av-3','av-4','av-5','av-6','av-7'];

let categoriaAtiva = null;
let ordemAtiva     = 'rating';

// ── Inicializa quando a página carrega ──────────
document.addEventListener('DOMContentLoaded', () => {
  renderCategorias();
  renderPrestadores();

  // busca ao pressionar Enter
  document.getElementById('searchInput')
    .addEventListener('keydown', e => { if (e.key === 'Enter') buscar(); });
});

// ── Render de categorias ────────────────────────
function renderCategorias() {
  const grid = document.getElementById('catGrid');

  // Card "Todos"
  const todos = criarCatCard(null, '🔍', 'Todos', true);
  grid.innerHTML = '';
  grid.appendChild(todos);

  CATEGORIAS.forEach(cat => {
    grid.appendChild(criarCatCard(cat.id, cat.icone, cat.nome, false));
  });
}

function criarCatCard(id, icone, nome, ativo) {
  const col  = document.createElement('div');
  col.className = 'col';

  const card = document.createElement('div');
  card.className = 'ec-cat-card' + (ativo ? ' active' : '');
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-pressed', ativo ? 'true' : 'false');
  card.setAttribute('aria-label', `Filtrar por ${nome}`);

  card.innerHTML = `<span class="ec-cat-icon" aria-hidden="true">${icone}</span>
                    <div class="ec-cat-name">${nome}</div>`;

  card.addEventListener('click', () => filtrarCategoria(id, card));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') filtrarCategoria(id, card); });

  col.appendChild(card);
  return col;
}

// ── Render de prestadores ───────────────────────
function renderPrestadores() {
  const grid = document.getElementById('prosGrid');
  const termo = document.getElementById('searchInput').value.trim().toLowerCase();

  // filtra
  let lista = PRESTADORES.filter(p => {
    const matchCat  = !categoriaAtiva || p.categoria_id === categoriaAtiva;
    const matchTerm = !termo || p.nome.toLowerCase().includes(termo) || p.categoria.toLowerCase().includes(termo);
    return matchCat && matchTerm;
  });

  // ordena
  if (ordemAtiva === 'rating') lista.sort((a, b) => b.rating - a.rating);
  else if (ordemAtiva === 'anos') lista.sort((a, b) => b.anos_experiencia - a.anos_experiencia);
  else lista.sort((a, b) => a.nome.localeCompare(b.nome));

  grid.innerHTML = '';

  if (!lista.length) {
    grid.innerHTML = '<p class="text-muted py-4 text-center col-12">Nenhum profissional encontrado.</p>';
    return;
  }

  lista.forEach((p, i) => {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = renderCard(p, i);
    grid.appendChild(col);
  });
}

function renderCard(p, i) {
  const cor     = CORES[i % CORES.length];
  const iniciais = p.nome.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  const stars   = renderStars(p.rating);

  return `
    <a class="ec-pro-card h-100" href="pages/perfil.html?id=${p.id}"
       aria-label="Ver perfil de ${p.nome}, ${p.categoria}">
      <span class="ec-verified" aria-label="Perfil verificado">✓</span>
      <div class="d-flex align-items-center gap-2 mb-3">
        <div class="ec-pro-avatar ${cor}" aria-hidden="true">${iniciais}</div>
        <div>
          <div class="ec-pro-name">${p.nome}</div>
          <div class="ec-pro-role">${p.categoria}</div>
        </div>
      </div>
      <div class="ec-pro-meta d-flex justify-content-between align-items-center">
        <span class="ec-pro-years">
          <i class="bi bi-clock me-1" aria-hidden="true"></i>${p.anos_experiencia} ano${p.anos_experiencia !== 1 ? 's' : ''} de exp.
        </span>
        <span class="ec-pro-rating" aria-label="Avaliação: ${p.rating} de 5 estrelas">${stars}</span>
      </div>
    </a>
  `;
}

function renderStars(n) {
  return Array.from({ length: 5 }, (_, i) => i < n ? '★' : '☆').join('');
}

// ── Ações globais ───────────────────────────────
function filtrarCategoria(id, el) {
  categoriaAtiva = id;

  // atualiza visual das categorias
  document.querySelectorAll('.ec-cat-card').forEach(c => {
    c.classList.remove('active');
    c.setAttribute('aria-pressed', 'false');
  });
  el.classList.add('active');
  el.setAttribute('aria-pressed', 'true');

  // atualiza título
  const titulo = id
    ? CATEGORIAS.find(c => c.id === id)?.nome || 'Profissionais'
    : 'Todos os profissionais';
  document.getElementById('tit-pros').textContent = titulo;

  renderPrestadores();
  document.getElementById('profissionais').scrollIntoView({ behavior: 'smooth' });
}

function ordenar(campo, el) {
  ordemAtiva = campo;
  document.querySelectorAll('.ec-filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderPrestadores();
}

function buscar() {
  renderPrestadores();
}

// expõe para uso inline no HTML (onclick=)
window.ordenar = ordenar;
window.buscar  = buscar;
