import {Scale} from './Scale'
import {Scales} from './Scales'

export class Chord {
  private intervalFormula: readonly number[]
  private majorScale: Scale

  constructor (note: string, intervalFormula: number[]) {
    this.majorScale = new Scale(note, Scales.mayor)
    this.intervalFormula = intervalFormula
  }

  notes (): string[] {
    return this.intervalFormula.reduce((chord, steps)=>{
      const note = this.majorScale.degree(steps)

      chord.push(note)
      return chord
    }, [])

  }
}
