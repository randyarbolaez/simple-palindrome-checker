console.log(
  "If you're reading this check me out on Linkedin(click the word 'Palindrome Checker')"
);

function palindrome(str) {
  // Good luck!
  let strNormal = str.toLowerCase().replace(/[\W_]+/g, '');
  let strReversed = str
    .split('')
    .reverse()
    .join('')
    .toLowerCase()
    .replace(/[\W_]+/g, '');

  let blah = document.getElementById('palindrome-true-or-false-text');
  if (strNormal === strReversed) {
    return (blah.innerHTML = "Yes, that's a palindrome!");
  }
  return (blah.innerHTML = "No, I'm sorry that's not a palindrome!");
}

function submitPalindrome(e) {
  e.preventDefault();
  let p = document.getElementById('palindrome-text').value;
  palindrome(p);
}
