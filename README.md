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

<table>
	<tr>
		<th>Return</th>
		<th>Method Name</th>
		<th>Method Description</th>
		<th>Version included</th>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```add(Element)```</td>
		<td>Adds the specified element to the end of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```add(index, Element)```</td>
		<td>Adds the specified element at the specified position in the list. Does not replace the element.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```allAll(Collection)```</td>
		<td>Appends all of the elmeents in the specified collection to the end of the list, in the order that they are returned by the specified collection's itterator.</td>
		<td></td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```addAll(index, Collection)```</td>
		<td>Inserts all of the elments in the specified collection into the list, starting at the specified position.</td>
		<td></td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```addFirst(Element)```</td>
		<td>Inserts the specified element at the beginning of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```addLast(Element)```</td>
		<td>Appends the specified element to the end of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>VOID</td>
		<td>```clear()```</td>
		<td>Removes all of the elements from the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>OBJ</td>
		<td>```clone()```</td>
		<td>Returns a shallow copy of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```contains(Object)```</td>
		<td>Returns ```true``` if the list contains the specified object.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ITERATOR</td>
		<td>```descendingIterator()```</td>
		<td>Returns an iterator over the elements in the deque in reverse sequential order.</td>
		<td></td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```element()```</td>
		<td>Returns, but does not remove, the head (first element) of this list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```get(index)```</td>
		<td>Returns the element at the specified index.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```getFirst()```</td>
		<td>Returns the first element in the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```getLast()```</td>
		<td>Returns the last element in the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>INT</td>
		<td>```indexOf(Object)```</td>
		<td>Returns the index of the first occurrence of the specified object in the list, or ```-1``` if the list doesn't contain the object.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>INT</td>
		<td>```lastIndexOf(Object)```</td>
		<td>Returns the index of the last occurance of the specified object in the list, or ```-1``` if this list does not contain the object.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>LISTITERATOR</td>
		<td>```listIterator(index)```</td>
		<td>Returns a list-iterator of the elements in the list (in proper sequence), starting at the specified position in the list.</td>
		<td></td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```offer(Element)```</td>
		<td>Adds the specified element as the tail (last element) of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```offerFirst(Element)```</td>
		<td>Adds the specified element at the front of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```offerLast(Element)```</td>
		<td>Adds the specified elements at the end of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```peek()```</td>
		<td>Retrieves, but does not remove, the head (first element) of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```peekFirst()```</td>
		<td>Retrieves, but does not remove, the first element of the list, or returns ```null``` if the list is empty.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```peekLast()```</td>
		<td>Retrieves, but does not remove, the last element of the list, or returns ```null``` if the list is empty.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```poll()```</td>
		<td>Retrieves and removes the head (first element) of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```pollFirst()```</td>
		<td>Retrieves and removes the first element of the list, or returns ```null``` if the list is empty.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```pollLast()```</td>
		<td>Retrieves and removes the last element of the list, or returns ```null``` if the list is empty.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```pop()```</td>
		<td>Pops an element from the stack represented by this list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```push(Element)```</td>
		<td>Pushes an element onto the stack represented by the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```remove()```</td>
		<td>Retrieves and removes the head (first element) of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```remove(index)```</td>
		<td>Retrieves and removes the element at the specified index.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```remove(Object)```</td>
		<td>Removes the first occurance of the specified object from the list. If present, returns ```true```.</td>
		<td></td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```removeFirst()```</td>
		<td>Retrieves and removes the first element from the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```removeFirstOccurrence(Object)```</td>
		<td>Removes the first occurance of the specified object in the list (when traversing from head to tail).</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```removeLast()```</td>
		<td>Removes and returns the last element in the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```removeLastOccurrence(Object)```</td>
		<td>Removes the last occurance of the specified object in the list (when traversing from head to tail).</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ELEMENT</td>
		<td>```set(index, Element)```</td>
		<td>Replaces the element at the specified position in the list with the specified element. Returns the element previously at the specified position.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>INT</td>
		<td>```size()```</td>
		<td>Returns the number of elements in the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>OBJ</td>
		<td>```toArray()```</td>
		<td>Returns an array containing all of the elements in the list in proper sequence (from head to tail).</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>STRING</td>
		<td>```toString()```</td>
		<td>Returns a string representation of the list. The string representation consists of a list of the list's elements in order from head to tail, enclosed in square brackets ("[]"). Adjacent elements are separated by the characters ", " (comma and space). Note: Does not expand objects/arrays.</td>
		<td>0.37.0</td>
	</tr>
</table>

## Enhancements

<table>
	<tr>
		<th>Return</th>
		<th>Method Name</th>
		<th>Method Description</th>
		<th>Version Included</th>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```insertAfter(index,Element)```</td>
		<td>Adds the specified element to the list one position after the specified index.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>BOOL</td>
		<td>```insertBefore(index,Element)```</td>
		<td>Adds the specified element to the list one position before the specified index.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>VOID</td>
		<td>```sort(Function)```</td>
		<td>Sorts the list based on the function passed in the same manner as JavaScript's Array.prototype.sort.</td>
		<td>0.37.0</td>
	</tr>
</table>