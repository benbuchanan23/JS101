/*  ************  Question 4  **************

  Can you identify all of the variables, primitive values, and objects in the following code?
*/

function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

/*
Variables: boo (function name), scare (parameter), myBoo (local variable), halloweenCollection (constant), greet (object key), scare (object key)

Primitive Values: "!!!" (string), "happy Halloween" (object value), "boo" (object value), "May all your pumpkins be glowing" (object value), "greet" (object key)

Objects: halloweenCollection and boo function
*/