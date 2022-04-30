import {Frequency} from '../src/Frequency'

test('Default frequency is A4 440.00', ()=>{
  expect(new Frequency().frequency()).toBe('440.00')
})

test('Shift frequency', ()=> {
  const precision = 0.01
  const A4 = new Frequency('440.00')

  const frequencies = [
    [-12, '220.00'],
    [-11, '233.08'],
    [-10, '246.94'],
    [-9, '261.63'],
    [-8, '277.18'],
    [-7, '293.66'],
    [-6, '311.13'],
    [-5, '329.63'],
    [-4, '349.23'],
    [-3, '369.99'],
    [-2, '392.00'],
    [-1, '415.30'],
    [0, '440.00'],

    [1, '466.16'],
    [2, '493.88'],
    [3, '523.25'],
    [4, '554.37'],
    [5, '587.33'],
    [6, '622.25'],
    [7, '659.26'],
    [8, '698.46'],
    [9, '739.99'],
    [10, '783.99'],
    [11, '830.61'],
    [12, '880.00'],

    // Edge cases
    [-48, '27.50'],
    [48, '7040.00'],
  ]

  frequencies.forEach(item => {
    const semiTones = item[0] as number
    const freq = item[1] as string
    const inverseSemiTone = semiTones === 0 ? 0 : semiTones * -1

    const f2 = new Frequency(freq)

    expectedClose(A4.shift(semiTones).frequency(), f2.frequency(), precision)
    expect(A4.distance(f2)).toBe(inverseSemiTone)

    expectedClose(f2.shift(semiTones * -1).frequency(), A4.frequency(), precision)
    expect(f2.distance(A4)).toBe(semiTones)
  })
})


function expectedClose(val1: string, val2: string, precision: number) {
  const val1f = parseFloat(val1)
  const val2f = parseFloat(val2)
  
  // TODO(Simon Puente): Move this to a Math class
  const isClose = Math.abs(val1f - val2f) < Math.pow(10, -precision) / 2
  if(!isClose)
    console.log({
      val1, val2
    });
    
  expect(isClose).toBe(true)
}

