var HashTable = function() {
  this.table = new Array(137);
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  this.buildChains = buildChains;
};

// Hashes the Key and uses that Info to stores the data in the position of the table
// computed by the hash function.
//
// The first cell stores the key and the adjacent cell of the chain stores the value.
function put(key, data) {
  var pos = this.betterHash(key);
  var index = 0;
  if (this.table[pos][index] == undefined) {
    // Attempt to Store Data in the first cell of the chain
    // at the Hashed Position.
    this.table[pos][index + 1] = data;
    ++index;
  } else {
    // If not Empty, Search for the First Open Cell and Store the Data There;
    while (this.table[pos][index] != undefined) {
      ++index;
    }
    this.table[pos][index] = data;
  }
}

// get() to retrieve data stored in the Hash function
// The get() must hash the Key to Determine where the Data is stored.
function get(key) {
  var index = 0;
  var hash = this.betterHash(key);
  if ((this.table[hash][index] = key)) {
    return this.table[hash][index + 1];
    index += 2;
  } else {
    while (this.table[hash][index] != key) {
      index += 2;
    }
    return this.table[hash][index + 1];
  }
  return undefined;
}

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

/**************************************************
 *
 *  METHODS FOR SOLVING COLLISIONS:
 *
 *************************************************/

// 1. Seprate Chaining:
// Defn: EACH Array Element of a Hash Table Stores another Data Structure, such as
// another Array(Secondary Array) which is then used to Store KEYS.
//
// If two Keys generate the Same Hash Value, Each Key can be Stored in a Different
// Position in the Secondary Array.

// Each ELement in the Hash Table Stores a Secondary Array:
function buildChains() {
  for (var i = 0; i < this.table.length; ++i) {
    this.table[i] = new Array();
  }
}

// Modify the showDistribution() to recognize the HashTable is now a
//  Multi-Dimensional Array
function showDistro() {
  var n = 0;
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i][0] != undefined) {
      console.log(i + ': ' + this.table[i]);
    }
  }
}

// @Example: Using separate chaining to avoid collisions
var hTable = new HashTable();
hTable.buildChains();
// prettier-ignore
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();
