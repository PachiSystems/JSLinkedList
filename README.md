JSLinkedList
============

Implementation of LinkedList in JavaScript. Eventually will emulate JavaSE 7's LinkedList type.

## Current version: 0.37.2

Version 1 will be considered ready when all of the items of the Method Summary are implemented.

Enhanced features are frozen at this time. But please make a feature request to be included in version 2 to enhance the LinkedList.

## Field Summary

- modCount - Number of times the list has been structurally modified. Used internally only at present until I can figure out a way to make it protected.

## Constructor Summary

<table>
	<tr>
		<th>Constructor</th>
		<th>Description</th>
		<th>Version Included</th>
	<tr>
	<tr>
		<td>LinkedList()</td>
		<td>Constructs an empty list</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>LinkedList(Collection)</td>
		<td>Constructs a list contianing Elements of the specified collection in the order they are returned by the collection's itterator.</td>
		<td></td>
	</tr>
</table>

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
		<td>bool</td>
		<td>add(Element)</td>
		<td>Adds the specified Element to the end of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>bool</td>
		<td>add(index, Element)</td>
		<td>Adds the specified Element at the specified position in the list. Does not replace the Element.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>bool</td>
		<td>allAll(Collection)</td>
		<td>Appends all of the elmeents in the specified collection to the end of the list, in the order that they are returned by the specified collection's itterator.</td>
		<td></td>
	</tr>
	<tr>
		<td>bool</td>
		<td>addAll(index, Collection)</td>
		<td>Inserts all of the elments in the specified collection into the list, starting at the specified position.</td>
		<td></td>
	</tr>
	<tr>
		<td>bool</td>
		<td>addFirst(Element)</td>
		<td>Inserts the specified Element at the beginning of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>bool</td>
		<td>addLast(Element)</td>
		<td>Appends the specified Element to the end of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>void</td>
		<td>clear()</td>
		<td>Removes all of the Elements from the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Object</td>
		<td>clone()</td>
		<td>Returns a shallow copy of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>bool</td>
		<td>contains(Object)</td>
		<td>Returns true if the list contains the specified object.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Iterator</td>
		<td>descendingIterator()</td>
		<td>Returns an iterator over the Elements in the deque in reverse sequential order.</td>
		<td></td>
	</tr>
	<tr>
		<td>Element</td>
		<td>Element()</td>
		<td>Returns, but does not remove, the head (first Element) of this list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>get(index)</td>
		<td>Returns the Element at the specified index.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>getFirst()</td>
		<td>Returns the first Element in the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>getLast()</td>
		<td>Returns the last Element in the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>int</td>
		<td>indexOf(Object)</td>
		<td>Returns the index of the first occurrence of the specified object in the list, or -1 if the list doesn't contain the object.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>int</td>
		<td>lastIndexOf(Object)</td>
		<td>Returns the index of the last occurance of the specified object in the list, or -1 if this list does not contain the object.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>ListIterator</td>
		<td>listIterator(index)</td>
		<td>Returns a list-iterator of the Elements in the list (in proper sequence), starting at the specified position in the list.</td>
		<td></td>
	</tr>
	<tr>
		<td>bool</td>
		<td>offer(Element)</td>
		<td>Adds the specified Element as the tail (last Element) of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>bool</td>
		<td>offerFirst(Element)</td>
		<td>Adds the specified Element at the front of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>bool</td>
		<td>offerLast(Element)</td>
		<td>Adds the specified Elements at the end of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>peek()</td>
		<td>Retrieves, but does not remove, the head (first Element) of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>peekFirst()</td>
		<td>Retrieves, but does not remove, the first Element of the list, or returns null if the list is empty.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>peekLast()</td>
		<td>Retrieves, but does not remove, the last Element of the list, or returns null if the list is empty.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>poll()</td>
		<td>Retrieves and removes the head (first Element) of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>pollFirst()</td>
		<td>Retrieves and removes the first Element of the list, or returns null if the list is empty.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>pollLast()</td>
		<td>Retrieves and removes the last Element of the list, or returns null if the list is empty.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>pop()</td>
		<td>Pops an Element from the stack represented by this list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>bool</td>
		<td>push(Element)</td>
		<td>Pushes an Element onto the stack represented by the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>remove()</td>
		<td>Retrieves and removes the head (first Element) of the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>remove(index)</td>
		<td>Retrieves and removes the Element at the specified index.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>bool</td>
		<td>remove(Object)</td>
		<td>Removes the first occurance of the specified object from the list. If present, returns true.</td>
		<td></td>
	</tr>
	<tr>
		<td>Element</td>
		<td>removeFirst()</td>
		<td>Retrieves and removes the first Element from the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>bool</td>
		<td>removeFirstOccurrence(Object)</td>
		<td>Removes the first occurance of the specified object in the list (when traversing from head to tail).</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>removeLast()</td>
		<td>Removes and returns the last Element in the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>bool</td>
		<td>removeLastOccurrence(Object)</td>
		<td>Removes the last occurance of the specified object in the list (when traversing from head to tail).</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Element</td>
		<td>set(index, Element)</td>
		<td>Replaces the Element at the specified position in the list with the specified Element. Returns the Element previously at the specified position.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>int</td>
		<td>size()</td>
		<td>Returns the number of Elements in the list.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>Object</td>
		<td>toArray()</td>
		<td>Returns an array containing all of the Elements in the list in proper sequence (from head to tail).</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>string</td>
		<td>toString()</td>
		<td>Returns a string representation of the list. The string representation consists of a list of the list's Elements in order from head to tail, enclosed in square brackets ("[]"). Adjacent Elements are separated by the characters ", " (comma and space). Note: Does not expand objects/arrays.</td>
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
		<td>bool</td>
		<td>insertAfter(index,Element)</td>
		<td>Adds the specified Element to the list one position after the specified index.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>bool</td>
		<td>insertBefore(index,Element)</td>
		<td>Adds the specified Element to the list one position before the specified index.</td>
		<td>0.37.0</td>
	</tr>
	<tr>
		<td>void</td>
		<td>sort(Function)</td>
		<td>Sorts the list based on the function passed in the same manner as JavaScript's Array.prototype.sort.</td>
		<td>0.37.0</td>
	</tr>
</table>