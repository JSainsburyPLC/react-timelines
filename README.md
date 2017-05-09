# React Timelines [![CircleCI](https://circleci.com/gh/JSainsburyPLC/react-timelines.svg?style=svg)](https://circleci.com/gh/JSainsburyPLC/react-timelines)

## Install

Install with Yarn:
```js
yarn add react-timelines
```

NPM:
```js
npm install react-timelines
```

## Use

Use the component:

```js
import Timeline from 'react-timelines'

const MyWidget = () => <Timeline {...props} />

export default MyWidget
```

## Styling

**Using Webpack**

Using Webpack with CSS loader, add the following:
```js
import 'react-timelines/lib/css/style.css';
```

**Using Sass (SCSS)**

Using Sass you can configure the timeline with variables:
```scss
$react-timelines-font-family: MaryAnn;
$react-timelines-sidebar-width: 320px;

@import 'node_modules/react-timelines/src/scss/style';
```

**Without build tools**

Create a CSS file with the contents of `react-timelines/lib/css/style.css` and include it in `<head>`

## Development

```
yarn
```

Then:
```
yarn watch
```
