import { reverseWords } from './solution'
// import the type of assertion library you wish to use (Chai recommended)

describe('Reverse words', function () {
  it('Should return a proper value', function () {
    expect(reverseWords('The quick brown fox jumps over the lazy dog.'))
      .toBe('ehT kciuq nworb xof spmuj revo eht yzal .god')
    expect(reverseWords('apple')).toBe('elppa')
    expect(reverseWords('a b c d')).toBe('a b c d')
    expect(reverseWords('double  spaced  words')).toBe('elbuod  decaps  sdrow')
  })
})
