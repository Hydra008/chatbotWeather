'use strict';
const patterns = require("../pattern");
const xRegexP = require("xregexp");

let createEntities = (input,pattern) =>{
    return xRegexP.exec(input,xRegexP(pattern));
}

//matchPattern receives an input as well as callback function to app.js
//if input is mapped to intent then it calls callback function with the intent
let matchPattern  = (input,callback_func) => {
    let getResults = patterns.find(item =>{
    //xRegexp.test matches the input with each pattern
    if(xRegexP.test(input,xRegexP(item.pattern, "i"))) {
        return true;
    }
    });
    if(getResults) {
        return callback_func ({
            intent : getResults.intent,
            entities: createEntities(input,getResults.pattern)
        });
    }else {
        return callback_func ({});
    }
}
 module.exports = matchPattern;