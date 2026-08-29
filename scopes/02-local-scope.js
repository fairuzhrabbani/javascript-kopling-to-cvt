const age = 30;
/*
 * Local Scope
 */
function first() {
  // local scope
  let firstVariable = "My First Name";
  console.log(age);
  return firstVariable;
}

function second() {
  // can't access local scope ERROR
  console.log(firstVariable);

  // local scope
  let secondVariable = "My Second Name";
  console.log(age);
  return secondVariable;
}

// Global Scope Area
console.log(first());
console.log(second());
console.log(firstVariable); // can't access local scope ERROR
console.log(secondVariable); // can't access local scope ERROR
