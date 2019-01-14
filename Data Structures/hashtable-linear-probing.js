/*******************************************
 *
 *  LINEAR PROBING:
 *
 ******************************************/

// Simply looks to see if the next element of the hash table is empty.
// If so, the key is placed in that element. If the element
// is not empty, the program continues to search for an empty hash-table element until
// one is found.

// Assumption: There must be empty spaces in a HashTable, Thus it makes sense to store
// Keys in those spaces.

var HashTable = function() {
  this.table = new Array(137);
  this.values = new Array();
  this.betterHash = betterHash;
  this.showDistribution = showDistribution;
  this.put = put;
  this.get = get;
};

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

// Linear Probing: When we Store a Key in table Array, we store a Value at the
// corresponding position in the value Array.
function put(key, data) {
  var pos = this.betterHash(key);

  // If a space is immediately found, store value and key ASAP!
  if (this.table[pos] == undefined) {
    this.table[pos] = key;
    this.values[pos] = data;
  } else {
    // Find next empty space in hashTable.
    while (this.table[pos] != undefined) {
      pos++;
    }
    // If found add Key and Data there.
    this.table[pos] = key;
    this.values[pos] = data;
  }
}

// get
function get(key) {
  var hash = -1;
  hash = this.betterHash(key);

  // If the data passed into the function matches the key found at that position,
  // corresponding data in the values position is returned.
  if (!!~hash) {
    for (var i = hash; this.table[hash] != undefined; i++) {
      // If they Match Return the value and Exit Loop
      if (this.table[hash] == key) {
        return this.values[hash];
      }
    }
  }
  return undefined;
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

var hTable = new HashTable();
// prettier-ignore
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan","John Smith","Sandra Dee"];
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i], someNames[i]);
}
hTable.showDistribution();

// Retrieve a Value From The HashTable:
console.log(hTable.get('Byron'));
