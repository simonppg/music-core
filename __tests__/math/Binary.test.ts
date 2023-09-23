import {Binary} from '../../src/math/Binary'

test('Decimal to Binary', () => {
  const binary = new Binary()
  expect(binary.toBinary(1)).toBe('1')
  expect(binary.toBinary(2)).toBe('10')
  expect(binary.toBinary(3)).toBe('11')
  expect(binary.toBinary(4)).toBe('100')
  expect(binary.toBinary(4)).toBe('100')
  expect(binary.toBinary(2741)).toBe('101010110101')
})

