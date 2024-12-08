// 1. Calculate difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}

// 2. Check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3. Find the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// 4. Filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5. Sort array in descending order
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// 6. Lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7. Calculate average of numbers in an array
function findAverage(arr) {
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

// 8. Check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage and console output
console.log("1. calculateDifference(10, 5):", calculateDifference(10, 5));
console.log("2. isOdd(7):", isOdd(7));
console.log("3. findMin([3, 1, 4, 1, 5, 9]):", findMin([3, 1, 4, 1, 5, 9]));
console.log("4. filterEvenNumbers([1, 2, 3, 4, 5, 6]):", filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("5. sortArrayDescending([3, 1, 4, 1, 5, 9]):", sortArrayDescending([3, 1, 4, 1, 5, 9]));
console.log("6. lowercaseFirstLetter('Hello'):", lowercaseFirstLetter('Hello'));
console.log("7. findAverage([1, 2, 3, 4, 5]):", findAverage([1, 2, 3, 4, 5]));
console.log("8. isLeapYear(2024):", isLeapYear(2024));

1111
