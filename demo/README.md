# JavaScript boilerplate (Webpack 4, React, Babel, Airbnb ESLint)

## Install

Swap out `APP_NAME` for your project name (you will still need to manually update the `package.json` name after install):

```
curl -L https://github.com/WebSeed/js-boilerplate/archive/master.zip | tar zx 
mv js-boilerplate-master APP_NAME && cd APP_NAME
yarn
```

Then:
```
yarn start
```

See `package.json` scripts for full list of commands.

## Dependencies

CLI (requires NPM 5+ for `npx`):

```
yarn add webpack webpack-cli webpack-dev-server --dev
yarn add babel-core babel-loader babel-preset-env babel-preset-react babel-eslint --dev
yarn add babel-plugin-transform-object-rest-spread babel-plugin-transform-class-properties --dev
yarn add html-webpack-plugin --dev
yarn add mini-css-extract-plugin css-loader file-loader --dev
yarn add react react-dom prop-types

npx install-peerdeps --dev eslint-config-airbnb
```
