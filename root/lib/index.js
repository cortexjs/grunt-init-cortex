
// Opt in to strict mode of JavaScript, [ref](http://is.gd/3Bg9QR)
// Use this statement, you can stay away from several frequent mistakes 
'use strict';

// Modules your wanna use
// # Syntax: `require(module_identifier)`

// Before you `require('ajax')`, you should exec `ctx install ajax --save first`
var lang = require('ajax');

// `exports` is the API of the current module
exports.my_method = function() {
    return 1;
};