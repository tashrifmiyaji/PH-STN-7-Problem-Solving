/**
 * STN-7 Problem Solving Assessment
 * Language: JavaScript
 *
 * Each solution follows the function signature in the assessment PDF.
 */

// Problem 1: Staircase
const staircase = function (n) {
    const rows = [];

    for (let i = 1; i <= n; i++) {
        rows.push(" ".repeat(n - i) + "#".repeat(i));
    }

    return rows.join("\n");
};
console.log("problem-1 output: \n", staircase(4));


// Problem 2: Grading Students
const gradingStudents = function (grades) {
    return grades.map((grade) => {
        if (grade < 38) {
            return grade;
        }

        const nextMultiple = Math.ceil(grade / 5) * 5;
        return nextMultiple - grade < 3 ? nextMultiple : grade;
    });
};
console.log("problem-2 output: \n", gradingStudents([73, 67, 38, 33]));


// Problem 3: Time Conversion
const timeConversion = function (s) {
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


// Problem 4: String Repeat
const repeatStr = function (n, s) {
    return s.repeat(n);
};
console.log("problem-4 output: \n", repeatStr(4, "tashrif "));


// Problem 5: Reversed Strings
const solution = function (str) {
    return str.split("").reverse().join("");
};
console.log(solution("tashrif"));


// Problem 6: Sum of Positive
const positiveSum = function (arr) {
    return arr.reduce((sum, value) => sum + (value > 0 ? value : 0), 0);
};
console.log(positiveSum([1, -2, 3, -4, 8, -9]));


// Problem 7: Grasshopper — Summation
const summation = function (num) {
    return (num * (num + 1)) / 2;
};
console.log(summation(10));


// Problem 8: Convert a Boolean to a String
const booleanToString = function (b) {
    return String(b);
};
console.log(booleanToString(true));


// Problem 9: Fizz Buzz
const fizzBuzz = function (n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }

    return result;
};
console.log(fizzBuzz(10));


// Problem 10: Running Sum of 1D Array
const runningSum = function (nums) {
    const result = [];
    let total = 0;

    for (const num of nums) {
        total += num;
        result.push(total);
    }

    return result;
};
console.log(runningSum([1, 2, 3, 4]));


// Problem 11: Richest Customer Wealth
const maximumWealth = function (accounts) {
    let maxWealth = 0;

    for (const account of accounts) {
        const wealth = account.reduce((sum, amount) => sum + amount, 0);
        maxWealth = Math.max(maxWealth, wealth);
    }

    return maxWealth;
};
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));



// Problem 12: Remove Duplicates from Sorted Array
const removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let writeIndex = 1;

    for (let readIndex = 1; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== nums[writeIndex - 1]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }

    return writeIndex;
};
const duplicates = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(duplicates));


// Problem 13: Contains Duplicate
const containsDuplicate = function (nums) {
    const seen = new Set();

    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }

    return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));



// Problem 14: Move Zeroes
const moveZeroes = function (nums) {
    let writeIndex = 0;

    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== 0) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }

    while (writeIndex < nums.length) {
        nums[writeIndex] = 0;
        writeIndex++;
    }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);

// Problem 15: Merge Sorted Array
const merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let writeIndex = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[writeIndex] = nums1[i];
            i--;
        } else {
            nums1[writeIndex] = nums2[j];
            j--;
        }

        writeIndex--;
    }
};

// Test
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);