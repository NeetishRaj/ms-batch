// 
/**
 * 
 * Phase 1:
 * WAP to generate a random 3x3 matrix with random integers ranging from 0 - 9
 * 
 * Example: 
 * 
 * 2  4  5
 * 0  1  9
 * 5  5  7
 * 
 * 
 * Phase 2:
 * Customize this function to take 2 arguments m & n where   1< m, n < 10
 * And creates a random mxn matrix.
 * 
 * For example m = 4, n = 2
 * 
 * 2  4
 * 0  1
 * 5  5
 * 2  9
 * 
 * Phase 3:
 * 
 * Create 2 mxn matrix using the above methods and perform their matrix addition and log the result.
 * 
 * 
 * Phase 4:
 * 
 * Beautifully log the matrix addition
 * 
 * 1 2 3     2 1 7   3 3 10
 * 2 1 1  +  6 0 8 = 8 1 9
 * 3 2 8     5 0 9   8 2 17
 * 
 */

function create_random_matrix(row = 3, col = 3) {
    let matrix = new Array(row).fill(new Array(col))

    for(let i=0; i < row; i++){
        for(let j = 0; j < col; j++){

            matrix[i][j] = (Math.floor(Math.random() * 10));
        }
    }
    
    return matrix;
}

function add_two_matrix(m1, m2) {
    // Assumptions both matrix are of mxn dimension

    let sum_matrix = new Array(m1.length).fill(new Array(m1[0].length));
    
    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m1[i].length; j++) {
            sum_matrix[i][j] = m1[i][j] + m2[i][j];
        }
    }
    
    return sum_matrix;
}

function print_matrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row_items = "";

        for (let j = 0; j <matrix[i].length; j++) {
            row_items += matrix[i][j] + "  ";
            
        }
        console.log(row_items);
    }
}

const m1 = create_random_matrix(4, 4);
const m2 = create_random_matrix(4, 4);

const sum = add_two_matrix(m1, m2);

print_matrix(m1);
console.log('\n  +  \n');
print_matrix(m2);
console.log('\n  =  \n');
print_matrix(sum);
