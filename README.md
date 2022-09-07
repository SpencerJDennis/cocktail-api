# Template Repo

#### A template development environment using node.js and NPM for ES6 vanilla Javascript projects.

#### By Helen Lehrer

## Technologies Used

* Node.js
* NPM
* babel/core: ^7.18.6
* babel/plugin-transform-modules-commonjs: ^7.18.6
* clean-webpack-plugin: ^4.0.0
* css-loader: ^3.6.0
* eslint-webpack-plugin: ^3.2.0
* file-loader: ^6.2.0
* html-loader: ^4.1.0
* html-webpack-plugin: ^5.5.0
* jest: ^29.0.1
* style-loader: ^1.3.0
* webpack: 5.74.0
* webpack-cli: ^4.10.0
* webpack-dev-server: 4.10.1
* bootstrap: ^5.2.0
* eslint: ^8.23.0

## Description

Module-Bundler: webpack and webpack-cli

Plugins: babel, clean-webpack, eslint-webpack-plugin, html-webpack-plugin, jest, webpack-dev-server, bootstrap, eslint

Loaders: css-loader, file-loader, html-loader, style-loader

#### Types of configuration files in this repo:

* .eslintrc: This file holds our ESLint configuration.
* .babelrc: This file holds our Babel configuration. 
* webpack.config.js: This will hold our webpack configuration, providing specific instructions on how webpack should process and bundle our source code. 

## Setup/Installation Requirements

This repo is compatible with Node v16.16.0 and npm v 8.11.0. 

The `name` and `version` of the project at the top of `package.json` must be updated to the current project name and version.


#### Enter this command into your terminal to install all dependencies: 
```bash
$ npm install
```

#### Enter this command into your terminal to build the project using webpack: 
```bash
$ npm run build
```

#### Enter this command into your terminal to start a development server: 
```bash
$ npm run start
```

#### Enter this command into your terminal to lint all JS files that are in your src folder: 
```bash
$ npm run start
```

#### Enter this command into your terminal to run tests with Jest: 
```bash
$ npm run test
```

#### You can add any additional npm packages to the repo with this command: 
```bash
$ npm install [PACKAGE-NAME]
```

## Known Bugs

*none

## License
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

&copy; _Copyright 2022 Helen Lehrer_