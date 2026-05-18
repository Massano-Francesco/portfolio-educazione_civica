import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

const config = {
  kit: {
    adapter: adapter({ fallback: 'index.html' }),
    paths: {
      base: dev ? '' : '/portfolio-civica' // ← nome del tuo repo
    }
  }
};

export default config;