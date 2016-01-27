/* Create a function using recursion called numToText which takes a string and returns a new string with all numeric numbers from the input string converted to their corresponding text words. You can assume that the numbers in the string are single digit numbers.

Can you implement this function in two different ways? One way involves creating an inner helper function, the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/  
// Using a loop:

// var numToText = function(str) {
//   var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//   var str = str.split('');
//   var text = "";
//   for (var i = 0; i < str.length; i++) {
//     var index = Number(str[i]);
//     text += numbers[index];
//   }
//   return text;
// };

var numToText = function (str) {
  var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  // link string to numbers 
  // initialize text output
  // base case is index === str.length return numbers[index]
  // recursive case is text += numbers[index]
  
  var text = "";
  
  function buildText(text, i) {
    if (i === str.length) {
      return text;
    }
    text += numbers[Number(str.charAt(i))];
    return buildText(text, i + 1);
  }
  
  return buildText(text, 0);
};

console.log(numToText("456"));

var numToTextSent = function(str) {
  var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var text = '';

  function toNum(char) {
    if (char === ' ') 
      return ' ';
    var num = Number(char);
    if (Number.isNaN(num)) {
      return char;
    } else {
      return numbers[num]
    }
  }

  function buildText(text, i) {
    if (i === str.length) {
      return text;
    } 
    text += toNum(str[i]);
    return buildText(text, i + 1);
  }
  return buildText('', 0);
};

console.log(numToTextSent("I have 5 dogs and 6 ponies")); 

