let color = "purple";
let colors = ["red", "green", "blue"];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors); // declares new variable newColors and assigns to the return value of removeColor function with parameter colors 
// newColors = ['red', 'green'] and color variable is reassigned to 'blue'
addColor(colors, color); // takes the mutated global variable, now ['red', 'green'] and appends the string 'blue'
console.log(newColors);  // prints ['red', 'green', 'blue']