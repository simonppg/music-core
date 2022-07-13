import {Scales} from "./Scales"
import {Note} from "./Note"

export class Scale {
  private tonic: Note
  private scale: Scales

  private mayor = [2, 2, 1, 2, 2, 2, 1]

  constructor(tonic: string, scale: Scales) {
    this.tonic = new Note(tonic+"0")
    this.scale = scale
  }

  ionian(): string[] {
    const steps = Array.from(this.mayor)
    let currentNote = this.tonic
    const mode: string[] = []

    steps.forEach(step => {
      mode.push(currentNote.name())
      currentNote = currentNote.shift(step)
    })

    return mode
  }

  dorian(): string[] {
    const mode = this.ionian()
    mode.push(mode.shift())
    return mode
  }

  phrygian(): string[] {
    const mode = this.dorian()
    mode.push(mode.shift())
    return mode
  }

  lydian(): string[] {
    const mode = this.phrygian()
    mode.push(mode.shift())
    return mode
  }

  mixolydian(): string[] {
    const mode = this.lydian()
    mode.push(mode.shift())
    return mode
  }

  aeolian(): string[] {
    const mode = this.mixolydian()
    mode.push(mode.shift())
    return mode
  }

  locria(): string[] {
    const mode = this.aeolian()
    mode.push(mode.shift())
    return mode
  }

  I(): string[] {
    return this.ionian();
  }

  II(): string[] {
    return this.dorian();
  }

  III(): string[] {
    return this.phrygian();
  }

  IV(): string[] {
    return this.lydian();
  }

  V(): string[] {
    return this.mixolydian();
  }

  VI(): string[] {
    return this.aeolian();
  }

  VII(): string[] {
    return this.locria();
  }
}
