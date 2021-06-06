

var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);


var divide = function(height , weight){ 
    return height /weight;
};
var height = parseInt(prompt("Enter your height"));
var weight = parseInt(prompt("Enter your weight"))
var calculate = divide(height,weight)
alert(calculate);

var temperature = function(celsius ,fahrenheit){
    return celsius / fahrenheit;
}
 var celsius = parseInt(prompt("Enter celsius"));
 var fahrenheit = parseInt(prompt("Enter fahrenheit"));
 var outcome = temperature(celsius,fahrenheit);
 alert(outcome +32);