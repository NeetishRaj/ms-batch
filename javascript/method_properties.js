// Method properties in objects


// const obj = {
//     fullname: "John Doe",
//     func: function() {
//         console.log(`Hi ${this.fullname}`)
//     }
// }

// obj.func();

// Now just rewrite the same thing using method property syntax

const obj = {
    fullname: "John Doe",
    func() {
        console.log(`Hi ${this.fullname}`)
    }
}

obj.func();

// this is just a convenience over the tradition way of creating object methods.