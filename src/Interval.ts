export class Interval {
  private prefix = 'Major'

  constructor(private octaves: number) {}

  interval() {
    return this.octaves + ' octaves' + this.prefix + ' seventh'
  }

}


// TODO: create intervals 
// TODO: create chords using intervals not scales
// TODO: change chords from ['I', 'III', 'V'] to '1-3-5', '1-b3-5' or '1-3-#5'
