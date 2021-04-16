export function zipWith (
  fn: Function,
  [firstA0, ...a0]: any[],
  [firstA1, ...a1]: any[],
  result = []
): any[] {
  if (firstA0 === undefined || firstA1 === undefined) {
    return result
  }
  return zipWith(fn, a0, a1, result.concat(fn(firstA0, firstA1)))
}
