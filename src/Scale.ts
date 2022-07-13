import {Note} from "./Note"

export class Scale {
  private tonic: Note
  private scale: readonly number[]

  constructor(tonic: string, scale: readonly number[]) {
    this.tonic = new Note(tonic+"0")
    this.scale = scale
  }

  degree(degree: number): string {
    const scale = this.generateScale(this.tonic, this.scale)
    let index = degree - 1

    index = index % scale.length

    return scale[index]
  }

  mode(mode: number): string[] {
    let scale = this.generateScale(this.tonic, this.scale)

    scale = this.shiftBy(scale, mode - 1)

    return scale
  }

  // TODO: move this to Math
  private shiftBy(arr: any[], sliceOn: number) {
    let len = arr.length;
    sliceOn = sliceOn % len;
    let leftSection = arr.slice(0, sliceOn);
    let rightSection = arr.slice(sliceOn, len);

    return [...rightSection, ...leftSection];
  }

  private generateScale(tonic: Note, scaleCode: readonly number[]) {
    const steps = Array.from(scaleCode)
    let currentNote = tonic
    const scale: string[] = []

    steps.forEach(step => {
      scale.push(currentNote.name())
      currentNote = currentNote.shift(step)
    })

    return scale
  }

}
