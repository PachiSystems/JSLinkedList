JSLinkedList
============

Implementation of LinkedList in JavaScript. Eventually will emulate Java's LinkedList type.

## Methods

```add(data)``` Adds ```data``` at the end of the linked list. Returns null.
```item(index)``` Returns the item at the specified zero-based index. Returns the data from the node at the index specified.
```remove(index)``` Removes the item at the specified zero-based index. Returns the data from the removed node.
```insertAsFirst(data)``` Adds ```data``` at the beginning of the linked list. Returns null.
```insertAfter(item,data)``` Inserts ```data``` after matching the ```item``` with data stored in a node. Return null.
```sort(function)``` Sorts the linked list based on the function passed. For example, ascending order would be sort(function(a,b) { return a > b} );
```toString()``` Returns a string representation of the linked list. Note: Does not expand objects/arrays.