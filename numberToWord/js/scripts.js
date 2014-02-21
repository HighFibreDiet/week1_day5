var numberToWord = function(number) {
  var numberDictionary = {1:"one", 2:"two", 3:"three",  4:"four", 5:"five",6:"six", 7:"seven", 8:"eight", 9:"nine", 10:"ten", 11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen", 15:"fifteen", 16:"sixteen", 17: "seventeen", 18:"eighteen", 19:"nineteen", 20:"twenty", 30:"thirty", 40:"forty", 50:"fifty", 60:"sixty", 70:"seventy", 80:"eighty", 90:"ninety", 100:"hundred"};
  var output = "";
  var length = number.toString().length;

  if(number/100 % 1 === 0) {
    output += numberDictionary[Math.floor(number/100)] + " " + numberDictionary[100];
  } else if(number/100 > 1 && number % 10 === 0) {
    output += numberDictionary[Math.floor(number/100)] + " " + numberDictionary[100] + " " + numberDictionary[number % 100];
  } else if(number/100 > 1) { 
    output += numberDictionary[Math.floor(number/100)] + " " + numberDictionary[100] + " " + numberDictionary[(number % 100) - (number % 100 % 10)] + " " + numberDictionary[number % 100 % 10];
  } else if(number<100 && number > 20) {
    output += numberDictionary[number - number%10] + " " + numberDictionary[number%10];
  } else if(number > 10 && number < 20) {
    output += numberDictionary[number];
  } else {
    output += numberDictionary[number];
  }
  return output;
};



$(function() {
  $("form#scrabble").submit(function(event) {
     var wordToProcess = $("#input").val();
     var points = scrabbleScore(wordToProcess);
     $(".output").text(points);
     $(".inputWord").text(wordToProcess);
     $("#result").show();
     event.preventDefault();
  });
});


