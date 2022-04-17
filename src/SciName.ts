export default class SciName {
  private noteName: string
  private aOctave: number
  private isSharp: boolean
  private DIATONIC_NOTES = 7
  private CHROMATIC_NOTES = 12

  constructor(sciName: string = 'A4') {
    if(!sciName)
      throw new Error('InvalidArgumentException')

    const length = sciName.length
    if(length < 2 || length > 3)
      throw new Error('InvalidArgumentException')

    this.noteName = sciName.charAt(0).toUpperCase()

    const numberIndex = length === 2 ? 1 : 2

    this.aOctave = parseInt(sciName.charAt(numberIndex))
    this.isSharp = length === 3
  }

  getNoteName(){
    return this.noteName
  }

  simpleName(): string {
    if(this.isSharp)
      return this.noteName +"#"
    return this.noteName
  }

  sciName(): string {
    if(this.isSharp)
      return this.noteName +"#"+ this.aOctave
    return this.noteName + this.aOctave
  }

  octave(): number {
    return this.aOctave
  }

  isSameOctave(d0: SciName): boolean {
    return this.octave() === d0.octave()
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

  semiToneDistance(sciName: SciName): number {
    const chromaticDistance = sciName.chromaticPosition() - this.chromaticPosition()
    const octaveDistance = sciName.octave() - this.octave() 
    return  chromaticDistance + octaveDistance * this.CHROMATIC_NOTES
  }
}
