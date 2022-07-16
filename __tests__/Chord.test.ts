import {Chord} from '../src/Chord'
import {ChordsFormula} from '../src/ChordsFormula'

// TODO: Allow interchangable notes like F and E#
test('Major chords/triads', ()=>{
  expect(new Chord('C',ChordsFormula.mayor).notes()).toStrictEqual(['C', 'E', 'G'])
  // expect(new Chord('C#',ChordsFormula.mayor).notes()).toStrictEqual(['C#', 'E#', 'G#'])
  expect(new Chord('C#',ChordsFormula.mayor).notes()).toStrictEqual(['C#', 'F', 'G#'])
  expect(new Chord('D',ChordsFormula.mayor).notes()).toStrictEqual(['D', 'F#', 'A'])
  expect(new Chord('D#',ChordsFormula.mayor).notes()).toStrictEqual(['D#', 'G', 'A#'])
  expect(new Chord('E',ChordsFormula.mayor).notes()).toStrictEqual(['E', 'G#', 'B'])
  expect(new Chord('F',ChordsFormula.mayor).notes()).toStrictEqual(['F', 'A', 'C'])
  expect(new Chord('F#',ChordsFormula.mayor).notes()).toStrictEqual(['F#', 'A#', 'C#'])
  expect(new Chord('G',ChordsFormula.mayor).notes()).toStrictEqual(['G', 'B', 'D'])
  expect(new Chord('G#',ChordsFormula.mayor).notes()).toStrictEqual(['G#', 'C', 'D#'])
  expect(new Chord('A',ChordsFormula.mayor).notes()).toStrictEqual(['A', 'C#', 'E'])
  expect(new Chord('A#',ChordsFormula.mayor).notes()).toStrictEqual(['A#', 'D', 'F'])
  expect(new Chord('B',ChordsFormula.mayor).notes()).toStrictEqual(['B', 'D#', 'F#'])
})

