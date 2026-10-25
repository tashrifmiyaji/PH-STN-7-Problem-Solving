/**
 * STN-7 Problem Solving Assessment
 * Language: JavaScript
 *
 * Each solution follows the function signature in the assessment PDF.
 */

// Problem 1: Staircase
var staircase = function(n) {
  const rows = [];

  for (let i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }

  return rows.join("\n");
};
console.log(staircase(4));



