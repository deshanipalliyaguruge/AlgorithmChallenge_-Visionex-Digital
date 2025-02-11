// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to find the second-largest number in an array
function secondLargest(arr) {
    if (arr.length < 2) return null; // If there are less than 2 elements, return null
    
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second === -Infinity ? null : second;
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert to lowercase and remove non alphanumeric characters
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse the string and compare with the original string
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage
console.log(reverseString("hello")); 
console.log(secondLargest([10, 20, 4, 45, 99])); 
console.log(isPalindrome("abcba")); 


