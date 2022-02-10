// Store and  print info on three employees
// Name, Age, Department, Sex, Location
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
    }
]

for (let i = 0; i < Employees.length; i++) {
    const empoyee_object = Employees[i]
    const emmployee_name = empoyee_object.name;

    console.log(`${emmployee_name} is working in ${Employees[i].department}`);
}

