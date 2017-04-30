/**
 * An importer function which can be used with node-sass.
 * It ensures that multiple import statements in sass/scss files get only imported once.
 */

'use strict';

var readFile = require('fs').readFile;
var path = require('path').basename;

module.exports = (function () {
    // storage of already imported files
    var $imports = [];

    // If file was already imported, return an empty string.
    // Otherwise return the filename to node-sass to let it be imported.
    return function (url) {
        // use only the filename because relative paths are hard to handle
        // since we don't know, where the original file was
        var filename = basename(url);

        if ($imports.indexOf(filename) < 0) {
            $imports.push(filename);

            return {
                file: url
            };
        }

        return {
            contents: ''
        };
    };
}());