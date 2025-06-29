function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

/* 
  Add your pseudocode here
  - Split the word into an array of characters
  - Reverse the array
  - Join the reversed array back into a string
  - Compare the original word with the reversed string
  - Return true if they are the same, else return false
*/

/*
  Add written explanation of your solution here
  The function checks if a word is a palindrome meaning it reads the same forwards and backwards.
  To achieve the above, what we do is:
  1. Split the word into an array of characters.
  2. Reverse that array.
  3. Join it back into a string.
  4. Compare the reversed string to the original word.
  If they match, we return true (it is a palindrome); otherwise, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
