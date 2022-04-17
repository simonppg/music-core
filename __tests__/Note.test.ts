import Note from "../src/Note";

test('Default note is A 440 Hz', () => {
  const note = new Note();
  expect(note.frequency()).toBe('440.00')
  expect(note.name()).toBe('A')
  expect(note.sciName()).toBe('A4')
  expect(note.simpleName()).toBe('A')
  expect(note.octave()).toBe(4)
})

test('Can create sharp notes', () => {
  const note = new Note('A#4')

  expect(note.frequency()).toBe('466.16')
  expect(note.name()).toBe('A#')
  expect(note.sciName()).toBe('A#4')
  expect(note.simpleName()).toBe('A#')
  expect(note.octave()).toBe(4)
})

test('Can create C2 note', () => {
  const note = new Note('C2')

  expect(note.frequency()).toBe('65.41')
  expect(note.name()).toBe('C')
  expect(note.sciName()).toBe('C2')
  expect(note.simpleName()).toBe('C')
  expect(note.octave()).toBe(2)
})

test('Can create C#2 note', () => {
  const note = new Note('C#2')

  expect(note.frequency()).toBe('69.30')
  expect(note.name()).toBe('C#')
  expect(note.sciName()).toBe('C#2')
  expect(note.simpleName()).toBe('C#')
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
    const sciName = new Note(item[0])

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
    const sciName = new Note(item[0])

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
    const sciName = new Note(item[0])

    expect(sciName.chromaticPosition()).toBe(item[1])
  })

})
