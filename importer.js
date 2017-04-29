/**
 * An importer function which can be used with node-sass.
 * It ensures that multiple import statements in sass/scss files get only imported once.
 */

'use strict';

var readFile = require('fs').readFile;

module.exports = (function () {
    // storage of already imported files
    var $imports = [];

    // If file was already imported, return an empty string.
    // Otherwise return the filename to node-sass to let it be imported.
    return function (url) {
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