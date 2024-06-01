import {Accidental} from './Accidental'

export type NoteDTO = {
    name: string; // The name of the note (e.g., "C", "D", "E", etc.)
    accidental: Accidental; // The accidental of the note (e.g., "#" or "b")
    octave?: number; // The octave of the note (e.g., 4, 5, 6, etc.)
};
