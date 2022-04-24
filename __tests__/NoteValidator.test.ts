import {NoteValidator} from "../src/NoteValidator";

test('Valid notes', () => {
  const validator = new NoteValidator()
  const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

  notes.forEach((note: string) => {
    expect(validator.isValid(note)).toBe(true)
  })
})

test('Invalid notes', () => {
  const validator = new NoteValidator()

  expect(validator.isValid(String.fromCharCode(1 - 'A'.charCodeAt(0)))).toBe(false)
  expect(validator.isValid(String.fromCharCode(1 + 'G'.charCodeAt(0)))).toBe(false)
})
