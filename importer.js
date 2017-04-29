/**
 * An importer function which can be used with node-sass.
 * It ensures that multiple import statements in sass/scss files get only imported once.
 */

const readFile = require('fs').readFile;

module.exports = (function () {
    // storage of already imported files
    const $imports = [];

    /*
        If file was already imported, return an empty string.
        Otherwise return the filename to node-sass to let it be imported.
     */
    return function (url, prev, done) {
        if ($imports.indexOf(url) < 0) {
            $imports.push(url);

            return {
                file: url
            };
        }

        return {
            contents: ''
        };
    };
}());