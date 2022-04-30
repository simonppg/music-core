export class Math {
  shift(len: number, initialPos: number, jumps: number): number {
    let finalPos = (initialPos + jumps) % len 

    if(finalPos === 0)
      return len

    return finalPos
  }

}
