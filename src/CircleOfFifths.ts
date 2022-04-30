import {Note} from "./Note";

export class CircleOfFifths {
  nextFifth(note: string): string {
    return new Note(note).shift(7).sciName()
  }
}
