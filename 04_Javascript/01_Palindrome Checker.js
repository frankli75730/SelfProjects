function palindrome(str) {
  let a = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  //console.log(a);
  let b = a.split("").reverse().join("");
  //console.log(b);
  console.log(a===b);
  return a===b;
}

palindrome("My age is 0, 0 si ega ym.");