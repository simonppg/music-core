# Music core

Music theory components

## Features

* Note: A model of a musical note like (A<sub>4</sub> 440.00 Hz)
* Scale: A model of musical scale like (C Major scale C, D, E, F, G, A, B)

## Note

* `name` returns the note name
* `frequency` returns the frequency of the note
* `sciName` returns note name and the octave
* `octave` returns the number of the octave
* `isSameOctave` returns true if two notes are in the same octave

```typescript
const aSharp = new Note('A#4')
aSharp.frequency() // -> '466.16'
aSharp.name() // -> 'A#'
aSharp.sciName() // -> 'A#4'
aSharp.octave() // -> 4
const d4 = new Note('D4')
const d3 = new Note('D3')
aSharp.isSameOctave(d4) // -> true
aSharp.isSameOctave(d3) // -> false
```
## Scale

* `degree` can provide notes on the scale by its corresponding degree
* `mode` gives you an array with all the notes in that mode

```typescript
const cMayorScale = new Scale('C', Scales.mayor);
cMayorScale.degree(5); // -> 'G'
cMayorScale.mode(2); // -> [ 'D', 'E', 'F', 'G', 'A', 'B', 'C' ]
```
