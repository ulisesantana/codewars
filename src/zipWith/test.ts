import { zipWith } from './solution'

describe('zipWith', () => {
  const plus = (a: number, b: number) => a + b
  it('Example tests', () => {
    expect(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1])).toStrictEqual([6, 6, 6, 6, 6, 6])
    expect(zipWith(plus, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1])).toStrictEqual([6, 6, 6, 6, 6])
    expect(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2])).toStrictEqual([6, 6, 6, 6, 6])
  })
  it('Description tests', () => {
    expect(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])).toStrictEqual([1, 10, 100, 1000])
    expect(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])).toStrictEqual([4, 7, 7, 4, 7, 7])
    expect(zipWith(plus, [0, 1, 2, 3], [0, 1, 2, 3])).toStrictEqual([0, 2, 4, 6])
    expect(zipWith(plus, [0, 1, 2, 3], [0, 1, 2, 3])).toStrictEqual([0, 2, 4, 6])
  })
})
