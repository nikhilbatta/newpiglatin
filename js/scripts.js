$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    // var arr = ["a","e","i","o","u"]
    var arr1 =[]
    var userInput = $(".inputOne").val();
    var pusher = arr1.push(userInput)
    arr1.forEach(function(char){
    var matcher = char.charAt(0).match(/[aeiou]/gi)
    var consonantMatcher = char.charAt(0,1).match(/[b-df-hj-np-tv-z]/gi)
    if (matcher){
    // var changed =  userInput.toString();
    var changed1 = userInput.concat("way")
    $("#formOne").append("<li>" + changed1 + "</li>")
    }
    else if (consonantMatcher){

      alert("WOW")

      var consonant = userInput.concat("ay");
      $("#formOne").append("<li>" + consonant + "</li>")
    }
   });
  });

});
