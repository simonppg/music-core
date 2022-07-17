# Music core

Music theory components

## Features

- Note: A model of a musical note like (A<sub>4</sub> 440.00 Hz)

## Note

* `name` returns the note name
* `frequency` returns the frequency of the note
* `sciName` returns note name and the octave
* `octave` returns the number of the octave

```typescript
const aSharp = new Note('A#4')
aSharp.frequency() // -> '466.16'
aSharp.name() // -> 'A#'
aSharp.sciName() // -> 'A#4'
aSharp.octave() // -> 4
```
