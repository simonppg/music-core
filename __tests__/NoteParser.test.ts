import { Accidental } from "../src/Accidental";
import {NoteParser} from "../src/NoteParser";

describe("NoteParser", () => {
    let noteParser: NoteParser;
    let NATURAL = new Accidental("")
    let FLAT = new Accidental("b")
    let SHARP = new Accidental("#")

    beforeEach(() => {
      noteParser = new NoteParser();
    });

    it("should parse valid note strings", () => {
        expect(noteParser.parseNote("C#4")).toEqual({ name: "C", accidental: SHARP, octave: 4 });
        expect(noteParser.parseNote("Db0")).toEqual({ name: "D", accidental: FLAT, octave: 0 });
    });

    it("should parse valid note strings", () => {
        // Valid note strings with different accidentals and octaves
        expect(noteParser.parseNote("C#4")).toEqual({ name: "C", accidental: SHARP, octave: 4 });
        expect(noteParser.parseNote("Db0")).toEqual({ name: "D", accidental: FLAT, octave: 0 });
        expect(noteParser.parseNote("F3")).toEqual({ name: "F", accidental: NATURAL, octave: 3 });
    });

    it("should throw an error for invalid note strings", () => {
        // Test invalid note strings
        expect(() => noteParser.parseNote("InvalidNote")).toThrowError("InvalidArgumentException");
        expect(() => noteParser.parseNote("")).toThrowError("InvalidArgumentException");
        expect(() => noteParser.parseNote("C#4#")).toThrowError("InvalidArgumentException");
        expect(() => noteParser.parseNote("#4")).toThrowError("InvalidArgumentException");
    });

    it("should parse valid note strings", () => {
        // Test valid note strings
        expect(noteParser.parseNote("C#4")).toEqual({ name: "C", accidental: SHARP, octave: 4 });
        expect(noteParser.parseNote("Db0")).toEqual({ name: "D", accidental: FLAT, octave: 0 });
        expect(noteParser.parseNote("F")).toEqual({ name: "F", accidental: NATURAL, octave: 0 });
        expect(noteParser.parseNote("F#")).toEqual({ name: "F", accidental: SHARP, octave: 0 });
        expect(noteParser.parseNote("Ab4")).toEqual({ name: "A", accidental: FLAT, octave: 4 });
    });

    it("should handle lowercase note names", () => {
        // Valid note strings with lowercase note names
        expect(noteParser.parseNote("C#4")).toEqual({ name: "C", accidental: SHARP, octave: 4 });
        expect(noteParser.parseNote("Db0")).toEqual({ name: "D", accidental: FLAT, octave: 0 });
        expect(noteParser.parseNote("F3")).toEqual({ name: "F", accidental: NATURAL, octave: 3 });
    });

    it("should handle accidental without octave", () => {
        // Valid note strings with accidentals but without octave
        expect(noteParser.parseNote("C#")).toEqual({ name: "C", accidental: SHARP, octave: 0 });
        expect(noteParser.parseNote("Db")).toEqual({ name: "D", accidental: FLAT, octave: 0 });
        expect(noteParser.parseNote("F")).toEqual({ name: "F", accidental: NATURAL, octave: 0 });
    });

    it("should handle note without accidental", () => {
        // Valid note strings without accidentals
        expect(noteParser.parseNote("C4")).toEqual({ name: "C", accidental: NATURAL, octave: 4 });
        expect(noteParser.parseNote("D0")).toEqual({ name: "D", accidental: NATURAL, octave: 0 });
        expect(noteParser.parseNote("F#3")).toEqual({ name: "F", accidental: SHARP, octave: 3 });
    });
});