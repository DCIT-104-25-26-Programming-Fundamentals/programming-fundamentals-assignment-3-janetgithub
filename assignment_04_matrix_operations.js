// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require("readline-sync");

// Function to read a matrix from the user
function readMatrix(rows, cols, name) {
    let matrix = [];

    console.log(`\nEnter values for Matrix ${name}:`);

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `)
            .split(" ")
            .map(Number);

        if (row.length !== cols) {
            console.log(`Error: Please enter exactly ${cols} numbers.`);
            i--;
        } else {
            matrix.push(row);
        }
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";

        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j] + "\t";
        }

        console.log(row);
    }
}

// Part A: Transpose a matrix
function transposeMatrix(matrix) {
    let result = [];

    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];

        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    return result;
}

// Part B: Add two matrices
function addMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixA[i].length; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}

// Part C: Multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;

            for (let k = 0; k < matrixA[i].length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            result[i][j] = sum;
        }
    }

    return result;
}

// Main function
function main() {
    // Part A
    console.log("PART A — Matrix Transpose");

    const rows = readlineSync.questionInt("Enter number of rows: ");
    const cols = readlineSync.questionInt("Enter number of columns: ");

    const matrix = readMatrix(rows, cols, "A");

    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposeMatrix(matrix));


    // Part B
    console.log("\nPART B — Matrix Addition");

    const rowsB = readlineSync.questionInt("Enter number of rows: ");
    const colsB = readlineSync.questionInt("Enter number of columns: ");

    const matrixB1 = readMatrix(rowsB, colsB, "A");
    const matrixB2 = readMatrix(rowsB, colsB, "B");

    console.log("\nMatrix A + Matrix B:");
    displayMatrix(addMatrices(matrixB1, matrixB2));


    // Part C
    console.log("\nPART C — Matrix Multiplication");

    const rowsA = readlineSync.questionInt("Enter rows for Matrix A: ");
    const colsA = readlineSync.questionInt("Enter columns for Matrix A: ");

    const matrixA = readMatrix(rowsA, colsA, "A");

    const rowsC = readlineSync.questionInt("Enter rows for Matrix B: ");
    const colsC = readlineSync.questionInt("Enter columns for Matrix B: ");

    if (colsA !== rowsC) {
        console.log("Error: Columns of Matrix A must equal rows of Matrix B.");
        return;
    }

    const matrixC = readMatrix(rowsC, colsC, "B");

    console.log("\nMatrix A x Matrix B:");
    displayMatrix(multiplyMatrices(matrixA, matrixC));
}

// Run program
main();

