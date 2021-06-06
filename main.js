
//popping up prompt boxes for input and then an alert with the calculated result
var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

//write a function that calculates body mass index (BMI) using two arguments. 
//Then write another function that prompts the user for their height and weight,
// uses the BMI function and alerts the user of their BMI

var divide = function(height , weight){ 
    return height /weight;
};
var height = parseInt(prompt("Enter your height"));
var weight = parseInt(prompt("Enter your weight"))
var calculate = divide(height,weight)
alert(calculate);

//Write a function that converts temperature between Celsius and Fahrenheit.
var temperature = function(celsius ,fahrenheit){
    return celsius / fahrenheit;
}
 var celsius = parseInt(prompt("Enter celsius"));
 var fahrenheit = parseInt(prompt("Enter fahrenheit"));
 var outcome = temperature(celsius,fahrenheit);
 alert(outcome +32);

 //simple calculator that calculates if a number is even or not. 
 


 var nums = function(even){
  return even;
 }
var even = parseInt(prompt('enter a number'));
if(even % 2 == 0){
  alert('number is even');

} else {
  alert('number is odd');
}

//Using if and else statements, create a simple
// program that prompts you to choose between coffee and tea. 



 


