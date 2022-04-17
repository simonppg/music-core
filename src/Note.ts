import SciName from "./SciName";

export default class Note {
  private aSciName: SciName
  private A4 = 440.00

  constructor(note: string = 'A4') {
    this.aSciName = new SciName(note)
  }

  sciName(): string {
    return this.aSciName.sciName()
  }

  name(): string {
    return this.aSciName.simpleName()
  }

  frequency(): string {
    const a4 = new SciName('A4')
    const semiToneDistance = a4.semiToneDistance(this.aSciName)
    const frequency = this.A4 * Math.pow(2, semiToneDistance / 12)
    return frequency.toFixed(2)
  }

  isSameOctave(note: Note): boolean {
    return this.aSciName.isSameOctave(note.aSciName)
  }
}
