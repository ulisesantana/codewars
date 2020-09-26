export function accum(s: string): string {
  return [...s]
    .map((char, index) => capitalize(char + char.toLowerCase().repeat(index)))
    .join("-");
}

const capitalize = (text: string) => text[0].toUpperCase() + text.slice(1);
