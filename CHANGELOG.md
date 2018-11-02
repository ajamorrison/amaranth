# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2018-11-02 > Major Update

Significant progress and changes to the way the application
functions.

### Electron Switch

I've dropped the dependency from Electron to save space, we're
now just going to use the users browser and run a classic
web server from Node. The server is functioning in this 
release, but it doesn't *do* anything yet.

I've updated the README with my reasoning

### Server Side Rendering

Added support for server side rendering in React, super excited
about learning more about it.

### Added

- [Express](https://expressjs.com/) Support
- [Webpack](https://webpack.js.org/) Support and configuration.
- Additional design documents.
- Resources folder
- Implimented basic server and runtime processes. 

### Changed

- Changed the default view to work better with react 
prrendering.
- Updated README.

### Removed

- Electron support.

### Priorities going forward from this release:

The next biggest steps are as follows:

- Fully implement a state object so that requests can
hand back pages according to that state.
- Handle data ingest on the server side.

Next step is to be able to call up views of documents based
on basic search input from the side bar.

## [0.0.3] - 2018-09-26

Started working with JSON data from a temp folder. Added some basic wireframing in 
Adobe Experience Designer, to be worked with later.

Will print out the title of a simple working document to the screen.

### Added
- 
- Wireframe base file.
- Parsing of basic file, non-arbitrary file container.
- Data Folder to hold basic data to work with.

### Changed 

- Modified README.
- NoConsole rule in TSLint set to false.
- App.tsx.


## [0.0.2] - 2018-09-19

Added node libraries to the repo and tested for basic functionality. 
Starting point where we can start fleshing out the architecture from.

### Added
- [React](https://reactjs.org/) rendering support.
- [ANTD](https://ant.design/) support.
- [Typescript](https://www.typescriptlang.org/) support.
- License
- Readme
- Placeholder app template.
- TSLinting and TSConfig.
- NPM project index.
- Basic project structural outline in STRUCTURE.



## [0.0.1] - 2018-09-14

First commit, added repository.

