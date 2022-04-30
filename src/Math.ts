export class Math {
  shift(len: number, initialPos: number, jumps: number): number {
    if(jumps < 0)
      return this.negativeShift(len, initialPos, jumps)

    return this.positiveShift(len, initialPos, jumps)
  }

  private negativeShift(len: number, cPos: number, semiTones: number): number {
    cPos = len - cPos + 1
    semiTones = semiTones * -1

    let newPos = this.positiveShift(len, cPos, semiTones)

    newPos = len - newPos + 1

    return newPos
  }
  
  private positiveShift(len: number, initialPos: number, jumps: number): number {
    let finalPos = (initialPos + jumps) % len 

    if(finalPos === 0)
      return len

    return finalPos
  }

}
