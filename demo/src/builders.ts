import Moment from 'moment'
import { extendMoment } from 'moment-range'

import {
  MAX_ELEMENT_GAP,
  MAX_MONTH_SPAN,
  MAX_NUM_OF_SUBTRACKS,
  MAX_TRACK_START_GAP,
  MIN_MONTH_SPAN,
  NUM_OF_MONTHS,
  START_YEAR,
} from './constants'

import { addMonthsToYearAsDate, colourIsLight, fill, hexToRgb, nextColor, randomTitle } from './utils'

const moment = extendMoment(Moment as any)

export const buildTimebar = (start: Date, end: Date) => [
  {
    id: 'years',
    title: 'Years',
    cells: Array.from(moment.range(start, end).by('year')).map(year => ({
      id: year.toISOString(),
      start: year.startOf('year').toDate(),
      end: year.endOf('year').toDate(),
      title: year.format('YYYY'),
    })),
    style: {},
  },
  {
    id: 'months',
    title: 'Months',
    cells: Array.from(moment.range(start, end).by('month')).map(month => ({
      id: month.toISOString(),
      start: month.startOf('month').toDate(),
      end: month.endOf('month').toDate(),
      title: month.format('MMM'),
    })),
    useAsGrid: true,
    style: {},
  },
]

export const buildElement = ({ trackId, start, end, i }: { trackId: string; start: Date; end: Date; i: number }) => {
  const bgColor = nextColor()
  const [r, g, b] = hexToRgb(bgColor)
  const color = colourIsLight(r, g, b) ? '#000000' : '#ffffff'
  return {
    start,
    end,
    id: `t-${trackId}-el-${i}`,
    title: randomTitle(),
    style: {
      color,
      backgroundColor: `#${bgColor}`,
      borderRadius: '4px',
      boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
      textTransform: 'capitalize',
    },
  }
}

export const buildTrackStartGap = () => Math.floor(Math.random() * MAX_TRACK_START_GAP)
export const buildElementGap = () => Math.floor(Math.random() * MAX_ELEMENT_GAP)

export const buildElements = (trackId: string) => {
  const v = []
  let i = 1
  let month = buildTrackStartGap()

  while (month < NUM_OF_MONTHS) {
    let monthSpan = Math.floor(Math.random() * (MAX_MONTH_SPAN - (MIN_MONTH_SPAN - 1))) + MIN_MONTH_SPAN

    if (month + monthSpan > NUM_OF_MONTHS) {
      monthSpan = NUM_OF_MONTHS - month
    }

    const start = addMonthsToYearAsDate(START_YEAR, month)
    const end = addMonthsToYearAsDate(START_YEAR, month + monthSpan)
    v.push(
      buildElement({
        trackId,
        start,
        end,
        i,
      })
    )
    const gap = buildElementGap()
    month += monthSpan + gap
    i += 1
  }

  return v
}

export const buildSubtrack = (trackId: string, subtrackId: string) => ({
  elements: buildElements(subtrackId),
  id: `track-${trackId}-${subtrackId}`,
  title: `Subtrack ${subtrackId}`,
})

export const buildTrack = (trackId: string) => {
  const tracks = fill(Math.floor(Math.random() * MAX_NUM_OF_SUBTRACKS) + 1).map(i => buildSubtrack(trackId, `${i + 1}`))
  return {
    tracks,
    elements: buildElements(trackId),
    id: `track-${trackId}`,
    title: `Track ${trackId}`,
    // hasButton: true,
    // link: 'www.google.com',
    isOpen: false,
  }
}
