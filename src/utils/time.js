const create = ({ start, end, zoom }) => {
  const MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000

  const duration = end - start
  const days = duration / MILLIS_IN_A_DAY
  const timelineWidth = days * zoom

  const toX = (from) => {
    const value = (from - start) / duration
    return value * timelineWidth
  }

  const toStyleLeft = from => ({
    left: `${toX(from)}px`
  })

  const toStyleLeftAndWidth = (from, to) => {
    const left = toX(from)
    return {
      left: `${left}px`,
      width: `${toX(to) - left}px`
    }
  }

  const fromX = x =>
    new Date(start.getTime() + ((x / timelineWidth) * duration))

  return {
    timelineWidth,
    start,
    end,
    zoom,
    toX,
    toStyleLeft,
    toStyleLeftAndWidth,
    fromX
  }
}

export default create
