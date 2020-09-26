export function xo(str: string): boolean {
  const x = [...str].reduce(countLettersReducerFor("x"), 0);
  const o = [...str].reduce(countLettersReducerFor("o"), 0);

  return x === o;
}

function countLettersReducerFor(letter: string) {
  return (acc: number, char: string) =>
    char.toLowerCase() === letter.toLowerCase() ? acc + 1 : acc;
}
