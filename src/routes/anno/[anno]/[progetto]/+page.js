import { getProgetto, getAnno } from '$lib/data/progetti.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const anno = getAnno(params.anno);
  if (!anno) throw error(404, 'Anno non trovato');
  const progetto = getProgetto(params.anno, params.progetto);
  if (!progetto) throw error(404, 'Progetto non trovato');
  return { anno, progetto };
}
