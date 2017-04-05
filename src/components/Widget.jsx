import React from 'react'

const Widget = () => (
  <div className="gantt">
    <div className="gantt__sidebar">
      <div className="sidebar">
        <div className="sidebar__header">
          <div className="timebar-key">Timebar key 1</div>
          <div className="timebar-key">Timebar key 2</div>
          <div className="timebar-key">Timebar key 3</div>
        </div>
        <div className="sidebar__body">
          <div className="track-key">
            Track key 1
          </div>
          <div className="track-key">
            Track key 2
          </div>
        </div>
      </div>
    </div>
    <div className="gantt__timeline">
      <div className="timeline">
        <div className="timeline__header">
          <div className="timebar">
            <div className="timebar__row">Timebar row 1</div>
            <div className="timebar__row">Timebar row 2</div>
            <div className="timebar__row">Timebar row 3</div>
          </div>
        </div>
        <div className="timeline__body">
          <div className="track">
            <div className="track__entry" style={{ left: '100px' }}>
              <div className="entry">Entry 1</div>
            </div>
            <div className="track__entry" style={{ left: '800px' }}>
              <div className="entry">Entry 2</div>
            </div>
          </div>
          <div className="track">
            <div className="track__entry" style={{ left: '100px' }}>
              <div className="entry">Entry 3</div>
            </div>
            <div className="track__entry" style={{ left: '400px' }}>
              <div className="entry">Entry 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Widget
