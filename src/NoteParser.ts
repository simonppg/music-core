import {NoteDTO} from "./NoteDTO";

export class NoteParser {
    parseNote(noteString: string): NoteDTO {
        // Regular expression to match note strings with optional accidental and octave
        const regex = /^([A-G])([#b]?)(\d*)$/;
    
        // Execute the regular expression on the input string
        const match = regex.exec(noteString);
    
        // If there's no match, throw an error
        if (!match) {
            throw new Error("InvalidArgumentException");
        }
    
        // Extract components from the matched groups
        const name = match[1];
        const accidental = match[2] || undefined; // Accidental may be empty
        const octave = match[3] ? parseInt(match[3], 10) : 0; // Parse octave if present, otherwise set to 0
    
        // Create and return the NoteDTO object
        return {
            name,
            accidental,
            octave
        };
    }  
}