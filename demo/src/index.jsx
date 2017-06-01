import React from 'react'
import { render } from 'react-dom'
import Timeline from 'react-timelines'

import './scss/index.scss'

render(
  <Timeline
    scale={{
      start: new Date('2018-01-01'),
      end: new Date('2019-01-01'),
      zoom: 3
    }}
    timebar={[
      {
        id: 'row-id',
        title: 'Title',
        cells: [
          {
            id: 'cell-1',
            title: 'Cell 1',
            start: new Date('2018-01-01'),
            end: new Date('2018-03-01')
          },
          {
            id: 'cell-2',
            title: 'Cell 2',
            start: new Date('2018-03-01'),
            end: new Date('2018-06-01')
          },
          {
            id: 'cell-3',
            title: 'Cell 3',
            start: new Date('2018-06-01'),
            end: new Date('2018-09-01')
          },
          {
            id: 'cell-4',
            title: 'Cell 4',
            start: new Date('2018-09-01'),
            end: new Date('2019-01-01')
          }
        ],
        style: {
        }
      }
    ]}
    tracks={[
      {
        id: 'track-1',
        title: 'Track 1',
        elements: []
      },
      {
        id: 'track-2',
        title: 'Track 2',
        elements: []
      }
    ]}
  />,
  document.getElementById('demo')
)

