// Business Logic

const beep = "Beep!"
const boop = "Boop!"
const wontYa = "Won't you be my neighbor?"

let numBumbler = function(input) {
  let numRange = [];
  for (let i = 0; i <= input; i++){
    numRange.push(i.toString());
  };
  let numBumblerS2 = numRange.map(function(numRange) {
    if (numRange.includes("3")){
      return numRange = wontYa;
    } else if(numRange.includes("2")) {
      return numRange = boop; 
    }else if(numRange.includes("1")){
      return numRange = beep;
    }else {
      return numRange;
    };
  });
  return numBumblerS2
};

//UI Logic

$(document).ready(function(){
  $("#number").submit(function(event){
    event.preventDefault();
    let input = parseInt($("input#original").val());
    let output = numBumbler(input)
    $("#outputRange").append("<li>" + output.join(", ") + "</li>")
    $("#resultDisplay,#countdown,.countdown").fadeIn();
    
    $("#countdown").click(function(){
      $("#countdownRange").append("<li>" + output.reverse().join(", ") + "</li>");
      $("#reversedResults, #tryAgain").fadeIn();
      $("#number, .countdown, #countdown").fadeOut();
    });
  });
  $("#tryAgain").click(function(){
    location.reload(true);
  });
});