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

  extractDegree (value: string): number {
    const splited = value.split(" ")

    let res = 1

    switch(splited[0]) {
      case 'I': res = 1; break;
      case 'II': res = 2; break;
      case 'III': res = 3; break;
      case 'IV': res = 4; break;
      case 'V': res = 5; break;
    }

    return res
  }

  extractAlterationShift (value: string): number {
    const splited = value.split(" ")
    const alteration = splited[1]

    if(this.isBemol(alteration))
      return -1
    if(this.isSharp(alteration))
      return 1

    return 0
  }

  private isBemol(alteration: string) {
    return 'b' === alteration
  }

  private isSharp(alteration: string) {
    return '#' === alteration
  }
}

