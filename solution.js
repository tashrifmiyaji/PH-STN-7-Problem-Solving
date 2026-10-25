/**
 * STN-7 Problem Solving Assessment
 * Language: JavaScript
 *
 * Each solution follows the function signature in the assessment PDF.
 */

// Problem 1: Staircase
var staircase = function (n) {
    const rows = [];

    for (let i = 1; i <= n; i++) {
        rows.push(" ".repeat(n - i) + "#".repeat(i));
    }

    return rows.join("\n");
};
console.log(staircase(4));


// Problem 2: Grading Students
var gradingStudents = function (grades) {
    return grades.map((grade) => {
        if (grade < 38) {
            return grade;
        }

        const nextMultiple = Math.ceil(grade / 5) * 5;
        return nextMultiple - grade < 3 ? nextMultiple : grade;
    });
};
console.log(gradingStudents([73, 67, 38, 33]));

