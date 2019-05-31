import {
  MAX_ELEMENT_GAP,
  MAX_MONTH_SPAN,
  MAX_NUM_OF_SUBTRACKS,
  MAX_TRACK_START_GAP,
  MIN_MONTH_SPAN,
  MONTH_NAMES,
  MONTHS_PER_QUARTER,
  MONTHS_PER_YEAR,
  NUM_OF_MONTHS,
  NUM_OF_YEARS,
  QUARTERS_PER_YEAR,
  START_YEAR,
} from './constants'

import { addMonthsToYear, addMonthsToYearAsDate, colourIsLight, fill, hexToRgb, nextColor, randomTitle } from './utils'

export const buildQuarterCells = () => {
  const v = []
  for (let i = 0; i < QUARTERS_PER_YEAR * NUM_OF_YEARS; i += 1) {
    const quarter = (i % 4) + 1
    const startMonth = i * MONTHS_PER_QUARTER
    const s = addMonthsToYear(START_YEAR, startMonth)
    const e = addMonthsToYear(START_YEAR, startMonth + MONTHS_PER_QUARTER)
    v.push({
      id: `${s.year}-q${quarter}`,
      title: `Q${quarter} ${s.year}`,
      start: new Date(`${s.year}-${s.month}-01`),
      end: new Date(`${e.year}-${e.month}-01`),
    })
  }
  return v
}

export const buildMonthCells = () => {
  const v = []
  for (let i = 0; i < MONTHS_PER_YEAR * NUM_OF_YEARS; i += 1) {
    const startMonth = i
    const start = addMonthsToYearAsDate(START_YEAR, startMonth)
    const end = addMonthsToYearAsDate(START_YEAR, startMonth + 1)
    v.push({
      start,
      end,
      id: `m${startMonth}`,
      title: MONTH_NAMES[i % 12],
    })
  }
  return v
}

export const buildTimebar = () => [
  {
    id: 'quarters',
    title: 'Quarters',
    cells: buildQuarterCells(),
    style: {},
  },
  {
    id: 'months',
    title: 'Months',
    cells: buildMonthCells(),
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
