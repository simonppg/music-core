import {Frequency} from "./Frequency"
import {Math} from "./Math"
import {NoteValidator} from "./NoteValidator"

export class Note {
  private noteName: string
  private aOctave: number
  private isSharp: boolean
  private static DIATONIC_NOTES = 7
  private static CHROMATIC_NOTES = 12
  private static A4 = '440.00'
  private static noteValidator = new NoteValidator()
  private static NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

  constructor(note: string = 'A4') {
    const length = note.length
    if(length < 2 || length > 3)
      throw new Error('InvalidArgumentException')

    this.noteName = note.charAt(0)
    if(!Note.noteValidator.isValid(this.noteName))
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
    const semiTones = a4.distance(this)
    const frequency = new Frequency(Note.A4)
    return frequency.shift(semiTones).frequency()
  }

  isSameOctave(note: Note): boolean {
    return this.octave() === note.octave()
  }

  octave(): number {
    return this.aOctave
  }

  diatonicPosition(): number {
    return ((this.alphabeticPosition() + 4) % Note.DIATONIC_NOTES) + 1
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

  distance(note: Note): number {
    const chromaticDistance = note.chromaticPosition() - this.chromaticPosition()
    const octaveDistance = note.octave() - this.octave() 
    return  chromaticDistance + octaveDistance * Note.CHROMATIC_NOTES
  }

  shift(semiTones: number) : Note {
    const math = new Math()
    let cPos = this.chromaticPosition()

    let newPos = cPos

    if(semiTones < 0) {
      newPos = this.negativeShift(cPos, semiTones)
    }
    else {
      newPos = math.shift(Note.NOTES.length, cPos, semiTones)
    }

    const note = this.fromCromaticPosition(newPos)
    return new Note(note+0)
  }

  private negativeShift(cPos: number, semiTones: number){
    const math = new Math()
    const len = Note.NOTES.length
    cPos = len - cPos + 1
    semiTones = semiTones * -1

    let newPos = math.shift(len, cPos, semiTones)

    newPos = len - newPos + 1

    return newPos
  }
  
  private fromCromaticPosition(pos: number): string{
    return Note.NOTES[pos-1]
  }
}
