export function tribonacci(arr: [number, number, number], n: number): number[] {
  const result: number[] = [];

  for (let i = 0; i < n; i++) {
    if (i < 3) {
      result.push(arr[i]);
    } else {
      const tempArray = [...result];
      const [a, b, c] = tempArray.reverse();
      result.push(a + b + c);
    }
  }

  return result;
}
