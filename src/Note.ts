export class Note {
  private noteName: string
  private aOctave: number
  private isSharp: boolean
  private DIATONIC_NOTES = 7
  private CHROMATIC_NOTES = 12
  private A4 = 440.00

  constructor(note: string = 'A4') {
    const length = note.length
    if(length < 2 || length > 3)
      throw new Error('InvalidArgumentException')

    this.noteName = note.charAt(0)
    if(this.noteName < 'A' || this.noteName > 'G')
      throw new Error('InvalidArgumentException')

    const numberIndex = length === 2 ? 1 : 2

    this.aOctave = parseInt(note.charAt(numberIndex))
    this.isSharp = length === 3
  }

  sciName(): string {
    if(this.isSharp)
      return this.noteName +"#"+ this.aOctave
    return this.noteName + this.aOctave
  }

  name(): string {
    if(this.isSharp)
      return this.noteName +"#"
    return this.noteName
  }

  frequency(): string {
    const a4 = new Note('A4')
    const semiToneDistance = a4.semiToneDistance(this)
    const frequency = this.A4 * Math.pow(2, semiToneDistance / 12)
    return frequency.toFixed(2)
  }

  isSameOctave(note: Note): boolean {
    return this.octave() === note.octave()
  }

  octave(): number {
    return this.aOctave
  }

  diatonicPosition(): number {
    return ((this.alphabeticPosition() + 4) % this.DIATONIC_NOTES) + 1
  }

  alphabeticPosition() {
    const cAsciiCode = 'A'.charCodeAt(0)
    const noteAsciiCode = this.noteName.charCodeAt(0)
    return (noteAsciiCode % cAsciiCode) + 1
  }

  chromaticPosition(): number {
    const diatonicPosition = this.diatonicPosition()
    const addSharp = this.isSharp ? 1 : 0
    const passingEnote = diatonicPosition >= 4 ? 1 : 0
    return 2 * diatonicPosition + addSharp - 1 - passingEnote
  }

  semiToneDistance(note: Note): number {
    const chromaticDistance = note.chromaticPosition() - this.chromaticPosition()
    const octaveDistance = note.octave() - this.octave() 
    return  chromaticDistance + octaveDistance * this.CHROMATIC_NOTES
  }

}
