import {Scales} from "./Scales"

export class Scale {
  private tonic: string
  private scale: Scales

  constructor(tonic: string, scale: Scales) {
    this.tonic = tonic
    this.scale = scale
  }

  ionian(): string[] {
    return ['C', 'D', 'E', 'F', 'G', 'A', 'B']
  }
  dorian(): string[] {
    return ['D', 'E', 'F', 'G', 'A', 'B', 'C']
  }
  phrygian(): string[] {
    return ['E', 'F', 'G', 'A', 'B', 'C', 'D']
  }
  lydian(): string[] {
    return ['F', 'G', 'A', 'B', 'C', 'D', 'E']
  }
  mixolydian(): string[] {
    return ['G', 'A', 'B', 'C', 'D', 'E', 'F']
  }
  aeolian(): string[] {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  }
  locria(): string[] {
    return ['B', 'C', 'D', 'E', 'F', 'G', 'A']
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
