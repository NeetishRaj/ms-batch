/**
 * In JSON we aonly need to know about 3 things.
 * 
 * 
 * 1. Data types and syntax of JSON
 * 
 * 
 * 2. JSON.stringify()
 * used when sending data
 * 
 * 
 * 3. JSON.parse()
 * used when receiving data
 */

 const obj = {
    fullname: "john doe",
    age: 29
}

const obj_in_json_format = `{
    "fullname": "john doe",
    "age": 29
}`

// which data types are supported in JSON?
// string, number, boolean, object, array and null



const data = {
    str: "string",
    number: 99,
    boolval: true,
    obj: {
        prop: 'val'
    },
    arr: [1 , 2, 3],
    nullval: null,
    func: function() {
        console.log("this is a func");
    }
}

const data_in_JSON = JSON.stringify(data, null, 4);
console.log(data_in_JSON);


const data_back_to_obj = JSON.parse(data_in_JSON);

console.log(data_back_to_obj.obj.prop); //val