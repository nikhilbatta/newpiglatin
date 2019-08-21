$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var userInput = $(".inputOne").val();
    var startOfLogic = sentenceChecker(userInput);
    $("#formOne").append("<li>" + startOfLogic+ "</li>")

  });
});

// var userInput = $(".inputOne").val();

function sentenceChecker(inputString){
  var words1= "";
  console.log(words1)
  var splitter = inputString.split(" ")
  splitter.forEach(function(split){
    words1 = inputString + " " + wordChecker(split)
  });

   return words1;
};

function wordChecker(word){
  // var word = $(".inputOne").val();
  var firstPart = "";
  var secondPart = "";
  var ending = "way"
  // var matcher1 = (/^[a-zA-Z]+$/).test(word)
  var matcher1 = (/^[a-zA-Z]+$/).test(word)
  if (matcher1 === false){
    console.log("didnt run")
    return word;
  }
  for(var i=0; i<word.length; i++){
    var matcher = word[i].match(/[aeiou]/i);

  else if (matcher === null){
      firstPart = firstPart.concat(word[i]);
      ending = "ay"
      // console.log(firstPart + " Is the first part");
    }
    else {
      secondPart = word.substr(i, word.length);
      break;
      // console.log(secondPart + " Is the second part")

    }
  };
  console.log(secondPart + firstPart + ending);

};

//
// function characterChecker(word){
//   // console.log(word + " Is the word");
//   // var userInput = $(".inputOne").val();
//   var matcher1 = (/^[a-zA-Z]+$/).test(word)
//   if (matcher1 === false){
//     // console.log("didnt work")
//
//   }
//   else{
//
//     sentenceChecker(word)
//   };
//   // wordChecker(userInput);
//   // wordChecker(userInput)
// }


// function adder(number1, number2) {
  //   return number1 + number2;
  // }
  //
  // var result = adder(1,2);
