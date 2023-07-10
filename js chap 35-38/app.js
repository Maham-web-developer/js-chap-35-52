//======== Chapter 35-38 =========

// Question 1
//  function displayDateTime() {
//  var currentDate = new Date();
//  var dateTimeString = currentDate.toLocaleString();
//  document.getElementById("date+time").innerHTML = dateTimeString;
// }
// displayDateTime();

// Question 2
// function greetUser(firstName, lastName) {
// var fullName = firstName + " " + lastName;
// console.log("Hira, " + fullName + " Welcome!");
// }
//   greetUser("Maham,", "Aqsa");

// Question 3
//     function addNumber() {
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));
//     var sum = num1 + num2;
//     return sum;
//   }
//   var result = addNumber();
//   console.log("The sum two is: " + result);

// Question 4
// function computeOperator(num1, num2, operator) {
//     var result; 
//     switch (operator) {
//     case "+":
//     result = num1 + num2;
//     break;
//     case "-":
//     result = num1 - num2;
//     break;
//     case "*":
//     result = num1 * num2;
//     break;
//     case "/":
//     result = num1 / num2;
//     break;
//     default:
//     return "Invalid operator";
//     }   
//     document.write("The result is: " + result);
//     return result;
// }
//   var number1 = parseFloat(prompt("Enter the first number:"));
//   var number2 = parseFloat(prompt("Enter the second number:"));
//   var operator = prompt("Enter the operator (+, -, *, /):");
//   var output = computeOperator(number1, number2, operator);
  
// Question 5
// function squareNumber(number) {
//     var square = number * number;
//     return square;
//   }
//   var inputNumber = parseFloat(prompt("Enter a number:"));
//   var squaredResult = squareNumber(inputNumber);
//   console.log("The square of " + inputNumber + " is: " + squaredResult);
  
// Question 6
// var inputNumber = parseInt(prompt("Enter a number:"));
// function factorial(number) {
//     if (number === 0 || number === 1) {
//       return 1;
//     } else {
//       var result = 1;
//       for (var i = 2; i <= number; i++) {
//         result *= i;
//       }
//       return result;
//     }
//   }
//   var factorialResult = factorial(inputNumber);
//   console.log("The factorial of " + inputNumber + " is: " + factorialResult);

// Question 7
// var startNumber = parseInt(prompt("Enter the start number:"));
// var endNumber = parseInt(prompt("Enter the end number:"));
// function displayCounting(start, end) {
//     var countingSequence = "";
//     for (var i = start; i <= end; i++) {
//       countingSequence += i + " ";
//     }
//     console.log("Counting sequence: " + countingSequence);
//   }
//   displayCounting(startNumber, endNumber);

// Question 8
//    var baseLength = parseFloat(prompt("Enter the length of the base:"));
//    var perpendicularLength = parseFloat(prompt("Enter the length of the perpendicular:"));
//    var hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);

//    function calculateHypotenuse(base, perpendicular) { 
//     function calculateSquare(number) {
//     return number * number;
//     }
//     var sumOfSquares = calculateSquare(base) + calculateSquare(perpendicular);
//     var hypotenuse = Math.sqrt(sumOfSquares);
//     return hypotenuse;
//   }
//   console.log("The hypotenuse is: " + hypotenuse);

//Question 9
// var area1 = calculateRectangleArea(10, 10);
// function calculateRectangleArea(width, height) {
//     var area = width * height;
//     return area;
//   }
//   console.log("The area of the rectangle is: " + area1);

// Question 10
//    var inputString = prompt("Enter a word:");
//     function isPalindrome(str) {
//     var cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
//     var reversedStr = cleanStr.split('').reverse().join('');
//     return cleanStr === reversedStr;
//   }
//   var isPalindromeResult = isPalindrome(inputString);
//   if (isPalindromeResult) {
//     console.log("'" + inputString + "' is a palindrome.");
//   } else {
//     console.log("'" + inputString + "' is not a palindrome.");
//   }

// Question 11
// var inputString = prompt("Enter a string:");
// function capitalizeFirstLetter(str) {
//     var words = str.split(' ');
  
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//       words[i] = capitalizedWord;
//     }
//     var capitalizedString = words.join(' ');
//     return capitalizedString;
//   }
//   var capitalizedOutput = capitalizeFirstLetter(inputString);
//   console.log("Example Output: " + capitalizedOutput);

// Question 12
// var inputString = 'JSResourceS.com';
// var searchLetter = 'o';
// function countOccurrences(str, letter) {
//     var count = 0; 
//     for (var i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
//   var occurrences = countOccurrences(inputString, searchLetter);
//   console.log("Sample Occurrences of '" + searchLetter + "': " + occurrences);
  
// Question 13
//    var radius = parseFloat(prompt("Enter the radius of the circle:"));
//    function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference.toFixed(2));
//   }
//   calcCircumference(radius);

//   function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     console.log("The area is " + area.toFixed(2));
//   }
//   calcArea(radius);
  
  
  
  
  
  
  
  