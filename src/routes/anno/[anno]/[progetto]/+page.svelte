<script>
  export let data;
  const { anno, progetto } = data;

  const materieColors = {
    'Italiano': '#c4421a',
    'Informatica': '#3d4a5c',
    'Storia': '#6b5344',
    'Italiano / Storia': '#8b6355',
    'Sistemi': '#1d5c4a',
    'Educazione Civica': '#5c3d8b',
  };

  const color = materieColors[progetto.materia] || '#7a7067';

  // prev / next
  const idx = anno.progetti.findIndex(p => p.slug === progetto.slug);
  const prev = anno.progetti[idx - 1] || null;
  const next = anno.progetti[idx + 1] || null;
</script>

<div class="detail-page">

  <!-- BACK BAR -->
  <div class="back-bar">
    <a href="/anno/{anno.slug}" class="back-link">
      ← {anno.label}
    </a>
    <span class="breadcrumb-sep">·</span>
    <span class="breadcrumb-cur">{progetto.titolo}</span>
  </div>

  <!-- HERO -->
  <div class="hero" style="--accent: {color}">
    <div class="hero-img-wrap">
      <img
        src={progetto.immagine}
        alt={progetto.titolo}
        style="object-fit: {progetto.objectFit}; background: #1a1410"
      />
    </div>
    <div class="hero-overlay">
      <div class="hero-content">
        <span
          class="hero-badge"
          style="color: {color}; border-color: {color}"
        >{progetto.materia}</span>
        <h1>{progetto.titolo}</h1>
        <p class="hero-sub">{progetto.sottotitolo}</p>
      </div>
    </div>
  </div>

  <!-- BODY -->
  <div class="body-grid">
    <div class="main-col">
      <section class="section">
        <h2 class="section-title">
          <span class="section-line" style="background:{color}"></span>
          Panoramica
        </h2>
        <p class="lead">{@html progetto.descrizione}</p>
      </section>

      <section class="section">
        <h2 class="section-title">
          <span class="section-line" style="background:{color}"></span>
          Approfondimento
        </h2>
        <div class="detail-text">{@html progetto.dettaglio}</div>
      </section>
    </div>

    <aside class="side-col">
      <div class="info-card">
        <dl>
          <dt>Anno</dt>
          <dd>{anno.label}</dd>
          <dt>Materia</dt>
          <dd style="color:{color}">{progetto.materia}</dd>
          <dt>Fonte</dt>
          <dd>{progetto.sottotitolo}</dd>
        </dl>
      </div>

      <a href="/anno/{anno.slug}" class="back-card">
        <span>← Tutti i progetti del {anno.label}</span>
      </a>
    </aside>
  </div>

  <!-- PREV / NEXT -->
  {#if prev || next}
    <div class="pagination">
      <div class="pag-inner">
        {#if prev}
          <a href="/anno/{anno.slug}/{prev.slug}" class="pag-item pag-prev">
            <span class="pag-dir">← Precedente</span>
            <span class="pag-title">{prev.titolo}</span>
          </a>
        {:else}
          <div></div>
        {/if}
        {#if next}
          <a href="/anno/{anno.slug}/{next.slug}" class="pag-item pag-next">
            <span class="pag-dir">Successivo →</span>
            <span class="pag-title">{next.titolo}</span>
          </a>
        {/if}
      </div>
    </div>
  {/if}

</div>

<style>
  .detail-page { min-height: 100vh; }

  /* Back bar */
  .back-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 40px;
    border-bottom: 1px solid var(--border);
    background: var(--card-bg);
  }
  .back-link {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: .1em;
    color: var(--rust);
    text-transform: uppercase;
    transition: opacity .2s;
  }
  .back-link:hover { opacity: .7; }
  .breadcrumb-sep { color: var(--border); }
  .breadcrumb-cur {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: .1em;
  }

  /* Hero */
  .hero {
    position: relative;
    height: 420px;
    overflow: hidden;
  }
  .hero-img-wrap {
    position: absolute;
    inset: 0;
  }
  .hero-img-wrap img {
    width: 100%;
    height: 100%;
    object-position: center top;
    display: block;
    filter: grayscale(10%);
  }
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(26,20,16,.92) 0%,
      rgba(26,20,16,.5) 50%,
      transparent 100%
    );
    display: flex;
    align-items: flex-end;
  }
  .hero-content {
    padding: 40px 56px;
    max-width: 700px;
  }
  .hero-badge {
    display: inline-block;
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: .18em;
    text-transform: uppercase;
    border: 1px solid;
    padding: 3px 10px;
    margin-bottom: 14px;
  }
  .hero-content h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 900;
    color: var(--cream);
    line-height: 1.1;
    margin-bottom: 10px;
  }
  .hero-sub {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: .1em;
    color: rgba(255,255,255,.45);
    text-transform: uppercase;
  }

  /* Body grid */
  .body-grid {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 48px;
    padding: 56px 56px 40px;
    max-width: 1100px;
  }

  /* Sections */
  .section { margin-bottom: 40px; }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .section-line {
    display: block;
    width: 3px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 2px;
  }

  .lead {
    font-size: 16px;
    line-height: 1.8;
    color: #3a3028;
  }

  .detail-text {
    font-size: 15px;
    line-height: 1.85;
    color: var(--muted);
  }
  :global(.detail-text strong) { color: var(--ink); font-weight: 600; }
  :global(.detail-text br) { display: block; content: ''; margin-top: 8px; }

  /* Sidebar */
  .side-col { padding-top: 8px; }

  .info-card {
    background: var(--ink);
    color: var(--cream);
    padding: 24px;
    margin-bottom: 12px;
  }
  .info-card dl { display: grid; grid-template-columns: auto 1fr; gap: 10px 16px; align-items: baseline; }
  .info-card dt {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: rgba(255,255,255,.35);
  }
  .info-card dd {
    font-size: 13px;
    color: rgba(255,255,255,.85);
    word-break: break-word;
  }

  .back-card {
    display: block;
    padding: 14px 18px;
    border: 1px solid var(--border);
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: .1em;
    color: var(--muted);
    text-transform: uppercase;
    transition: all .2s;
  }
  .back-card:hover { background: var(--ink); color: var(--cream); border-color: var(--ink); }

  /* Pagination */
  .pagination {
    border-top: 1px solid var(--border);
    padding: 0 40px;
  }
  .pag-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--border);
    gap: 1px;
  }
  .pag-item {
    background: var(--card-bg);
    padding: 24px 28px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    transition: background .2s;
  }
  .pag-item:hover { background: var(--ink); color: var(--cream); }
  .pag-next { text-align: right; }
  .pag-dir {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .pag-item:hover .pag-dir { color: rgba(255,255,255,.4); }
  .pag-title {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    .body-grid { grid-template-columns: 1fr; padding: 32px 24px; }
    .back-bar { padding: 12px 20px; }
    .hero-content { padding: 28px 24px; }
    .hero { height: 300px; }
  }
</style>
