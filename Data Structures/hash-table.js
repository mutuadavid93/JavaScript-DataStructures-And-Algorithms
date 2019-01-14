/*************************************
 *
 *  HASHING STRING KEYS:
 *
 ************************************/

//  NOTE:
// HashTable is Best when Quick Insertion and Retrieval is Required.
// CAUTION: Not Best for Searching instead use BST, Binery Search Tree.

// NOTE: betterHash() is the superior hashing function for strings
// and for integers.

var HashTable = function() {
  this.table = new Array(137);
  this.betterHash = betterHash;
  this.showDistribution = showDistribution;
  this.put = put;
};

// Hash Function Choice:
// 1. If the Key is an Integer then;
//
// Return the Key Modulo the Size of the Array === "simpleHash"

// NB: Never use the above method if All keys end with 0 and the
// Array size is 10.
// Thus why the Array Size should always be a Prime Number.

// put(): places the Data into the HashTable:
function put(data) {
  var pos = this.betterHash(data);
  this.table[pos] = data;
}

// Display the data from the HashTable:
function showDistribution() {
  var n = 0;
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i] != undefined) {
      console.log(i + ' : ' + this.table[i]);
    }
  }
}

// NB: The Issue with The Above Method is that There are Collisions:
//
// When there are collisions only the last Hash value is stored into the HashTable.

/**
 *  Rules to Solve Collisions:
 */
// 1. Make the Array Size used is a Prime Number.
// 2. The Array Size MUST be greator than a 100.
// 3. Use Horner’s method Algorithm to Solve Hashing Collisions
// 4. Multiply the Resulting Total by a Prime Constant.

// Utilizing Honor's Method
function betterHash(string) {
  const H = 0;
  var total = 0;
  for (var i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i);
  }
  total % this.table.length;
  if (total < 0) total += this.table.length - 1;

  return parseInt(total);
}

// Operations on the HashTable:
// prettier-ignore
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan","Phillista","Byron"];

var hashtable = new HashTable();
for (var x = 0; x < someNames.length; x++) {
  hashtable.put(someNames[x]);
}

// Display Data:
hashtable.showDistribution();
