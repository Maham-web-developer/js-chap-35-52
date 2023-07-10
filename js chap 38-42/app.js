// ======= Chapter 38-42 =========
// Question 1
//   function power(a, b) {
//   var result = 1;
//   for (let i = 0; i < b; i++) {
//     result *= a;
//   }
//   return result;
// }
//   var base = 2;
//   var exponent = 3;
//   var result = power(base, exponent);
//   console.log(result); 

// Question 2
// function isLeapYear(year) {
// if (year % 4 === 0) {
// if (year % 100 === 0) {
// if (year % 400 === 0) {
//   return true; 
//  } 
//    else { return false; }
//       } 
//      else { return true; }
//     }
//        else {return false; }
//   }
//     var year = 2023;
//     var isLeap = isLeapYear(year);
//    console.log(isLeap); 

// Question 3
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
//   }
//   function calculateTriangleArea(a, b, c) {
//     var = calculateS(a, b, c);
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
//   }
//  var sideA = 3;
//  var sideB = 4;
//  var sideC = 5;
//  var area = calculateTriangleArea(sideA, sideB, sideC);
//  console.log(area); 


// Question 4
// var marksSubject1 = 80;
// var marksSubject2 = 75;
// var marksSubject3 = 90;

// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
//   }  
//   function calculatePercentage(totalMarks, obtainedMarks) {
//     return (obtainedMarks / totalMarks) * 100;
//   }
//   function mainFunction(subject1, subject2, subject3) {
//     var average = calculateAverage(subject1, subject2, subject3);
//     var percentage = calculatePercentage(100, subject1 + subject2 + subject3);

//     console.log("Average marks: " + average);
//     console.log("Percentage: " + percentage + "%");
//   }
//   mainFunction(marksSubject1, marksSubject2, marksSubject3);
  
// Question 5
// function customIndexOf(str, searchChar) {
//     for (var i = 0; i < str.length; i++) {
//       if (str[i] === searchChar) {
//         return i;
//       }
//     }
//     return -1;
//   }
//   var str = "Hello, world!";
//   var searchChar = "o";
//    var index = customIndexOf(str, searchChar);
// console.log(index); 

// Question 6
// function deleteVowels(sentence) {
//     var result = "";
//     var vowels = "aeiouAEIOU";
//     for (var i = 0; i < sentence.length; i++) {
//       if (!vowels.includes(sentence[i])) {
//         result += sentence[i];
//       }
//     }
//     return result;
//   }
//     var sentence = "Hello, World!";
//     var result = deleteVowels(sentence);
//     console.log(result); 

// Question 7
// function countSuccessiveVowels(text) {
//     var count = 0;
//     var vowels = "aeiouAEIOU";
//     for (let i = 0; i < text.length - 1; i++) {
//       var currentChar = text[i];
//       var nextChar = text[i + 1];
//       if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
//         count++;
//       }
//     }
//     return count;
//   }
//   var text = "Pleases read this application and give me gratuity";
//   var count = countSuccessiveVowels(text);
//   console.log(count);

// Question 8
// function convertToMeters(distance) {
//     return distance * 1000;
//   }
  
//   function convertToFeet(distance) {
//     return distance * 3280.84;
//   }
  
//   function convertToInches(distance) {
//     return distance * 39370.1;
//   }
  
//   function convertToCentimeters(distance) {
//     return distance * 100000;
//   }
  
//   function printDistanceConversions(distance) {
//     var meters = convertToMeters(distance);
//     var feet = convertToFeet(distance);
//     var inches = convertToInches(distance);
//     var centimeters = convertToCentimeters(distance);
  
//     console.log("Distance:");
//     console.log("Meters: " + meters);
//     console.log("Feet: " + feet);
//     console.log("Inches: " + inches);
//     console.log("Centimeters: " + centimeters);
//   }

//   var distance = 100;
// printDistanceConversions(distance);

// Question 9
// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40; 
//     var overtimeRate = 12.00; 
  
//     var overtimeHours = 0;
//     var overtimePay = 0.0;
  
//     if (hoursWorked > regularHours) {
//       overtimeHours = hoursWorked - regularHours;
//       overtimePay = overtimeHours * overtimeRate;
//     }
  
//     return overtimePay;
//   }
//   var hoursWorked = 45;
//   var overtimePay = calculateOvertimePay(hoursWorked);
//   console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));

// Question 10
// function calculateCurrencyNotes(amountInHundreds) {
//     var note100 = 100;
//     var note50 = 50;
//     var note10 = 10;
  
//     var totalNotes100 = Math.floor(amountInHundreds);
//     var remainingAmount = (amountInHundreds - totalNotes100) * 100;
  
//     var totalNotes50 = Math.floor(remainingAmount / note50);
//     remainingAmount = remainingAmount % note50;
  
//     var totalNotes10 = Math.floor(remainingAmount / note10);
//     return {
//       note100: totalNotes100,
//       note50: totalNotes50,
//       note10: totalNotes10
//     };
//   }
//   var amountUser =prompt ('enter your amount ')
//   var currencyNotes = calculateCurrencyNotes(amountUser);
//   console.log(currencyNotes);
  
  
  
  

    



  

  


    