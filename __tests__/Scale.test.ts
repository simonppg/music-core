import {Scale} from '../src/Scale'
import {Scales} from '../src/Scales'
import {Degrees} from '../src/Degrees'
import {Modes} from '../src/Modes'

test('C Mayor scale degrees and modes', ()=>{

  const scale = new Scale('C', Scales.mayor)

  expect(scale.degree(Degrees.I)).toStrictEqual('C')
  expect(scale.degree(Degrees.II)).toStrictEqual('D')
  expect(scale.degree(Degrees.III)).toStrictEqual('E')
  expect(scale.degree(Degrees.IV)).toStrictEqual('F')
  expect(scale.degree(Degrees.V)).toStrictEqual('G')
  expect(scale.degree(Degrees.VI)).toStrictEqual('A')
  expect(scale.degree(Degrees.VII)).toStrictEqual('B')
  expect(scale.degree(Degrees.VIII)).toStrictEqual('C')
  expect(scale.degree(Degrees.IX)).toStrictEqual('D')
  expect(scale.degree(Degrees.X)).toStrictEqual('E')
  expect(scale.degree(Degrees.XI)).toStrictEqual('F')
  expect(scale.degree(Degrees.XII)).toStrictEqual('G')
  expect(scale.degree(Degrees.XIII)).toStrictEqual('A')

  expect(scale.mode(Modes.I)).toStrictEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
  expect(scale.mode(Modes.II)).toStrictEqual(['D', 'E', 'F', 'G', 'A', 'B', 'C'])
  expect(scale.mode(Modes.III)).toStrictEqual(['E', 'F', 'G', 'A', 'B', 'C', 'D'])
  expect(scale.mode(Modes.IV)).toStrictEqual(['F', 'G', 'A', 'B', 'C', 'D', 'E'])
  expect(scale.mode(Modes.V)).toStrictEqual(['G', 'A', 'B', 'C', 'D', 'E', 'F'])
  expect(scale.mode(Modes.VI)).toStrictEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
  expect(scale.mode(Modes.VII)).toStrictEqual(['B', 'C', 'D', 'E', 'F', 'G', 'A'])
  expect(scale.mode(Modes.VIII)).toStrictEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
})

test('C# Mayor scale degrees and modes', ()=>{

  const scale = new Scale('C#', Scales.mayor)

  expect(scale.degree(Degrees.I)).toStrictEqual('C#')
  expect(scale.degree(Degrees.II)).toStrictEqual('D#')
  expect(scale.degree(Degrees.III)).toStrictEqual('F')
  expect(scale.degree(Degrees.IV)).toStrictEqual('F#')
  expect(scale.degree(Degrees.V)).toStrictEqual('G#')
  expect(scale.degree(Degrees.VI)).toStrictEqual('A#')
  expect(scale.degree(Degrees.VII)).toStrictEqual('C')
  expect(scale.degree(Degrees.VIII)).toStrictEqual('C#')
  expect(scale.degree(Degrees.IX)).toStrictEqual('D#')
  expect(scale.degree(Degrees.X)).toStrictEqual('F')
  expect(scale.degree(Degrees.XI)).toStrictEqual('F#')
  expect(scale.degree(Degrees.XII)).toStrictEqual('G#')
  expect(scale.degree(Degrees.XIII)).toStrictEqual('A#')

  expect(scale.mode(Modes.I)).toStrictEqual(['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'C'])
  expect(scale.mode(Modes.II)).toStrictEqual(['D#', 'F', 'F#', 'G#', 'A#', 'C', 'C#'])
  expect(scale.mode(Modes.III)).toStrictEqual(['F', 'F#', 'G#', 'A#', 'C', 'C#', 'D#'])
  expect(scale.mode(Modes.IV)).toStrictEqual(['F#', 'G#', 'A#', 'C', 'C#', 'D#', 'F'])
  expect(scale.mode(Modes.V)).toStrictEqual(['G#', 'A#', 'C', 'C#', 'D#', 'F', 'F#'])
  expect(scale.mode(Modes.VI)).toStrictEqual(['A#', 'C', 'C#', 'D#', 'F', 'F#', 'G#'])
  expect(scale.mode(Modes.VII)).toStrictEqual(['C', 'C#', 'D#', 'F', 'F#', 'G#', 'A#'])
  expect(scale.mode(Modes.VIII)).toStrictEqual(['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'C'])
})

