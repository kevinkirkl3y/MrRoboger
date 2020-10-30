// Business Logic

const beep = "Beep!"
const boop = "Boop!"
const wontYa = "Won't you be my neighbor?"

// creates range of numbers for the numBumbler to loop through. 
let numBumbler = function(input) {
  let numRange = [];
  for (let i = 0; i <= input; i++)
  numRange.push(i.toString());
  console.log(numRange);
}



//UI Logic

$(document).ready(function(){
  $("#number").submit(function(event){
    event.preventDefault();
    let input = parseInt($("input#original").val());
    let output = numBumbler(input)
  })
  
  
  
  
})
