import {Binary} from './math/Binary'

export class ScaleFormatter {
  private binary = new Binary()

  toIntervalPattern(scaleCode: number): number[] {
    let binaryValue = this.binary.toBinary(scaleCode)

    if (binaryValue.length < 12) {
      binaryValue = binaryValue.toString().padStart(12, '0')
    }

    binaryValue = binaryValue.split("").reverse().join("")

    const res: number[] = []
    let numOfIntervals = 1;
    for (let i = 0; i < binaryValue.length; i++) {
      const current = binaryValue.charAt(i)
      if (current == '1') {
        res.push(numOfIntervals)
        numOfIntervals = 1
      }
      else {
        numOfIntervals++
      }
    }

    const num = res.shift()
    if (num != undefined && num > 0)
      res.push(numOfIntervals + num - 1)

    return res
  }

  toScaleCode(intervalPattern: readonly number[]): number {
    let res = ''

    for (let i = 0; i < intervalPattern.length; i++) {
      const current = intervalPattern[i]

      const str = '1'.toString().padStart(current, '0')

      res += str
    }

    res = res.split("").reverse().join("")

    const numArray = res.split("")
    const num = numArray.shift()
    if (num != undefined)
      numArray.push(num)

    res = numArray.join("")

    return this.binary.toDecimal(res)
  }

}
