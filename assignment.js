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

// AJAX and Caching examples (these won't actually run in a Node.js environment without additional setup)

// GET request
function ajaxGet(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => console.log("GET response:", data))
        .catch(error => console.error("GET error:", error));
}

// POST request
function ajaxPost(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => console.log("POST response:", data))
        .catch(error => console.error("POST error:", error));
}

// PUT request
function ajaxPut(url, data) {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => console.log("PUT response:", data))
        .catch(error => console.error("PUT error:", error));
}

// DELETE request
function ajaxDelete(url) {
    return fetch(url, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => console.log("DELETE response:", data))
        .catch(error => console.error("DELETE error:", error));
}

// Simple caching example
const cache = new Map();

function cachedFetch(url) {
    if (cache.has(url)) {
        console.log("Returning cached data for:", url);
        return Promise.resolve(cache.get(url));
    }

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            cache.set(url, data);
            console.log("Caching data for:", url);
            return data;
        });
}

// Example usage of AJAX functions (these won't actually run without a server)
// ajaxGet('https://api.example.com/data');
// ajaxPost('https://api.example.com/data', { name: 'John', age: 30 });
// ajaxPut('https://api.example.com/data/1', { name: 'John', age: 31 });
// ajaxDelete('https://api.example.com/data/1');

// Example usage of cached fetch (this won't actually run without a server)
// cachedFetch('https://api.example.com/data')
//     .then(data => console.log("Fetched data:", data));