export function reverseWords(str: string): string {
  let result = "";
  let temp = "";

  [...str].forEach((char, i) => {
    if (isWhiteSpace(char)) {
      result += [...temp].reverse().join("") + char;
      temp = "";
    } else if (i === str.length - 1) {
      result += [...(temp + char)].reverse().join("");
    } else {
      temp += char;
    }
  });

  return result;
}

const isWhiteSpace = (char: string) => /\s/.test(char);
