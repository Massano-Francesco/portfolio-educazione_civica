<script>
  export let data;
  const { anno } = data;

  const materieColors = {
    'Italiano': '#c4421a',
    'Informatica': '#3d4a5c',
    'Storia': '#6b5344',
    'Italiano / Storia': '#8b6355',
    'Sistemi': '#1d5c4a',
    'Educazione Civica': '#5c3d8b',
  };
</script>

<div class="anno-page">
  <!-- Header -->
  <header class="anno-header">
    <div class="anno-hero">
      <span class="anno-big">{anno.numero}</span>
      <div class="anno-info">
        <h1>{anno.label}</h1>
        <p class="materie-list">{anno.materie}</p>
        <p class="count">{anno.progetti.length} progetti</p>
      </div>
    </div>
  </header>

  <!-- Projects grid -->
  <div class="progetti-grid">
    {#each anno.progetti as p}
      <a href="/anno/{anno.slug}/{p.slug}" class="card">
        <div class="card-img-wrap">
          <img
            src={p.immagine}
            alt={p.titolo}
            style="object-fit: {p.objectFit}"
          />
          <div class="card-overlay">
            <span class="overlay-cta">Scopri →</span>
          </div>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span
              class="badge-materia"
              style="color: {materieColors[p.materia] || '#7a7067'}; border-color: {materieColors[p.materia] || '#7a7067'}"
            >{p.materia}</span>
          </div>
          <h2 class="card-title">{p.titolo}</h2>
          <p class="card-desc">{@html p.descrizione}</p>
          <div class="card-footer">
            <span class="card-sub">{p.sottotitolo}</span>
            <span class="card-arrow">→</span>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .anno-page { min-height: 100vh; }

  /* Header */
  .anno-header {
    background: var(--ink);
    color: var(--cream);
    padding: 60px 56px 50px;
    position: relative;
    overflow: hidden;
  }
  .anno-header::after {
    content: attr(data-anno);
    position: absolute;
    right: -20px; bottom: -30px;
    font-family: 'Playfair Display', serif;
    font-size: 200px;
    font-weight: 900;
    color: rgba(255,255,255,.03);
    pointer-events: none;
    line-height: 1;
  }

  .anno-hero {
    display: flex;
    align-items: center;
    gap: 28px;
  }

  .anno-big {
    font-family: 'Playfair Display', serif;
    font-size: 100px;
    font-weight: 900;
    line-height: 1;
    color: var(--rust);
    flex-shrink: 0;
  }

  .anno-info h1 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .materie-list {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: rgba(255,255,255,.4);
    margin-bottom: 4px;
  }

  .count {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: var(--rust);
    letter-spacing: .1em;
  }

  /* Grid */
  .progetti-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    margin: 40px 40px 60px;
  }

  /* Card */
  .card {
    background: var(--card-bg);
    display: flex;
    flex-direction: column;
    transition: transform .3s, box-shadow .3s;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 24px 60px rgba(26,20,16,.18);
    z-index: 2;
  }

  .card-img-wrap {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
  }
  .card-img-wrap img {
    width: 100%;
    height: 100%;
    object-position: center top;
    display: block;
    background: var(--ink);
    filter: grayscale(15%);
    transition: filter .3s, transform .4s;
  }
  .card:hover .card-img-wrap img {
    filter: grayscale(0);
    transform: scale(1.04);
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(26,20,16,.7) 0%, transparent 60%);
    display: flex;
    align-items: flex-end;
    padding: 16px;
    opacity: 0;
    transition: opacity .3s;
  }
  .card:hover .card-overlay { opacity: 1; }

  .overlay-cta {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: .12em;
    color: var(--cream);
    text-transform: uppercase;
  }

  .card-body {
    padding: 22px 26px 26px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .card-meta { display: flex; gap: 8px; }

  .badge-materia {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: .14em;
    text-transform: uppercase;
    padding: 3px 8px;
    border: 1px solid;
  }

  .card-title {
    font-family: 'Playfair Display', serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.2;
  }

  .card-desc {
    font-size: 13.5px;
    line-height: 1.65;
    color: var(--muted);
    flex: 1;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
    padding-top: 12px;
    border-top: 1px solid var(--border);
  }

  .card-sub {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: .1em;
    color: var(--muted);
    text-transform: uppercase;
  }

  .card-arrow {
    width: 30px;
    height: 30px;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    transition: all .25s;
  }
  .card:hover .card-arrow {
    background: var(--ink);
    border-color: var(--ink);
    color: var(--cream);
  }

  @media (max-width: 768px) {
    .anno-header { padding: 40px 24px; }
    .anno-big { font-size: 60px; }
    .progetti-grid { margin: 24px 16px 48px; grid-template-columns: 1fr; }
  }
</style>
