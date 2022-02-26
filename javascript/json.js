// JSON : JavaScript Object Notation
/**
 * In JSON We only need to know the 3 things
 * 
 * 1. JSON format and supported data types
 * 2. JSON.stringify() method to convert object to JSON strings
 * 3. JSON.parse() method to parse JSON string back to JS object. 
 * 
 */

const data = {
    result1: 1000,
    result2: 2345,
    name: "John  doe",
    contacts: [
        "Neetish",
        "Rahghu",
        "Maddy"
    ],
    func: () => {
        console.log("function type is not supported in JSON")
    }
};

//JSON.stringify()

const data_json = JSON.stringify(data, null, 4);

console.log(data_json);

// `{
//     "result1":1000,
//     "result2":2345,
//     "name":"John  doe"
// }`



/**
 * 
 * Supported data types in JSON
 * 
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Array
 * 5. Object
 * 6. null
 */



// NOw to convert the JSON strig back to JS object we use JSON.parse()

const back_to_js_object = JSON.parse(data_json);

console.log(back_to_js_object);
console.log(back_to_js_object.contacts);