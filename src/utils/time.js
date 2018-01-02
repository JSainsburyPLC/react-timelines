const MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000

const create = ({
  start,
  end,
  zoom,
  timelineViewportWidth = 0
}) => {
  const duration = end - start

  // console.log('timelineViewportWidth', timelineViewportWidth)

  const days = duration / MILLIS_IN_A_DAY
  const timelineWidth = days * zoom
  const timelineWidthStyle = `${timelineWidth}px`


  // const timelineWidthStyle = '100%'

  // const toXPercent = (from) => {
  //   const value = (from - start) / duration
  //   return value * 100
  // }

  const toXPixels = (from) => {
    const value = (from - start) / duration
    return Math.round(value * timelineWidth)
  }

  // const toStyleLeftPercent = from => ({
  //   left: `${toXPercent(from)}%`
  // })

  const toStyleLeftPixels = from => ({
    left: `${toXPixels(from)}px`
  })

  // const toStyleLeftAndWidthPercent = (from, to) => {
  //   const left = toXPercent(from)
  //   return {
  //     left: `${left}%`,
  //     width: `${toXPercent(to) - left}%`
  //   }
  // }

  const toStyleLeftAndWidthPixels = (from, to) => {
    const left = toXPixels(from)
    return {
      left: `${left}px`,
      width: `${toXPixels(to) - left}px`
    }
  }

  const toX = toXPixels
  const toStyleLeft = toStyleLeftPixels
  const toStyleLeftAndWidth = toStyleLeftAndWidthPixels

  const fromX = x =>
    new Date(start.getTime() + ((x / timelineWidth) * duration))

  // const fromX = x =>
  //   new Date(start.getTime() + ((x / timelineWidth) * duration))

  return {
    timelineWidth,
    timelineWidthStyle,
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
