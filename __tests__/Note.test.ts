import {Note} from "../src/Note";

test('InvalidArgumentException', () => {
  const t1 = () => {
    new Note('A#45')
  }

  expect(t1).toThrow(new Error('InvalidArgumentException'))

  const t2 = () => {
    new Note('H0')
  }

  expect(t2).toThrow(new Error('InvalidArgumentException'))
})

test('Default note is A 440 Hz', () => {
  const note = new Note();
  expect(note.frequency()).toBe('440.00')
  expect(note.name()).toBe('A')
  expect(note.sciName()).toBe('A4')
  expect(note.octave()).toBe(4)
})

test('Can create sharp notes', () => {
  const note = new Note('A#4')

  expect(note.frequency()).toBe('466.16')
  expect(note.name()).toBe('A#')
  expect(note.sciName()).toBe('A#4')
  expect(note.octave()).toBe(4)
})

test('Can create C2 note', () => {
  const note = new Note('C2')

  expect(note.frequency()).toBe('65.41')
  expect(note.name()).toBe('C')
  expect(note.sciName()).toBe('C2')
  expect(note.octave()).toBe(2)
})

test('Can create C#2 note', () => {
  const note = new Note('C#2')

  expect(note.frequency()).toBe('69.30')
  expect(note.name()).toBe('C#')
  expect(note.sciName()).toBe('C#2')
  expect(note.octave()).toBe(2)
})

test('C0 and D0 are in the same octave', () => {
  const c0 = new Note('C0')
  const d0 = new Note('D0')

  expect(c0.isSameOctave(d0)).toBe(true)
})

test('C0 and D8 are NOT in the same octave', () => {
  const c0 = new Note('C0')
  const d8 = new Note('D8')

  expect(c0.isSameOctave(d8)).toBe(false)
})

test('C0 and D4 are NOT in the same octave', () => {
  const c0 = new Note('C0')
  const d4 = new Note('D4')

  expect(c0.isSameOctave(d4)).toBe(false)
})

test('Octaves frequency', () => {
  const notes = [
    ['A0' ,'27.50'],
    ['A1' ,'55.00'],
    ['A2' ,'110.00'],
    ['A3' ,'220.00'],
    ['A4' ,'440.00'],
    ['A5' ,'880.00'],
    ['A6' ,'1760.00'],
    ['A7' ,'3520.00'],
    ['A8' ,'7040.00'],

    ['B0', '30.87'],
    ['B1', '61.74'],
    ['B2', '123.47'],
    ['B3', '246.94'],
    ['B4', '493.88'],
    ['B5', '987.77'],
    ['B6', '1975.53'],
    ['B7', '3951.07'],
    ['B8', '7902.13'],
  ]

  notes.forEach(item => {
    const sciName = item[0];
    const frequency = item[1];
    const note = new Note(sciName);

    expect(note.sciName()).toBe(sciName)
    expect(note.frequency()).toBe(frequency)
  })

})

test('Alphabetical position of two octaves', () => {
  const noteNumbers = [
    ['A0', 1],
    ['B0', 2],
    ['C0', 3],
    ['D0', 4],
    ['E0', 5],
    ['F0', 6],
    ['G0', 7],

    ['A1', 1],
    ['B1', 2],
    ['C1', 3],
    ['D1', 4],
    ['E1', 5],
    ['F1', 6],
    ['G1', 7],
  ]

  noteNumbers.forEach(item => {
    const sciName = new Note(item[0])

    expect(sciName.alphabeticPosition()).toBe(item[1])
  })
})

test('Diatonic position of two octaves', () => {
  const noteNumbers = [
    ['C0', 1],
    ['D0', 2],
    ['E0', 3],
    ['F0', 4],
    ['G0', 5],
    ['A0', 6],
    ['B0', 7],

    ['C1', 1],
    ['D1', 2],
    ['E1', 3],
    ['F1', 4],
    ['G1', 5],
    ['A1', 6],
    ['B1', 7],
  ]

  noteNumbers.forEach(item => {
    const sciName = new Note(item[0])

    expect(sciName.diatonicPosition()).toBe(item[1])
  })

})

test('Chromatic position of two octave', () => {
  const noteNumbers = [
    ['C0', 1],
    ['C#0', 2],
    ['D0', 3],
    ['D#0', 4],
    ['E0', 5],
    ['F0', 6],
    ['F#0', 7],
    ['G0', 8],
    ['G#0', 9],
    ['A0', 10],
    ['A#0', 11],
    ['B0', 12],

    ['C1', 1],
    ['C#1', 2],
    ['D1', 3],
    ['D#1', 4],
    ['E1', 5],
    ['F1', 6],
    ['F#1', 7],
    ['G1', 8],
    ['G#1', 9],
    ['A1', 10],
    ['A#1', 11],
    ['B1', 12],
  ]

  noteNumbers.forEach(item => {
    const sciName = new Note(item[0])

    expect(sciName.chromaticPosition()).toBe(item[1])
  })

})

test('Calculate distance in semi-tones', () => {
  const notes = [
    ['A3', -12],
    ['A#3', -11],
    ['B3', -10],

    ['C4', -9],
    ['C#4', -8],
    ['D4', -7],
    ['D#4', -6],
    ['E4', -5],
    ['F4', -4],
    ['F#4', -3],
    ['G4', -2],
    ['G#4', -1],
    ['A4', 0],
    ['A#4', 1],
    ['B4', 2],

    ['C5', 3],
    ['C#5', 4],
    ['D5', 5],

    // Edge cases
    ['A0', -48],
    ['A8', 48],
  ]

  notes.forEach((item) => {
    const a4 = new Note('A4')
    const note = new Note(item[0])

    expect(a4.distance(note)).toBe(item[1])
  })

})

test('Shift notes', ()=>{
  const shifts = [
    // Edge cases
    [-25, 'B1'],
    [-13, 'B2'],

    [-12, 'C3'],
    [-11, 'C#3'],
    [-10, 'D3'],
    [-9, 'D#3'],
    [-8, 'E3'],
    [-7, 'F3'],
    [-6, 'F#3'],
    [-5, 'G3'],
    [-4, 'G#3'],
    [-3, 'A3'],
    [-2, 'A#3'],
    [-1, 'B3'],

    [1, 'C#4'],
    [2, 'D4'],
    [3, 'D#4'],
    [4, 'E4'],
    [5, 'F4'],
    [6, 'F#4'],
    [7, 'G4'],
    [8, 'G#4'],
    [9, 'A4'],
    [10, 'A#4'],
    [11, 'B4'],

    // Edge cases
    [12, 'C5'],
    [24, 'C6'],
  ]

  shifts.forEach(shift =>{
    const c = new Note('C4')
    const note = new Note(shift[1] as string)

    expect(c.shift(shift[0] as number).name()).toBe(note.name())
  })
})

