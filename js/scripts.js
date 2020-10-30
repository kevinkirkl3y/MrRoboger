// Business Logic

const beep = "Beep!"
const boop = "Boop!"
const wontYa = "Won't you be my neighbor?"

// creates range of numbers for the numBumbler to loop throug
let numBumbler = function(input) {
  let numRange = [];
  for (let i = 0; i <= input; i++){
    numRange.push(i.toString());
  };
  //loops through numRange to identify numbers, because we want 3 to override 2 and 1 respectively we want it to resort to doing that first. Because we are trying to transform an array into a new array and we are using strings a map loop is our best option. 
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
  console.log(numBumblerS2);

};




//UI Logic

$(document).ready(function(){
  $("#number").submit(function(event){
    event.preventDefault();
    let input = parseInt($("input#original").val());
    let output = numBumbler(input)
  })
  
  
  
  
})
