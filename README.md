JSLinkedList
============

Implementation of LinkedList in JavaScript. Eventually will emulate JavaSE 7's LinkedList type.

## Current version: 0.37.2

Version 1 will be considered ready when all of the items of the Method Summary are implemented.

Enhanced features are frozen at this time. But please make a feature request to be included in version 2 to enhance the LinkedList.

## Field Summary

- [ ] ```modCount``` - Number of times the list has been structurally modified. Used internally only at present until I can figure out a way to make it protected.

## Constructor Summary

- [X] [VOID] ```LinkedList()``` - Constructs an empty list;

- [ ] [VOID] ```LinkedList(Collection)``` - Constructs a list contianing elements of the specified collection in the order they are returned by the collection's itterator.

## Method Summary

Checked items indicate working functionality. Unchecked items are not implemented as of yet. Methods taken from java.util.LinkedList implementation which can be found at http://docs.oracle.com/javase/7/docs/api/java/util/LinkedList.html 

- [X] [BOOLEAN] ```add(Element)``` - Adds the specified element to the end of the list.

- [X] [BOOLEAN] ```add(index, Element)``` - Adds the specified element at the specified position in the list. Does not replace the element.

- [ ] [BOOLEAN] ```allAll(Collection)``` - Appends all of the elmeents in the specified collection to the end of the list, in the order that they are returned by the specified collection's itterator.

- [ ] [BOOLEAN] ```addAll(index, Collection)``` - Inserts all of the elments in the specified collection into the list, starting at the specified position.

- [X] [BOOLEAN] ```addFirst(Element)``` - Inserts the specified element at the beginning of the list.

- [X] [BOOLEAN] ```addLast(Element)``` - Appends the specified element to the end of the list.

- [X] [VOID] ```clear()``` - Removes all of the elements from the list.

- [X] [OBJECT] ```clone()``` - Returns a shallow copy of the list.

- [X] [BOOLEAN] ```contains(Object)``` - Returns ```true``` if the list contains the specified object.

- [ ] [ITERATOR] ```descendingIterator()``` - Returns an iterator over the elements in the deque in reverse sequential order.

- [X] [ELEMENT] ```element()``` - Returns, but does not remove, the head (first element) of this list.

- [X] [ELEMENT] ```get(index)``` - Returns the element at the specified index.

- [X] [ELEMENT] ```getFirst()``` - Returns the first element in the list.

- [X] [ELEMENT] ```getLast()``` - Returns the last element in the list.

- [X] [INTEGER] ```indexOf(Object)``` - Returns the index of the first occurrence of the specified object in the list, or ```-1``` if the list doesn't contain the object.

- [X] [INTEGER] ```lastIndexOf(Object)``` - Returns the index of the last occurance of the specified object in the list, or ```-1``` if this list does not contain the object.

- [ ] [LISTITERATOR] ```listIterator(index)``` - Returns a list-iterator of the elements in the list (in proper sequence), starting at the specified position in the list.

- [X] [BOOLEAN] ```offer(Element)``` - Adds the specified element as the tail (last element) of the list.

- [X] [BOOLEAN] ```offerFirst(Element)``` - Adds the specified element at the front of the list.

- [X] [BOOLEAN] ```offerLast(Element)``` - Adds the specified elements at the end of the list.

- [X] [ELEMENT] ```peek()``` - Retrieves, but does not remove, the head (first element) of the list.

- [X] [ELEMENT] ```peekFirst()``` - Retrieves, but does not remove, the first element of the list, or returns ```null``` if the list is empty.

- [X] [ELEMENT] ```peekLast()``` - Retrieves, but does not remove, the last element of the list, or returns ```null``` if the list is empty.

- [X] [ELEMENT] ```poll()``` - Retrieves and removes the head (first element) of the list.

- [X] [ELEMENT] ```pollFirst()``` - Retrieves and removes the first element of the list, or returns ```null``` if the list is empty.

- [X] [ELEMENT] ```pollLast()``` - Retrieves and removes the last element of the list, or returns ```null``` if the list is empty.

- [X] [ELEMENT] ```pop()``` - Pops an element from the stack represented by this list.

- [X] [BOOL] ```push(Element)``` - Pushes an element onto the stack represented by the list.

- [X] [ELEMENT] ```remove()``` - Retrieves and removes the head (first element) of the list.

- [X] [ELEMENT] ```remove(index)``` - Retrieves and removes the element at the specified index.

- [ ] [BOOLEAN] ```remove(Object)``` - Removes the first occurance of the specified object from the list. If present, returns ```true```.

- [X] [ELEMENT] ```removeFirst()``` - Retrieves and removes the first element from the list.

- [X] [BOOLEAN] ```removeFirstOccurrence(Object)``` - Removes the first occurance of the specified object in the list (when traversing from head to tail).

- [X] [ELEMENT] ```removeLast()``` - Removes and returns the last element in the list.

- [X] [BOOLEAN] ```removeLastOccurrence(Object)``` - Removes the last occurance of the specified object in the list (when traversing from head to tail).

- [X] [ELEMENT] ```set(index, Element)``` - Replaces the element at the specified position in the list with the specified element. Returns the element previously at the specified position.

- [X] [INTEGER] ```size()``` - Returns the number of elements in the list.

- [X] [OBJECT] ```toArray()``` - Returns an array containing all of the elements in the list in proper sequence (from head to tail).

## Enhancements

- [X] [BOOLEAN] ```insertAfter(index,Element)``` - Adds the specified element to the list one position after the specified index.

- [X] [BOOLEAN] ```insertBefore(index,Element)``` - Adds the specified element to the list one position before the specified index.

- [X] [VOID] ```sort(Function)``` - Sorts the list based on the function passed in the same manner as JavaScript's Array.prototype.sort.

- [X] [STRING] ```toString()``` Returns a string representation of the list. The string representation consists of a list of the list's elements in order from head to tail, enclosed in square brackets ("[]"). Adjacent elements are separated by the characters ", " (comma and space). Note: Does not expand objects/arrays.