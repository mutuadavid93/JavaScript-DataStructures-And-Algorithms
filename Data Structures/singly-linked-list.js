/**
 * Create our Node Class to Store and Set Values into the Node
 *  NodeClass: Represents a Linked List's "Node Object".
 */
function Node(element) {
  this.element = element;
  this.next = null;
}

/**
 *  A LinkedList Class.
 *  To help Manipulate the Node's Data.
 */
// The Only Property stored in a LinkedList class,
// is a Node to represent the head of a list.
function LinkedList() {
  this.head = new Node('head');
}

// Insert a new Node after an Existing Node:
// Search through the List for an Specific "After Node", Find it and return it.
LinkedList.prototype.find = function(item) {
  var currNode = this.head;

  // Navigate a Linked List:
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
};

// The actual Insert Function
LinkedList.prototype.insert = function(newElement, item) {
  var newNode = new Node(newElement);
  var afterNode = this.find(item);

  // 1. New node’s next property is set to the value of the next property of the “after” node.
  newNode.next = afterNode.next;

  // 2. Then the “after” node’s next property is set to a reference to the new node.
  afterNode.next = newNode;
};

// Display Elements of the Linked List:
LinkedList.prototype.display = function() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    // We access the element property of the node that the current node is pointing to.
    var currNodePointingToNode = currNode.next.element;
    console.log(currNodePointingToNode);

    // Increment:
    currNode = currNode.next;
  }
};

// find Previous Node to change it's next property;
LinkedList.prototype.findPrevious = function(item) {
  var currNode = this.head;
  while (!(currNode.next == null) && currNode.next.element != item) {
    currNode = currNode.next;
  }
  return currNode;
};

LinkedList.prototype.remove = function(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    // skip the node we want to remove, then link that nextNode to our previous Node.
    prevNode.next = prevNode.next.next;
  }
};

// Main Program:
var cities = new LinkedList();

cities.insert('Mumbai', 'head');
cities.insert('Dubai', 'Mumbai');
cities.display();
console.log('---------------------');
// cities.remove('Mumbai');
// cities.display();
