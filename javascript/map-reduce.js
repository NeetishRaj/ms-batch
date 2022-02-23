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

// Extract  all the employee names from  Employees array and join them together 
// i. using normal for loop
// ii. using map-reduce  function
// Expected output: "neetish raj, vivek raj, ......."

function get_names_using_for_loop(employees) {
    let names = '';

    for (let i = 0; i < employees.length; i++) {
        names += employees[i].name + ', ';
    }

    return names;
}

//console.log(get_names_using_for_loop(Employees));


function get_names_using_map_reduce(employees) {

    const names_array = employees.map((item) => {
        return item.name;
    })

    const result = names_array.reduce((acc, item) => {
        return acc + item + ', ';
    }, '')

    return result;
}

function get_names_using_map_reduce_shorter(employees) {

    return employees
        .map((item) => item.name)
        .reduce((acc, item) =>  acc + item + ', ', '')
}




console.log(get_names_using_map_reduce(Employees));





let age = Employees.reduce((acc, item) => acc + item.age, 0);

console.log(age);


// Return the sum of all Employees ages using map-reduce.


