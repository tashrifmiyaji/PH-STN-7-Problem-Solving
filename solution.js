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
console.log("problem-1 output: \n",staircase(4));


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
console.log("problem-2 output: \n",gradingStudents([73, 67, 38, 33]));


// Problem 3: Time Conversion
var timeConversion = function(s) {
  const period = s.slice(-2);
  const [hourText, minutes, seconds] = s.slice(0, -2).split(":");
  let hour = Number(hourText);

  if (period === "AM") {
    if (hour === 12) hour = 0;
  } else if (hour !== 12) {
    hour += 12;
  }

  return `${String(hour).padStart(2, "0")}:${minutes}:${seconds}`;
};
console.log("problem-3 output: \n", timeConversion("07:05:45PM"));


