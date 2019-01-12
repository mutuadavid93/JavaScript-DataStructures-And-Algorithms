/*************************************
 *
 *  DOUBLY Linked List
 *
 ************************************/

var DoublyRepo = this.DoublyRepo || {};

// Create the Individual Nodes:
DoublyRepo.Node = function(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
};

DoublyRepo.LinkedList = function() {
  DoublyRepo.Node.call(this);
  this.head = new DoublyRepo.Node('head');
};

DoublyRepo.LinkedList.prototype.find = function(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
};

DoublyRepo.LinkedList.prototype.insert = function(newElement, item) {
  var newNode = new DoublyRepo.Node(newElement);
  var previousNode = this.find(item);

  // Assign the previousNode's next value to newNode next property;
  newNode.next = previousNode.next;

  // Set the newNode's previous property to point to previousNode:
  newNode.previous = previousNode;
  previousNode.next = newNode; // complete the link.
};

DoublyRepo.LinkedList.prototype.remove = function(item) {
  var toDeleteNode = this.find(item),
    b4ToDeleteNode = toDeleteNode.previous,
    afterToDeleteNode = toDeleteNode.next;

  if (!(toDeleteNode.next == null)) {
    b4ToDeleteNode.next = afterToDeleteNode; // Link Straight to "AfterNode"
    afterToDeleteNode.previous = b4ToDeleteNode; // Link Direct to "BeforeNode".
    toDeleteNode.next = null;
    toDeleteNode.previous = null;
  } else {
    // Means it's Last Node:
    b4ToDeleteNode.next = null;
    toDeleteNode.previous = null;
  }
};

// Find Last Node in Doubly Linked List:
DoublyRepo.LinkedList.prototype.findLast = function() {
  var currNode = this.head;

  while (!(currNode.next == null)) {
    currNode = currNode.next;
  }
  return currNode;
};

// Display the List Node's Data in Reverse Order:
DoublyRepo.LinkedList.prototype.displayReversed = function() {
  var currNode = this.head;
  currNode = this.findLast();

  while (!(currNode.previous == null)) {
    console.log(currNode.element);

    // Decrement After Logic:
    currNode = currNode.previous;
  }
};

/** DEMO
 *  How DO dynamically add content into Linked List from a
 *  datasource e.g. an API
 */

// Facade:
DoublyRepo.LinkedListService = (function() {
  return function(dataSource) {
    var cities = new DoublyRepo.LinkedList();

    // Create HEADER Node:
    dataSource.splice(0, 0, 'head');

    // Format Linked List Data
    var aggrigator = dataSource.reduce(function(previous, item, index) {
      var pair = dataSource.slice(index, index + 2).reverse();
      previous.push(pair);
      return previous;
    }, []);

    // Now Detach last Item:
    var indexAt = aggrigator.indexOf(aggrigator[aggrigator.length - 1]);
    aggrigator.splice(indexAt, 1);
    var resultArr = aggrigator;

    resultArr.map(function(nodeData) {
      // Add Everything Dynamically Into the Linked List:
      cities.insert.apply(cities, nodeData);
    });

    // Operations on the Linked List:
    cities.displayReversed();
    cities.remove('Iria-Itune');
    console.log('----------------');
    cities.displayReversed();
  };
})();

// prettier-ignore
var listdata = [
  'Wango','Nthingini','Riakanau','Makawani','Gategi','Karaba','Iria-Itune'
];

DoublyRepo.LinkedListService(listdata);
Object.freeze(DoublyRepo);
