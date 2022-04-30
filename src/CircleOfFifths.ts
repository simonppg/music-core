import {Note} from "./Note";

export class CircleOfFifths {
  nextFifth(note: string): string {
    const sciName = note + '0';
    return new Note(sciName).shift(7).name()
  }
}
