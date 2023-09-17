import {ScaleFormatter} from '../src/ScaleFormatter'
import {IntervalPattern} from '../src/IntervalPattern'
import {ScalesCode} from '../src/ScalesCode'

const formatter = new ScaleFormatter()

test('Convert to ScalesCodes', () => {
  expect(formatter.toScaleCode(IntervalPattern.mayor)).toBe(ScalesCode.mayor)
  expect(formatter.toScaleCode(IntervalPattern.pentatonic)).toBe(ScalesCode.mayorPentatonic)
})

test('Convert to IntervalPattern', () => {
  expect(formatter.toIntervalPattern(ScalesCode.mayor)).toStrictEqual(IntervalPattern.mayor)
  expect(formatter.toIntervalPattern(ScalesCode.mayorPentatonic)).toStrictEqual(IntervalPattern.pentatonic)
})

