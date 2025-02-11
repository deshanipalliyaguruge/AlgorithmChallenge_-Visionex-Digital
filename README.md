Algorithm Challenge

This JavaScript program solves the following algorithm challenges:

    Reverse a string.
    
    Find the second-largest number in an array.
    
    Check if a given string is a palindrome.


How to Run the Program:

  Prerequisites:
  
    Install Node.js if you haven't already.
  
  Steps:
  
    Save the file as algorithmChallenge.js.
    
    Open a terminal or command prompt.
    
    Navigate to the directory where the file is saved.
    
    Run the following command:
    
      node algorithmChallenge.js

Example Usage:

console.log(reverseString("hello")); // Output: "olleh"
console.log(secondLargest([10, 20, 4, 45, 99])); // Output: 45
console.log(isPalindrome("abcba")); // Output: true

Explanation

1. Reverse a String

    Converts the string into an array.
    
    Reverses the array.

    Joins the array back into a string.

2. Find the Second-Largest Number

    Iterates through the array to find the first and second largest numbers.
    
    Handles edge cases where there are fewer than two distinct numbers.

3. Check if a String is a Palindrome

    Converts the string to lowercase and removes non-alphanumeric characters.
    
    Reverses the cleaned string and checks if it matches the original.
