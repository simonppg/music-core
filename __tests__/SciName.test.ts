import SciName from '../src/SciName'

test('Default note scientifi name is A4', () => {
  const note = new SciName()

  expect(note.sciName()).toBe('A4')
  expect(note.simpleName()).toBe('A')
  expect(note.octave()).toBe(4)
})

test('Can create sharp notes', () => {
  const note = new SciName('A#4')

  expect(note.sciName()).toBe('A#4')
  expect(note.simpleName()).toBe('A#')
  expect(note.octave()).toBe(4)
})

test('Can create C2 note', () => {
  const note = new SciName('C2')

  expect(note.sciName()).toBe('C2')
  expect(note.simpleName()).toBe('C')
  expect(note.octave()).toBe(2)
})

test('Can create C#2 note', () => {
  const note = new SciName('C#2')

  expect(note.sciName()).toBe('C#2')
  expect(note.simpleName()).toBe('C#')
  expect(note.octave()).toBe(2)
})

test('C0 and D0 are in the same octave', () => {
  const c0 = new SciName('C0')
  const d0 = new SciName('D0')

  expect(c0.isSameOctave(d0)).toBe(true)
})

test('C0 and D4 are NOT in the same octave', () => {
  const c0 = new SciName('C0')
  const d4 = new SciName('D4')

  expect(c0.isSameOctave(d4)).toBe(false)
})

test('Alphabetical position of two octaves', () => {
  const noteNumbers = [
    ['a0', 1],
    ['b0', 2],
    ['c0', 3],
    ['d0', 4],
    ['e0', 5],
    ['f0', 6],
    ['g0', 7],

    ['a1', 1],
    ['b1', 2],
    ['c1', 3],
    ['d1', 4],
    ['e1', 5],
    ['f1', 6],
    ['g1', 7],
  ]

  noteNumbers.forEach(item => {
    const sciName = new SciName(item[0])

    expect(sciName.alphabeticPosition()).toBe(item[1])
  })

})

test('Diatonic position of two octaves', () => {
  const noteNumbers = [
    ['c0', 1],
    ['d0', 2],
    ['e0', 3],
    ['f0', 4],
    ['g0', 5],
    ['a0', 6],
    ['b0', 7],

    ['c1', 1],
    ['d1', 2],
    ['e1', 3],
    ['f1', 4],
    ['g1', 5],
    ['a1', 6],
    ['b1', 7],
  ]

  noteNumbers.forEach(item => {
    const sciName = new SciName(item[0])

    expect(sciName.diatonicPosition()).toBe(item[1])
  })

})

test('Chromatic position of two octave', () => {
  const noteNumbers = [
    ['c0', 1],
    ['c#0', 2],
    ['d0', 3],
    ['d#0', 4],
    ['e0', 5],
    ['f0', 6],
    ['f#0', 7],
    ['g0', 8],
    ['g#0', 9],
    ['a0', 10],
    ['a#0', 11],
    ['b0', 12],

    ['c1', 1],
    ['c#1', 2],
    ['d1', 3],
    ['d#1', 4],
    ['e1', 5],
    ['f1', 6],
    ['f#1', 7],
    ['g1', 8],
    ['g#1', 9],
    ['a1', 10],
    ['a#1', 11],
    ['b1', 12],
  ]

  noteNumbers.forEach(item => {
    const sciName = new SciName(item[0])

    expect(sciName.chromaticPosition()).toBe(item[1])
  })

})

test('Calculate distance in semi-tones', () => {
  const notes = [
    ['a3', -12],
    ['a#3', -11],
    ['b3', -10],

    ['c4', -9],
    ['c#4', -8],
    ['d4', -7],
    ['d#4', -6],
    ['e4', -5],
    ['f4', -4],
    ['f#4', -3],
    ['g4', -2],
    ['g#4', -1],
    ['a4', 0],
    ['a#4', 1],
    ['b4', 2],

    ['c5', 3],
    ['c#5', 4],
    ['d5', 5],
  ]

  notes.forEach((item) => {
    const a4 = new SciName('A4')
    const note = new SciName(item[0])

    expect(a4.semiToneDistance(note)).toBe(item[1])
  })

})

