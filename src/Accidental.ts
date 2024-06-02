export class Accidental {
    private type: AccidentalType

    constructor(accidentalString: string) {
        switch (accidentalString) {
            case "#":
                this.type = AccidentalType.SHARP;
                break
            case "b":
                this.type = AccidentalType.FLAT;
                break
            default:
                this.type = AccidentalType.NATURAL;
        }
    }

    toString(): string {
        switch (this.type) {
            case AccidentalType.SHARP:
                return '#'
            case AccidentalType.FLAT:
                return 'b'
            default:
                return ''
        }  
    }

    isSharp() {
        return this.type === AccidentalType.SHARP
    }

    isFlat() {
        return this.type === AccidentalType.FLAT
    }
    
    isNatural() {
        return this.type === AccidentalType.NATURAL
    }
}

enum AccidentalType {
    NATURAL = "",
    SHARP = "#",
    FLAT = "b"
}