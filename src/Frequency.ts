export class Frequency {
  private aFrequency: string

  constructor(frequency: string = '440.00'){
    this.aFrequency = frequency
  }

  shift(semiTones: number): Frequency {
    const baseFrequency = parseFloat(this.aFrequency)
    const frequency = this.shiftFrequency(baseFrequency, semiTones)
    return new Frequency(frequency.toFixed(2))
  }

  private shiftFrequency(frequency: number, semiTones: number): number {
    return frequency * Math.pow(2, semiTones / 12)
  }

  frequency(): string {
    return this.aFrequency
  }

  distance(frequency: Frequency): number {
    const f1 = parseFloat(frequency.frequency())
    const f2 = parseFloat(this.aFrequency)
    const distance = (12 * (Math.log2(f2 / f1)))  / Math.log2(2)
    return Math.round(distance)
  }
}
