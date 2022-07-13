import {Scale} from '../src/Scale'
import {Scales} from '../src/Scales'
import {Degree} from '../src/Degree'

test('Mayor scale', ()=>{
  const scales = [
    [
      ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      ['D', 'E', 'F', 'G', 'A', 'B', 'C'],
      ['E', 'F', 'G', 'A', 'B', 'C', 'D'],
      ['F', 'G', 'A', 'B', 'C', 'D', 'E'],
      ['G', 'A', 'B', 'C', 'D', 'E', 'F'],
      ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      ['B', 'C', 'D', 'E', 'F', 'G', 'A'],
      ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    ]
  ]

  scales.forEach(item => {
    const ionian = item[0]
    const dorian = item[1]
    const phrygian = item[2]
    const lydian = item[3]
    const mixolydian = item[4]
    const aeolian = item[5]
    const locria = item[6]
    const scale = new Scale('C', Scales.mayor)

    expect(scale.ionian()).toStrictEqual(ionian)
    expect(scale.dorian()).toStrictEqual(dorian)
    expect(scale.phrygian()).toStrictEqual(phrygian)
    expect(scale.lydian()).toStrictEqual(lydian)
    expect(scale.mixolydian()).toStrictEqual(mixolydian)
    expect(scale.aeolian()).toStrictEqual(aeolian)
    expect(scale.locria()).toStrictEqual(locria)

    expect(scale.I()).toStrictEqual(ionian)
    expect(scale.II()).toStrictEqual(dorian)
    expect(scale.III()).toStrictEqual(phrygian)
    expect(scale.IV()).toStrictEqual(lydian)
    expect(scale.V()).toStrictEqual(mixolydian)
    expect(scale.VI()).toStrictEqual(aeolian)
    expect(scale.VII()).toStrictEqual(locria)
  });

})

test('Mayor scale degrees', ()=>{
  const scale = new Scale('C', Scales.mayor)

  expect(scale.degree(Degree.I)).toStrictEqual('C')
  expect(scale.degree(Degree.II)).toStrictEqual('D')
  expect(scale.degree(Degree.III)).toStrictEqual('E')
  expect(scale.degree(Degree.IV)).toStrictEqual('F')
  expect(scale.degree(Degree.V)).toStrictEqual('G')
  expect(scale.degree(Degree.VI)).toStrictEqual('A')
  expect(scale.degree(Degree.VII)).toStrictEqual('B')
  expect(scale.degree(Degree.VIII)).toStrictEqual('C')
  expect(scale.degree(Degree.IX)).toStrictEqual('D')
  expect(scale.degree(Degree.X)).toStrictEqual('E')
  expect(scale.degree(Degree.XI)).toStrictEqual('F')
  expect(scale.degree(Degree.XII)).toStrictEqual('G')
  expect(scale.degree(Degree.XIII)).toStrictEqual('A')
})
