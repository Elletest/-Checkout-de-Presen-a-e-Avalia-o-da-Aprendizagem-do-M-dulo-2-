# EncontreCaap
Catálogo web de prestadores de serviços locais. Permite que profissionais da região sejam encontrados por quem precisa de seus serviços.
---
## Estrutura de arquivos

```
encontrecaap/
├── index.html              # Página principal — catálogo
├── pages/
│   ├── perfil.html         # Página de perfil do prestador
│   └── cadastro.html       # Formulário de cadastro
├── css/
│   ├── style.css           # Estilos globais
│   ├── perfil.css          # Estilos da página de perfil
│   └── cadastro.css        # Estilos do formulário
├── js/
│   ├── dados.js            # Dados simulados (mock)
│   ├── main.js             # Lógica do catálogo
│   ├── perfil.js           # Lógica do perfil
│   └── cadastro.js         # Lógica do formulário
└── README.md
```

---

## Decisões técnicas

### Framework: Bootstrap 5
 Bootstrap resolve responsividade com o sistema de grid (`row`, `col-*`), traz componentes prontos (navbar, alerts, formulários com validação) e é amplamente documentado. Evita reescrever CSS do zero para comportamentos comuns como colapso do menu mobile ou validação de formulários.

### HTML Semântico
Cada seção usa a tag correta:
- `<header>` + `<nav>` para navegação
- `<main>` para conteúdo principal
- `<section>` com `aria-labelledby` para seções
- `<article>` nos cards de passo ("Como funciona")
- `<footer>` para rodapé
- `<form>` com `<label>` associado a cada `<input>` por `for`/`id`

### CSS customizado
Variáveis CSS (`--ec-*`) centralizam cores e espaçamentos, facilitando mudanças de tema. Os estilos próprios complementam o Bootstrap sem sobrescrever sua base — só adicionam a identidade visual do EncontreCaap (verde escuro, gold, tipografia Sora).

### Dados simulados (mock)
`js/dados.js` contém os dados em arrays JavaScript. Isso permite rodar o projeto sem backend. Quando o Supabase for configurado, basta substituir as leituras de `PRESTADORES` / `CATEGORIAS` por chamadas `supabase.from(...).select(...)`.

### Página de perfil via query string
A navegação para o perfil usa `?id=1` na URL. `perfil.js` lê esse parâmetro com `URLSearchParams` e busca o prestador correspondente. Simples e sem necessidade de roteamento.