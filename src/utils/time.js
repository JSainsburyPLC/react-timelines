const create = ({ start, end, scale }) => {
  const MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000

  const duration = end - start
  const days = duration / MILLIS_IN_A_DAY
  const timelineWidth = days * scale

  const toX = (input) => {
    const value = (input - start) / duration
    return value * timelineWidth
  }

  return {
    timelineWidth,
    start,
    end,
    scale,
    toX
  }
}

export default create
