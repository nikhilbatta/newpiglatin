$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    // var arr = ["a","e","i","o","u"]
    var userInput = $(".inputOne").val();

    if (userInput.charAt(0) === "a" || "i" || "o" || "e" || "u"){
    var changed =  userInput.toString();
    var changed1 = changed.concat("way")
      console.log(changed1)
    }
    else {
      alert("WOW")
    }
  });

});
