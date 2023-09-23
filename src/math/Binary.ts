export class Binary {
  toDecimal(res: string): number {
    return parseInt(res, 2)
  }

  toBinary(decimalNumber: number) {
    return decimalNumber.toString(2);
  }
}
