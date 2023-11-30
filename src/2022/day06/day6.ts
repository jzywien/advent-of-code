export const solution = (input: string, matchLen: number = 4): number =>
   input.split('').findIndex((_, ndx, orig) => new Set(orig.slice(ndx, ndx + matchLen)).size === matchLen) + matchLen;
