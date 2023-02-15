const _ = require("lodash");

function getType(value) {
    if (_.isNumber(value)) {
        console.log(value + " is a number");
    } else if (_.isBoolean(value)) {
        console.log(value + " is a boolean");
    } else if (_.isString(value)) {
        console.log(JSON.stringify(value) + " is a string");
    } else if (_.isArray(value)) {
        console.log(JSON.stringify(value) + "is an array");
    } else if (_.isObject(value)) {
        console.log(JSON.stringify(value) + "is a object");
    } else {
        console.log("Unknown data type");
    }
}

module.exports = getType;