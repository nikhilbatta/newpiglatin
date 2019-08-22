$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var userInput = $(".inputOne").val();
    var startOfLogic = sentenceChecker(userInput);
    $("#formOne").append("<li>" + startOfLogic+ "</li>")
  });
});
function sentenceChecker(inputString){
  var words1= "";
  console.log(words1)
  var splitter = inputString.split(" ")
  splitter.forEach(function(split){
    words1 = words1 + " " + wordChecker(split)
  });
  return words1;
};
function wordChecker(word){
  var matcher1 = (/^[a-zA-Z]+$/).test(word)
  if (matcher1 === false){
    alert("omg you have a number in there thats not right")
    return word;
  }
  var firstPart = "";
  var secondPart = "";
  var ending = "way"
  for(var i=0; i<word.length; i++){
    var matcher = word[i].match(/[aeiou]/i);
    if (matcher === null){
      firstPart = firstPart.concat(word[i]);
      ending = "ay"
    }
    else {
      secondPart = word.substr(i, word.length);
      break;
    }
  };
  return (secondPart + firstPart + ending);
};
