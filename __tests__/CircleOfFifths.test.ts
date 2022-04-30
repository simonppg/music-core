import {CircleOfFifths} from '../src/CircleOfFifths'

test('', () => {
  const cof = new CircleOfFifths()
  const fifths = [
    ['C', 'G'],
    ['G', 'D'],
    ['D', 'A'],
    ['A', 'E'],
    ['E', 'B'],
    ['B', 'F#'],
    ['F#', 'C#'],
    // ['C#', 'Ab'],
    // ['Ab', 'Eb'],
    // ['Eb', 'Bb'],
    // ['Bb', 'F'],
    // ['F', 'C'],
  ]

  fifths.forEach(notes => {
    expect(cof.nextFifth(notes[0])).toBe(notes[1])
  })
})
