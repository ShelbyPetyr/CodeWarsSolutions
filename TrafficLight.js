/* Description: Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow. */

function updateLight(current) {
  let str = ["green","yellow","red"];
  return str[(str.indexOf(current)+1)%3];
}
