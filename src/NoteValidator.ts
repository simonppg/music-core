export class NoteValidator {
  isValid(note: string): boolean {
    if(note < 'A' || note > 'G')
      return false
    return true
  }
}
