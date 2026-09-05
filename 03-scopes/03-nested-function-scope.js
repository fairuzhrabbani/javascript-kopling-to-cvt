/*
 * Nested function scope
 */

function first() {
  let firstVariable = "My First Name";

  function firstNested() {
    console.log(firstVariable); //can acccess local scope first function
    console.log("This is firstNested Function");
    const firstNestedVariable = "My Second Name";
  }

  firstNested();
  console.log(firstNestedVariable); // can't access local scope ERROR
}
first();
