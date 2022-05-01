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
  dorian(): any {
    return ['D', 'E', 'F', 'G', 'A', 'B', 'C']
  }
  phrygian(): any {
    return ['E', 'F', 'G', 'A', 'B', 'C', 'D']
  }
  lydian(): any {
    return ['F', 'G', 'A', 'B', 'C', 'D', 'E']
  }
  mixolydian(): any {
    return ['G', 'A', 'B', 'C', 'D', 'E', 'F']
  }
  aeolian(): any {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  }
  locria(): any {
    return ['B', 'C', 'D', 'E', 'F', 'G', 'A']
  }

  I(): any {
    return ['C', 'D', 'E', 'F', 'G', 'A', 'B']
  }
  II(): any {
    return ['D', 'E', 'F', 'G', 'A', 'B', 'C']
  }
  III(): any {
    return ['E', 'F', 'G', 'A', 'B', 'C', 'D']
  }
  IV(): any {
    return ['F', 'G', 'A', 'B', 'C', 'D', 'E']
  }
  V(): any {
    return ['G', 'A', 'B', 'C', 'D', 'E', 'F']
  }
  VI(): any {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  }
  VII(): any {
    return ['B', 'C', 'D', 'E', 'F', 'G', 'A']
  }
}
