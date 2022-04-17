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
