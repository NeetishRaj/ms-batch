/**
 * Grade O: Grade = 5
 * Grade A: Grade = 4
 * Grade B: Grade = 3
 * Grade C: Grade = 2
 * Grade D: Grade = 1
 * Grade F: Grade = 0
 */

// function get_grades(grade) {
//     if(grade === 5) 
//         return 'O';
//     else if(grade === 4)
//         return  'A'
//     else if(grade === 3)
//         return  'B'
//     else if(grade === 2)
//         return  'C'
//     else if(grade === 1)
//         return  'D'
//     else
//         return  'F'
// }

// console.log(get_grades(5));
// console.log(get_grades(3));
// console.log(get_grades(0));

// Let's re-write using switch block

function get_grades(grade) {

    switch(grade) {
        case 5: return 'O';
        case 4: return 'A';
        case 3: return 'B';
        case 2: return 'C';
        case 1: return 'D';
        case 0: return 'F';
        default: return 'Invalid'
    }
}

console.log(get_grades(5));
console.log(get_grades(3));
console.log(get_grades(0));

console.log(get_grades(10));
