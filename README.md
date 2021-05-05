# Cleared Shared Modules
Contains React components, lib modules, etc used in cleared projects


### Modules
* [Components](./src/components) - React components
* [Lib](./src/lib) - Utility functions
* [Config](./src/config) - Configuration files


### Installation

``` shell
npm i git+ssh://git@github.com:cleared/cleared-shared --save
# or for a specific version
npm i git+ssh://git@github.com:cleared/cleared-shared#v1.0.6 --save

```


### Setup

``` shell
npm install
```


### Use with npm link
``` shell
# clone the repo
git clone git@github.com:barryph/cleared-shared.git
# cd into the project
cd cleared-shared
# install deps
npm install
# create a npm link of this project
npm link
# cd into the portal repo
cd ../cleared-patient-portal
# use the previously created cleared-shared npm link
npm link cleared-shared
```

Make sure cleared-shared has been built
`npm run build`
<br />
or is running in dev mode for hot reloading
`npm run dev`


### Running in dev mode
```shell
# Run webpack in watch mode
npm run dev
```

### Building

```shell
# Build project
npm run build
```
