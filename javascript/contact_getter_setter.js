const Contact = {
    _:{name: "sunny", number: 9999999999},
    get name() {
        return this._.name;
    },
    set name(str){
        
        if(typeof(str) == 'string' && str.length < 20){
            this._.name = str;
        }
        else{
            console.log("wrong input");
        }
        
    },


    get number() {
        return this._.number;
    },
    set number(num) {
        let numStr = num.toString()

        if(typeof num === 'number' && numStr.length === 10 && (numStr.startsWith('9') || numStr.startsWith('8') || numStr.startsWith('7')))
            this._.number = num;
        else
            console.log("wrong input");
    }
}


console.log(Contact.name);

console.log(Contact.number);


/***
 * 1. Add a setter for name with following validation
 *     i. it should be a string
 *     ii. it should not exceed 20 character. 
 * 
 * 2. Add a setter for number with following validation
 *     i. it should be a number
 *     ii. it should be exactly 10 digits. 
 *     iii. it should start with 7 , 8 or 9
 * 
 */

Contact.name = "Neetish Raj"
console.log(Contact.name); // Neetish Raj

Contact.name = 1234; // wrong input



Contact.number = 9876543210
console.log(Contact.number) // 9876543210

Contact.number = 8876543210
console.log(Contact.number) // 8876543210

Contact.number = 7876543210
console.log(Contact.number) // 7876543210


Contact.number = '9876543210' //wrong input
Contact.number = 6876543210  // wrong input
Contact.number = 987654321 // wrong input


