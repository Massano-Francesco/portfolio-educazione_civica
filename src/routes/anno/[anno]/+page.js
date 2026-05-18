import { getAnno } from '$lib/data/progetti.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const anno = getAnno(params.anno);
  if (!anno) throw error(404, 'Anno non trovato');
  return { anno };
}
