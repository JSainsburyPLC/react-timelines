const MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000

interface Options {
  start: Date
  end: Date
  zoom: number
  viewportWidth?: number
  minWidth?: number
}

interface Time {
  timelineWidth: number
  timelineWidthStyle: string
  start: Date
  end: Date
  zoom: number
  toX: (date: Date) => number
  toStyleLeft: (date: Date) => { left: string }
  toStyleLeftAndWidth: (from: Date, to: Date) => { left: string; width: string }
  fromX: (x: number) => Date
}

const create = ({ start, end, zoom, viewportWidth = 0, minWidth = 0 }: Options): Time => {
  const duration = end.getTime() - start.getTime()

  const days = duration / MILLIS_IN_A_DAY
  const daysZoomWidth = days * zoom

  let timelineWidth: number

  if (daysZoomWidth > viewportWidth) {
    timelineWidth = daysZoomWidth
  } else {
    timelineWidth = viewportWidth
  }

  if (timelineWidth < minWidth) {
    timelineWidth = minWidth
  }

  const timelineWidthStyle = `${timelineWidth}px`

  const toX = (from: Date) => {
    const value = (from.getTime() - start.getTime()) / duration
    return Math.round(value * timelineWidth)
  }

  const toStyleLeft = (from: Date) => ({
    left: `${toX(from)}px`,
  })

  const toStyleLeftAndWidth = (from: Date, to: Date) => {
    const left = toX(from)
    return {
      left: `${left}px`,
      width: `${toX(to) - left}px`,
    }
  }

  const fromX = (x: number) => new Date(start.getTime() + (x / timelineWidth) * duration)

  return {
    timelineWidth,
    timelineWidthStyle,
    start,
    end,
    zoom,
    toX,
    toStyleLeft,
    toStyleLeftAndWidth,
    fromX,
  }
}

export default create
export { Time }
