//Iterating (forEach, map, filter, every, some, reduce)

// Iterating methods loop over the items of the array performing some operation

const Employees = [
    {
        name: "neetish raj",
        age: 28,
        department: 'Engineering',
        sex: "male",
        location: "ahmedabad"
    },
    {
        name: "vivek raj",
        age: 28,
        department: 'Engineering',
        sex: "male",
        location: "ahmedabad"
    },
    {
        name: "Sneha raj",
        age: 38,
        department: 'Finance',
        sex: "female",
        location: "Bengaluru"
    },
    {
        name: "Sachin tendulkar",
        age: 48,
        department: 'sports',
        sex: "male",
        location: "Mumbai"
    },
    {
        name: "Ramesh",
        age: 61,
        department: 'Engineering',
        sex: "male",
        location: "Goa"
    },
    {
        name: "Rashmi Kumari",
        age: 18,
        department: 'Engineering',
        sex: "female",
        location: "Bengaluru"
    }
]

// forEach()
// it's a simplified loop method for arrays

// For example: Loop over the Employees array and print the name, age, dept, and location.
Employees.forEach((employee, index, array) => {
    console.log(`${index + 1}. ${employee.name} is ${employee.age} years old, working in ${employee.department} at ${employee.location}.`);
})

// doing same thing in for loop
// for (let i = 0; i < Employees.length; i++) {
//     const employee = Employees[i];
    
//     console.log(`${i + 1}. ${employee.name} is ${employee.age} years old, working in ${employee.department} at ${employee.location}.`);
// }



// filter(): Returns a filtered array

// For example: From Employees array filter out all the employees above 30 years of age

const employees_over_30 = Employees.filter((employee, index, array) => {
    return employee.age > 30;
})
// shorter syntax
//const employees_over_30 = Employees.filter(employee => employee.age > 30);
console.log('--------Employees over 30---------');
console.log(employees_over_30);




// every(): returns true of false if ALL matching the condition

// For example: Check if all the employees are above 18

const is_all_employees_above_18 = Employees.every( employee => employee.age >= 18);

console.log(`Are all employees above 18: ${is_all_employees_above_18}`);


// some(): returns true or false for ATLEAST ONE matching the condition

// For example: Check if we have a senior citizen employee 

const is_any_senior_citizen_employee = Employees.some(employee => employee.age > 60);

console.log(`Are any employees above 60: ${is_any_senior_citizen_employee}`);


// map-reduce
// For map-reduce Let's study from the best tutorial, Very nice video Anjana Vakil during JS conf
// https://www.youtube.com/watch?v=e-5obm1G_FY