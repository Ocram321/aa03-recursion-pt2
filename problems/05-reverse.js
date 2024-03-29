/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  // Your code here 
  //string length === to 0 base case 
  let stringArr = str.split('')
  if (stringArr.length ===  0) {
    return ''
  }
  let newWord = stringArr.pop()
  console.log(newWord)
  return newWord + reverse(stringArr.join(''))

  ///recursive function 
  // string.pop
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
