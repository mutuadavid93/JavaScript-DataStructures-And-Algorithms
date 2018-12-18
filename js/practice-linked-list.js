/*************************************
 *
 *  INSERT "Mumbai" into Linked List
 *
 ************************************/

function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  this.head = new Node('head');
}

// We first find the NodeElement we looking for; e.g. item = "head".
LinkedList.prototype.find = function(item) {
  var currNode = this.head; // currNode = {element: "head", next: null}

  // Navigate a Linked List:
  while (currNode.element != item) {
    // currNode = {element: "head", next: {element: "newElement", next: null}}
    currNode = currNode.next;
  }
  return currNode; // {element: "newElement", next: null}
};

// The actual Insert Function
LinkedList.prototype.insert = function(newElement, item) {
  // NB: All newNodes Start with next: null
  // i.e.
  // newNode = {element: "newElement", next: null}
  var newNode = new Node(newElement);

  var afterNode = this.find(item); // afterNode = {element: "head", next: null}

  // 1. New node’s next property is set to the value of the next property of the “after” node.
  newNode.next = afterNode.next; // now newNode next: null(The "head" Node next property)

  // 2. Then the “after” node’s next property is set to a reference to the new node.
  // @Syntax:
  // afterNode = {element: "head", next: {element: "newElement", next: null}}
  afterNode.next = newNode;
};

// Display Elements of the Linked List:
LinkedList.prototype.display = function() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    // We access the element property of the node that the current node is pointing to.
    var currNodePointingToNode = currNode.next.element;

    // Do whatever you need here:
    console.log(currNodePointingToNode);

    // Increment: As long as next property isn't null
    currNode = currNode.next;
  }
};

// find Previous Node to change it's next property;
LinkedList.prototype.findPrevious = function(item) {
  var currNode = this.head;

  // Loop as long as the end of list isn't reached(next == null @listend)
  // and it's not what We have under item.
  while (!(currNode.next == null) && currNode.next.element != item) {
    // Grab that element under next property and update currNode Object.
    currNode = currNode.next;
  }
  return currNode;
};

LinkedList.prototype.remove = function(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    // @prevNode.next(i.e. removedNode): Link is pointed to null implicitly.
    //
    // The link of the node before(i.e. @prevNode) the
    // removed node(@prevNode.next) is redirected to point to the node the removed node is
    // pointing to(@prevNode.next.next),
    prevNode.next = prevNode.next.next; // Link Redirection.
  }
};

// Main Program:
var cities = new LinkedList();

cities.insert('Mumbai', 'head');
cities.remove('Duban', 'Mumbai');
