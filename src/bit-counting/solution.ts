export function countBits(n: number): number {
  return [...n.toString(2)].reduce((acc, num) => (+num ? acc + 1 : acc), 0);
}
