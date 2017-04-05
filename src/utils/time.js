import frac from './frac'

const MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000

export const toTimelineWidth = (time) => {
  const { start, end, scale } = time
  const days = (end - start) / MILLIS_IN_A_DAY
  const width = days * scale
  return width
}

export const toX = (time, input) => {
  const { start, end, scale } = time
  const width = toTimelineWidth({ start, end, scale })
  const value = frac(start, end, input)
  const x = value * width
  return x
}
