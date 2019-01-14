var HashTable = function() {
  this.table = new Array(137);
  this.values = new Array();
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
  this.buildChains = buildChains;
};

// Utilizing Honor's Method
function betterHash(string) {
  var H = 37;
  var total = 0;
  for (var i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total += this.table.length - 1;
  }
  return parseInt(total);
}

// If two Keys generate the same hash value, each Key can be stored
// at a different position of the secondary Array.

// put for separate chaining
function put(key, data) {
  var pos = this.betterHash(key);
  var index = 0;
  // Attempts to store the data in the  first cell of the chain at
  // the hashed position.
  if (this.table[pos][index] == undefined) {
    this.table[pos][index] = data;
    ++index;
  } else {
    while (this.table[pos][index] != undefined) {
      ++index;
    }
    // Store the data in the next empty space found.
    this.table[pos][index] = data;
  }
}

// Assigns an empty array to each array element of the hash table.
// This empty array is the Secondary Array to store keys with same hashed value.
function buildChains() {
  for (var i = 0; i < this.table.length; ++i) {
    this.table[i] = new Array();
  }
}

// get for separate chaining
function get(key) {
  var index = 0;
  var pos = this.betterHash(key);
  if (this.table[pos][index] == key) {
    return this.table[pos][index + 2];
  }
  // index += 2;
  else {
    while (this.table[pos][index] != key) {
      index += 2;
    }
    return this.table[pos][index + 1];
  }
  return undefined;
}

function showDistro() {
  var n = 0;
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i][0] != undefined) {
      console.log(i + ': ' + this.table[i]);
    }
  }
}

var hashtable = new HashTable();
hashtable.buildChains();
// prettier-ignore
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan","John Smith","Sandra Dee"];
for (var i = 0; i < someNames.length; ++i) {
  hashtable.put(someNames[i], someNames[i]); // Insert into HashTable
}
hashtable.showDistro();

// Demonstrate Retrieving from HashTable:
// NB: I couldn't get the get to work when a value wasn't found.
// console.log(hashtable.get('Jonathan'));
