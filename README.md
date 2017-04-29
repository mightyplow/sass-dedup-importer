# sass-dedup-importer

An importer function which can be used with node-sass.
It ensures that multiple import statements in sass/scss files get only imported once.

## Installation

```
    npm i -D @mightyplow/sass-dedup-importer
```

### Usage
#### cli
```
node-sass --importer node_modules/@mightyplow/sass-dedup-importer/importer.js ...
```

#### node

In node you can just pass the importer function to the node-sass options. To use the importer in your build tool please
read its documentation on how to pass options to node-sass.

```
const sass = require('node-sass');
const importer = require('@mightyplow/sass-dedup-importer');
 
sass.render({
    ...
    importer: importer
    ...
```