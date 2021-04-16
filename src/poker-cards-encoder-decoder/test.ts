import { decode, encode } from './solution'

describe('sample tests', function () {
  it('should work for decoding', function () {
    expect(decode([7, 22, 51])).toStrictEqual(['8c', 'Td', 'Ks'])
    expect(decode([13, 30, 37])).toStrictEqual(['Ad', '5h', 'Qh'])
    expect(decode([7, 51, 22])).toStrictEqual(['8c', 'Td', 'Ks'])
    expect(decode([13, 37, 30])).toStrictEqual(['Ad', '5h', 'Qh'])
    expect(decode([50, 6, 13, 30, 37])).toStrictEqual(['7c', 'Ad', '5h', 'Qh', 'Qs'])
  })

  it('should work for encoding', function () {
    expect(encode(['5h', '7c', 'Qh', 'Qs', 'Ad'])).toStrictEqual([6, 13, 30, 37, 50])
    expect(encode(['Td', '8c', 'Ks'])).toStrictEqual([7, 22, 51])
    expect(encode(['Qh', '5h', 'Ad'])).toStrictEqual([13, 30, 37])
    expect(encode(['8c', 'Ks', 'Td'])).toStrictEqual([7, 22, 51])
    expect(encode(['Qh', 'Ad', '5h'])).toStrictEqual([13, 30, 37])
  })
})
