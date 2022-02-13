// currying of functions


function add(num1) {
    // only num1 is accessible
    return function (num2) {
        // only num1 & num2 are accessible

        return function(num3) {
            // num1, num2 and num3 are accessible

            return function(num4) {
                // num1, num2 num3 and num4 are accessible

                return num1 + num2 + num3 + num4;
            }
        }
    }
}

const function1 = add(10);
const function2 = function1(20);
const function3 = function2(30);
const val = function3(40);


// One liner for above 4 lines by invking the functions directly
const val = add(10)(20)(30)(40);

console.log(val);