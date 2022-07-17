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

test('Extract degree', ()=>{
  const math = new Math()

  expect(math.extractDegree('I')).toStrictEqual(1)
  expect(math.extractDegree('II')).toStrictEqual(2)
  expect(math.extractDegree('III')).toStrictEqual(3)
  expect(math.extractDegree('IV')).toStrictEqual(4)
  expect(math.extractDegree('V')).toStrictEqual(5)

  expect(math.extractDegree('I b')).toStrictEqual(1)
  expect(math.extractDegree('II #')).toStrictEqual(2)
  expect(math.extractDegree('III b')).toStrictEqual(3)
  expect(math.extractDegree('IV #')).toStrictEqual(4)
  expect(math.extractDegree('V b')).toStrictEqual(5)
})

test('Extract degree', ()=>{
  const math = new Math()

  expect(math.extractAlterationShift('I b')).toStrictEqual(-1)
  expect(math.extractAlterationShift('II')).toStrictEqual(0)
  expect(math.extractAlterationShift('III b')).toStrictEqual(-1)
  expect(math.extractAlterationShift('IV #')).toStrictEqual(1)
  expect(math.extractAlterationShift('V #')).toStrictEqual(1)
})
