// ════════════════════════════════════════════════
//  js/dados.js — Dados simulados (mock)
//
//  Enquanto o Supabase não estiver configurado,
//  estes dados são usados no lugar do banco real.
//  Quando conectar o Supabase, substitua as funções
//  em main.js / perfil.js para buscar daqui:
//  supabase.from('prestadores').select(...)
// ════════════════════════════════════════════════

const CATEGORIAS = [
  { id: 1, nome: 'Construção',          icone: '🏗️' },
  { id: 2, nome: 'Elétrica',            icone: '⚡' },
  { id: 3, nome: 'Limpeza de Estofado', icone: '🛋️' },
  { id: 4, nome: 'Limpeza de Piscina',  icone: '🏊' },
  { id: 5, nome: 'Frete',               icone: '🚚' },
  { id: 6, nome: 'Costura',             icone: '🧵' },
  { id: 7, nome: 'Suporte Técnico',     icone: '💻' },
  { id: 8, nome: 'Viagens',             icone: '✈️' },
];

const PRESTADORES = [
  { id: 1,  nome: 'Mateus Fernandes',  categoria_id: 1, categoria: 'Construção',          cidade: 'Goiana, PE', anos_experiencia: 20, rating: 5, bio: 'Especialista em alvenaria, reforma e construção civil. Trabalho com acabamento fino e pontualidade garantida.' },
  { id: 2,  nome: 'Carlos Alberto',    categoria_id: 1, categoria: 'Construção',          cidade: 'Goiana, PE', anos_experiencia: 15, rating: 5, bio: 'Construtor civil com vasta experiência em obras residenciais e comerciais. Orçamento sem compromisso.' },
  { id: 3,  nome: 'José Silva',        categoria_id: 1, categoria: 'Construção',          cidade: 'Goiana, PE', anos_experiencia: 15, rating: 4, bio: 'Pedreiro e azulejista com experiência em reformas de banheiro, cozinha e área externa.' },
  { id: 4,  nome: 'João Nobre',        categoria_id: 1, categoria: 'Construção',          cidade: 'Goiana, PE', anos_experiencia: 15, rating: 4, bio: 'Mestre de obras. Coordeno equipes e garanto qualidade em todas as etapas da construção.' },
  { id: 5,  nome: 'Fernando Almeida',  categoria_id: 1, categoria: 'Construção',          cidade: 'Goiana, PE', anos_experiencia: 15, rating: 4, bio: 'Reformas em geral, pintura, reboco e manutenção predial. Atendo Goiana e região.' },
  { id: 6,  nome: 'Josué Campos',      categoria_id: 1, categoria: 'Construção',          cidade: 'Goiana, PE', anos_experiencia: 5,  rating: 3, bio: 'Auxiliar de obras em início de carreira. Dedicado e pontual, busco oportunidades para crescer.' },
  { id: 7,  nome: 'Ana Paula',         categoria_id: 2, categoria: 'Elétrica',            cidade: 'Goiana, PE', anos_experiencia: 12, rating: 5, bio: 'Eletricista residencial e comercial. Instalação de painéis, tomadas, iluminação e AR condicionado.' },
  { id: 8,  nome: 'Roberto Lima',      categoria_id: 2, categoria: 'Elétrica',            cidade: 'Goiana, PE', anos_experiencia: 18, rating: 5, bio: 'Técnico em elétrica com 18 anos de experiência. Laudo elétrico, SPDA e instalações industriais.' },
  { id: 9,  nome: 'Carla Souza',       categoria_id: 6, categoria: 'Costura',             cidade: 'Goiana, PE', anos_experiencia: 10, rating: 4, bio: 'Costureira profissional. Ajustes, reformas de roupas, confecção sob medida e fantasias.' },
  { id: 10, nome: 'Maria José',        categoria_id: 6, categoria: 'Costura',             cidade: 'Goiana, PE', anos_experiencia: 20, rating: 5, bio: 'Costura fina, vestidos de festa e noiva. 20 anos de experiência com clientes satisfeitas.' },
  { id: 11, nome: 'Paulo Freitas',     categoria_id: 5, categoria: 'Frete',               cidade: 'Goiana, PE', anos_experiencia: 8,  rating: 4, bio: 'Frete e mudanças em geral. Caminhão baú disponível. Atendo Goiana, Recife e Região Metropolitana.' },
  { id: 12, nome: 'Lucas Melo',        categoria_id: 7, categoria: 'Suporte Técnico',     cidade: 'Goiana, PE', anos_experiencia: 6,  rating: 5, bio: 'Formatação, instalação de programas, redes Wi-Fi, câmeras de segurança e suporte remoto.' },
  { id: 13, nome: 'Renata Oliveira',   categoria_id: 3, categoria: 'Limpeza de Estofado', cidade: 'Goiana, PE', anos_experiencia: 9,  rating: 5, bio: 'Limpeza a vapor de sofás, cadeiras, colchões e carpetes. Produto eco-friendly e resultado garantido.' },
  { id: 14, nome: 'Marcos Vieira',     categoria_id: 4, categoria: 'Limpeza de Piscina',  cidade: 'Goiana, PE', anos_experiencia: 11, rating: 4, bio: 'Limpeza, tratamento químico e manutenção de piscinas. Contrato mensal com desconto especial.' },
  { id: 15, nome: 'Simone Maia',       categoria_id: 8, categoria: 'Viagens',             cidade: 'Goiana, PE', anos_experiencia: 7,  rating: 5, bio: 'Guia turística local. Roteiros personalizados pelo litoral norte de PE. Transporte incluso.' },
];
