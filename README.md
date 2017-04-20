# React Timeline [![CircleCI](https://circleci.com/gh/JSainsburyPLC/react-timeline.svg?style=svg&circle-token=2ee544b1d8344e0c95f9633d712afd31b0edc293)](https://circleci.com/gh/JSainsburyPLC/react-timeline)

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
