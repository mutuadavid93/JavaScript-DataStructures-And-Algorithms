/**
 *  Define a Stack.
 *  Choice: An Array.
 */

// Constructor to init our stack properties:
function Stack() {
  this.dataStore = new Array();
  this.top = 0;
  this.pop = pop;
  this.push = push;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

// Increment the top variable so
// that the "new top" is the "next empty position" in the array.
//
// NB: Placing the increntor after "this.top" ensures that the "current value" of top(e.g. 0)
// is used to place the "new element" at the top of the stack "before top is incremented".
function push(newElement) {
  // i.e. nextEmptyPos == top+1
  this.dataStore[this.top++] = newElement;
}

// Pop(), returns the element in
// the top position of the stack and then decrements the top variable
//
// "--this.top" first decrements top(Always an empty position pointer)
// to get actual top of Stack position then grab the element there.
function pop() {
  return this.dataStore[--this.top];
}

// Peek() function returns the top element of the stack by accessing the element at
// the top-1(An actual position with an element) position of the array.
function peek() {
  return this.dataStore[this.top - 1];
}

// NB: Invoking peek() on an empty stack, you get "undefined" since there is no actual
// element at top.

// Get the total elements in a Stack; top === totalElements:
function length() {
  return this.top;
}

// Clear a stack by simply setting the top variable back to 0
function clear() {
  this.top = 0;
}

/**
 *  Play with a Stack
 */
var stack = new Stack();
stack.push('Street Money');
stack.push('Mathiu Alcantara');

console.log(stack.length());

var popped = stack.pop();

console.log(
  'Current top element is "' +
    stack.peek() +
    '" after removing "' +
    popped +
    '"'
);
