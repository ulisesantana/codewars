import { xo } from './solution'

describe('xo', function () {
  it('Basic Tests', function () {
    expect(xo('xo')).toBeTruthy()
    expect(xo('xxOo')).toBeTruthy()
    expect(xo('xxxm')).toBeFalsy()
    expect(xo('Oo')).toBeFalsy()
    expect(xo('ooom')).toBeFalsy()
  })
})
