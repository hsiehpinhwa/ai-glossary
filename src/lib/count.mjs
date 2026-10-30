// One counting rule for the site and the evals: each CJK character counts 1,
// each run of Latin letters/digits counts 1, punctuation and spaces count 0.
export function countUnits(text) {
  const cjk = text.match(/[㐀-鿿豈-﫿]/g) || [];
  const latin = text.replace(/[㐀-鿿豈-﫿]/g, ' ').match(/[A-Za-z0-9][A-Za-z0-9.'’+\-]*/g) || [];
  return cjk.length + latin.length;
}
