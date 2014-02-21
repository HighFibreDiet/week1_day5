var numberToWord = function(number) {
  return number;
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


