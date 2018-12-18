/******************************************
 *
 *  (A.) Sorting Algorithm.
 *
 *****************************************/

// 1. It Divides the Array into Sorted and Unsorted Sections.
// 2. It then Compares the First Number and the Number After it.
// 3. If the Number is smaller than the Current Number, then
// Their positions Are swapped in the Array.
// 4. This is repeated until the Array is fully Sorted.

function selectionSort(arrayInput) {
  // arrayInput.length - 1, when we have one number in the unsorted part we are done thus no
  // need to loop.
  let wall = 0;
  while (wall < arrayInput.length - 1) {
    // wall + 1, allows us to compare only elements behind "wall"
    var smallestIndex = wall;
    for (let i = wall + 1; i < arrayInput.length; i++) {
      if (arrayInput[smallestIndex] > arrayInput[i]) {
        smallestIndex = i;
      }
    }

    // smallest element is on index smallestIndex
    // swap
    var temp = arrayInput[wall];
    arrayInput[wall] = arrayInput[smallestIndex];
    arrayInput[smallestIndex] = temp;

    // Increment After Logic
    wall++;
  }
}

var myArray = new Array(100, 5, 6, 10, 99, 1);
console.info(myArray);
selectionSort(myArray);
console.info(myArray);
