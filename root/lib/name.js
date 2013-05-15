

// module your wanna use
var lang = require('lang');


exports.isStringOrNumber = function(subject) {
    return lang.isString(subject) || lang.isNumber(subject);
};