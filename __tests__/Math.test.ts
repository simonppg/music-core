import {Math} from '../src/Math'

test('Valid notes', () => {
  const math = new Math()
  const positions = [
    // len, initialPos, jumps, expectPos
    [3, 1, 0, 1],
    [3, 1, 1, 2],
    [3, 1, 2, 3],
    [3, 1, 3, 1],
    [3, 1, -1, 3],
    [3, 1, -2, 2],
    [3, 1, -3, 1],

    [3, 3, 0, 3],
    [3, 3, 1, 1],
    [3, 3, 2, 2],
    [3, 3, 3, 3],
    [3, 3, -1, 2],
    [3, 3, -2, 1],
    [3, 3, -3, 3],
  ]

  positions.forEach((item: number[]) => {
    const len = item[0]
    const initialPos = item[1]
    const jumps = item[2]
    const expectPos = item[3]

    expect(math.shift(len, initialPos, jumps)).toBe(expectPos)
  })
})
