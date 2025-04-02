let color1 = "purple";
let color2 = "pink";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1); // newColors reassigned to ['red', 'green', 'blue', 'purple']
updateColors(newColors, color2);  // appends 'pink' to newColors array
console.log(colors);     // prints ['red', 'green', 'blue', 'purple', 'pink']