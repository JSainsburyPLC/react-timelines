# React Timeline [![CircleCI](https://circleci.com/gh/JSainsburyPLC/react-timeline/tree/master.svg?style=svg&circle-token=4f0efded939ab55a2947df92fdf33ac613edca18)](https://circleci.com/gh/JSainsburyPLC/react-timeline/tree/master)

## Install

Manually add as a dependency in your `package.json`:

```json
{
  "dependencies": {
    "react-timeline": "git@github.com:JSainsburyPLC/react-timeline.git"
  }
}
```

Use the React component and bring in styling:

```js
import Timeline from 'react-timeline'
import 'react-timeline/lib/css/style.css'

const MyWidget = () => <Timeline />

export default MyWidget
```

## Development

```
yarn
```

Then:
```
yarn watch
```
