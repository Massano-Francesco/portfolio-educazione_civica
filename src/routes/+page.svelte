<script>
  import { anni } from '$lib/data/progetti.js';
</script>

<div class="home">
  <div class="home-inner">
    <span class="tag">Portfolio Scolastico</span>
    <h1>Educazione<br><em>Civica</em></h1>
    <p class="subtitle">Un percorso triennale attraverso letteratura, storia, diritto e tecnologia.</p>

    <div class="anni-grid">
      {#each anni as anno}
        <a href="/anno/{anno.slug}" class="anno-card">
          <span class="anno-num">{anno.numero}</span>
          <div>
            <strong>{anno.label}</strong>
            <span>{anno.materie}</span>
          </div>
          <span class="arrow">→</span>
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 40px;
    position: relative;
    overflow: hidden;
  }
  .home::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      90deg, transparent, transparent 59px,
      var(--border) 59px, var(--border) 60px
    );
    opacity: .25;
  }

  .home-inner {
    position: relative;
    max-width: 600px;
    width: 100%;
  }

  .tag {
    display: inline-block;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--rust);
    border: 1px solid var(--rust);
    padding: 4px 10px;
    margin-bottom: 24px;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(48px, 8vw, 80px);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -.02em;
    margin-bottom: 20px;
  }
  h1 em { font-style: italic; color: var(--rust); }

  .subtitle {
    font-size: 15px;
    color: var(--muted);
    line-height: 1.7;
    margin-bottom: 48px;
    max-width: 400px;
  }

  .anni-grid { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); }

  .anno-card {
    background: var(--card-bg);
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 24px;
    transition: background .2s, transform .2s;
  }
  .anno-card:hover { background: var(--ink); color: var(--cream); transform: translateX(4px); }

  .anno-num {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 900;
    color: var(--border);
    flex-shrink: 0;
    line-height: 1;
    transition: color .2s;
  }
  .anno-card:hover .anno-num { color: var(--rust); }

  .anno-card div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .anno-card strong { font-size: 15px; font-weight: 600; }
  .anno-card span {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: .1em;
    color: var(--muted);
    text-transform: uppercase;
  }
  .anno-card:hover span { color: rgba(255,255,255,.4); }

  .arrow { font-size: 18px; }
</style>
