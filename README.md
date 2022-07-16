# Music core

Music theory components

## Features

* Note: A model of a musical note like (A<sub>4</sub> 440.00 Hz)
* Scale: A model of musical scale like (C Major scale C, D, E, F, G, A, B)
```typescript
const cMayorScale = new Scale('C', Scales.mayor);
cMayorScale.degree(5); // -> 'G'
cMayorScale.mode(2); // -> [ 'C', 'D', 'E', 'G', 'A' ]
```
