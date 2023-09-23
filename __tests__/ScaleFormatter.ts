import {ScaleFormatter} from '../src/ScaleFormatter'
import {IntervalPattern} from '../src/IntervalPattern'
import {ScalesCode} from '../src/ScalesCode'

const formatter = new ScaleFormatter()

test('Convert to ScalesCodes', () => {
  expect(formatter.toScaleCode(IntervalPattern.mayor)).toBe(ScalesCode.mayor)
  expect(formatter.toScaleCode(IntervalPattern.pentatonic)).toBe(ScalesCode.mayorPentatonic)

  expect(formatter.toScaleCode(IntervalPattern.ionian)).toBe(ScalesCode.ionian)
  expect(formatter.toScaleCode(IntervalPattern.aeolian)).toBe(ScalesCode.aeolian)
  expect(formatter.toScaleCode(IntervalPattern.dorian)).toBe(ScalesCode.dorian)
  expect(formatter.toScaleCode(IntervalPattern.phrygian)).toBe(ScalesCode.phrygian)
  expect(formatter.toScaleCode(IntervalPattern.lydian)).toBe(ScalesCode.lydian)
  expect(formatter.toScaleCode(IntervalPattern.mixolydian)).toBe(ScalesCode.mixolydian)
  expect(formatter.toScaleCode(IntervalPattern.locrian)).toBe(ScalesCode.locrian)
})

test('Convert to IntervalPattern', () => {
  expect(formatter.toIntervalPattern(ScalesCode.mayor)).toStrictEqual(IntervalPattern.mayor)
  expect(formatter.toIntervalPattern(ScalesCode.mayorPentatonic)).toStrictEqual(IntervalPattern.pentatonic)

  expect(formatter.toIntervalPattern(ScalesCode.ionian)).toStrictEqual(IntervalPattern.ionian)
  expect(formatter.toIntervalPattern(ScalesCode.aeolian)).toStrictEqual(IntervalPattern.aeolian)
  expect(formatter.toIntervalPattern(ScalesCode.dorian)).toStrictEqual(IntervalPattern.dorian)
  expect(formatter.toIntervalPattern(ScalesCode.phrygian)).toStrictEqual(IntervalPattern.phrygian)
  expect(formatter.toIntervalPattern(ScalesCode.lydian)).toStrictEqual(IntervalPattern.lydian)
  expect(formatter.toIntervalPattern(ScalesCode.mixolydian)).toStrictEqual(IntervalPattern.mixolydian)
  expect(formatter.toIntervalPattern(ScalesCode.locrian)).toStrictEqual(IntervalPattern.locrian)
})

