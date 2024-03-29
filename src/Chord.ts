import {Scale} from './Scale'
import {IntervalPattern} from './IntervalPattern'
import {Math} from './Math'
import {Note} from './Note'

export class Chord {
  private intervalFormula: readonly string[]
  private majorScale: Scale

  constructor (note: string, intervalFormula: readonly string[]) {
    this.majorScale = new Scale(note, IntervalPattern.mayor)
    this.intervalFormula = intervalFormula
  }

  notes (): string[] {
    const math = new Math()
    return this.intervalFormula.reduce((chord, item)=>{
      const degree = math.extractDegree(item)
      const alterationShift = math.extractAlterationShift(item)
      const note = this.majorScale.degree(degree)
      const finalNote = new Note(note+'0').shift(alterationShift).name()

      chord.push(finalNote)
      return chord
    }, [] as string[])

  }
}
