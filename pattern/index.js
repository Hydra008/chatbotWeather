// patternDictionary consists an array of patterns with mapped intents
const patternDictionary = [{
    pattern : "\\b(Hi|Hello|hey|ola)\\b",
    intent:"Hello"
},{
    pattern:"b(bye|exit|goodbye|cya)\\b",
    intent:"Exit"
}];


module.exports = patternDictionary;