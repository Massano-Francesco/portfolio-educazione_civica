export const prerender = true;

<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { anni } from '$lib/data/progetti.js';

  const materieColors = {
    'Italiano': '#c4421a',
    'Informatica': '#3d4a5c',
    'Storia': '#6b5344',
    'Italiano / Storia': '#8b6355',
    'Sistemi': '#1d5c4a',
    'Educazione Civica': '#5c3d8b',
  };
</script>

<div class="layout">
  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-brand">
      <span class="brand-tag">Portfolio</span>
      <h1 class="brand-title">Educazione<br><em>Civica</em></h1>
    </div>

    <nav class="sidebar-nav">
      {#each anni as anno}
        <div class="nav-anno">
          <a
            class="nav-anno-link"
            href="/anno/{anno.slug}"
            class:active={$page.url.pathname.startsWith('/anno/' + anno.slug)}
          >
            <span class="nav-numero">{anno.numero}</span>
            <div class="nav-info">
              <span class="nav-label">{anno.label}</span>
              <span class="nav-materie">{anno.materie}</span>
            </div>
          </a>

          {#if $page.url.pathname.startsWith('/anno/' + anno.slug)}
            <ul class="nav-progetti">
              {#each anno.progetti as p}
                <li>
                  <a
                    href="/anno/{anno.slug}/{p.slug}"
                    class="nav-progetto"
                    class:active={$page.url.pathname === '/anno/' + anno.slug + '/' + p.slug}
                  >
                    <span
                      class="nav-dot"
                      style="background: {materieColors[p.materia] || '#7a7067'}"
                    ></span>
                    {p.titolo}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    </nav>

    <div class="sidebar-footer">
      <p>3° · 4° · 5° Superiore</p>
    </div>
  </aside>

  <!-- MAIN CONTENT -->
  <main class="content">
    <slot />
  </main>
</div>

<style>
  .layout {
    display: flex;
    min-height: 100vh;
  }

  /* ── SIDEBAR ── */
  .sidebar {
    width: var(--sidebar-w);
    flex-shrink: 0;
    background: var(--ink);
    color: var(--cream);
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    overflow-y: auto;
    z-index: 50;
    border-right: 1px solid rgba(255,255,255,.06);
  }

  .sidebar-brand {
    padding: 32px 24px 28px;
    border-bottom: 1px solid rgba(255,255,255,.08);
  }

  .brand-tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--rust);
    display: block;
    margin-bottom: 10px;
  }

  .brand-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -.01em;
  }
  .brand-title em {
    font-style: italic;
    color: var(--rust);
  }

  /* ── NAV ── */
  .sidebar-nav {
    flex: 1;
    padding: 16px 0;
  }

  .nav-anno { border-bottom: 1px solid rgba(255,255,255,.05); }

  .nav-anno-link {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 24px;
    transition: background .2s;
    cursor: pointer;
  }
  .nav-anno-link:hover { background: rgba(255,255,255,.04); }
  .nav-anno-link.active { background: rgba(196,66,26,.12); }

  .nav-numero {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 900;
    color: rgba(255,255,255,.15);
    flex-shrink: 0;
    line-height: 1;
    transition: color .2s;
  }
  .nav-anno-link.active .nav-numero,
  .nav-anno-link:hover .nav-numero { color: var(--rust); }

  .nav-info { display: flex; flex-direction: column; gap: 2px; }

  .nav-label {
    font-size: 13px;
    font-weight: 600;
    color: rgba(255,255,255,.85);
  }
  .nav-materie {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: .1em;
    color: rgba(255,255,255,.3);
    text-transform: uppercase;
  }

  /* sub-nav */
  .nav-progetti {
    list-style: none;
    padding: 4px 0 12px;
    border-top: 1px solid rgba(255,255,255,.04);
  }

  .nav-progetto {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 24px 8px 28px;
    font-size: 12px;
    color: rgba(255,255,255,.45);
    transition: color .2s;
    cursor: pointer;
  }
  .nav-progetto:hover { color: rgba(255,255,255,.8); }
  .nav-progetto.active { color: var(--cream); font-weight: 600; }

  .nav-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
    opacity: .7;
  }
  .nav-progetto.active .nav-dot { opacity: 1; }

  .sidebar-footer {
    padding: 20px 24px;
    border-top: 1px solid rgba(255,255,255,.06);
  }
  .sidebar-footer p {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: .15em;
    color: rgba(255,255,255,.2);
    text-transform: uppercase;
  }

  /* ── CONTENT ── */
  .content {
    flex: 1;
    margin-left: var(--sidebar-w);
    min-height: 100vh;
  }

  @media (max-width: 768px) {
    .sidebar { display: none; }
    .content { margin-left: 0; }
  }
</style>
