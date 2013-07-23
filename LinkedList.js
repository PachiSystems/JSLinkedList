/*
 * LinkedList for JavaScript.
 * Eventually this will completely emulate a regular Java linked list.
 * Copyright 2013, Brian Milton
 * Version: 0.38.3 (22nd July 2013)
 */
(function() {
	
	var MODCOUNT = 0;  // Number of times list has been strcurally modified.
	
	function LinkedList() {
		this._length = 0;
		this._head = null;
		this._tail = null;
	}
	
	/*
	 * Adds the specified element to the end of the list.
	 * Adds the specified element at the specified position in the list. Does not replace the element.
	 * @return {bool}
	 */
	LinkedList.prototype.add = function(index,element) {
		
		if(element) {
			// There is an index and an element. Insert at specified index.
			var node = {
					data : element,
					next : null
				};
			var current = this._head;
			var i = 0;
			var previous;
			
			// Check for out of bounds.
			if(index > -1 && index < this._length) {
				while (i++ < index) {
					previous = current;
					current = current.next;
				}
				// Index reached insert the new node here.
				node.next = current;
				previous.next = node;
			} else {
				// Index out of bounds.
				return false;
			}
			
			MODCOUNT++;
			
			return true;
			
		} else {
			var node = {
					data : index,
					next : null
				};
			var current;
	
			// Special case: No items in list.
			if (this._head === null) {
				
				this._head = node;
				this._tail = node;
				
			} else {
				
				// Add as the last item in the list.
				current = this._tail;
				current.next = node;
				this._tail = node;
				
			}
	
			// Update the count.
			this._length++;
			
			MODCOUNT++;
			
			return true;
		}
		
		return false;
		
	};
	
	/*
	 * Inserts the specified element at the beginning of the list.
	 * @return {bool}
	 */
	LinkedList.prototype.addFirst = function(data) {
		var node = {
				data: data,
				next: this._head
			}
			
			// Set node at the head.
			this._head = node;
			this._length++;
			MODCOUNT++;
			return true;
	};
	
	/*
	 * Appends the specified element to the end of the list.
	 * @return {bool}
	 */
	LinkedList.prototype.addLast = function(data) {
		return this.add(data);
	};
	
	/*
	 * Removes all of the elements from the list.
	 * @return {void}
	 */
	LinkedList.prototype.clear = function() {
		if(this._length === 0) {
			return;
		}
		var node = {data:null,next:null}
		this._head = null;
		this._tail = null;
		this._length = 0;
		MODCOUNT++;
		return;
	};
	
	/*
	 * Returns a shallow copy of the list.
	 * @return {object}
	 */
	LinkedList.prototype.clone = function() {
		// Doesn't clone functionality, but copies everything else pretty quickly.
		return JSON.parse(JSON.stringify(this));
	};
	
	/*
	 * Returns true if the list contains the specified object.
	 * @return {bool}
	 */
	LinkedList.prototype.contains = function(data) {
		var current = this._head;
		while(current !== null) {
			if(current.data === data) {
				return true;
			}
			current = current.next;
		}
		
		return false;
	};
	
	/*
	 * Returns, but does not remove, the head (first element) of this list.
	 * @return {element}
	 */
	LinkedList.prototype.element = function() {
		return this._head.data;
	};
	
	/*
	 * Returns the element at the specified index.
	 * @return {element}
	 */
	LinkedList.prototype.get = function(index) {

		// Check for out-of-bounds
		if (index > -1 && index < this._length) {
			
			var current = this._head, i = 0;

			// Itterate until we get to the index.
			while (i++ < index) {
				current = current.next;
			}
			
			// Return data at index.
			return current.data;
			
		} else {
			// Index out of bounds.
			return null;
		}
	};
	
	/*
	 * Returns the first element in the list.
	 * @return {element}
	 */
	LinkedList.prototype.getFirst = function() {
		return this._head.data;
	};
	
	/*
	 * Returns the last element in the list.
	 * @return {element}
	 */
	LinkedList.prototype.getLast = function() {
		return this._tail.data;
	};
	
	/*
	 * Returns the index of the first occurrence of the specified object in the list, or -1 if the list doesn't contain the object.
	 * @return {element}
	 */
	LinkedList.prototype.indexOf = function(data) {
		var current = this._head;
		var index = 0;
		
		while(current !== null) {
			if (current.data === data) {
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	};
	
	/*
	 * Adds the specified element to the list one position after the specified index.
	 * @return {bool}
	 */
	LinkedList.prototype.insertAfter = function(index, data) {
		return this.add(index+1,data);
	};
	
	/*
	 * Adds the specified element to the list one position before the specified index.
	 * @return {bool}
	 */
	LinkedList.prototype.insertBefore = function(index, data) {
		return this.add(index-1,data);
	};
	
	/*
	 * Returns the index of the last occurance of the specified object in the list, or -1 if this list does not contain the object.
	 * @return {element}
	 */
	LinkedList.prototype.lastIndexOf = function(data) {
		var current = this._head;
		var lastIndex = currentIndex = -1;
		
		while(current !== null) {
			currentIndex++;
			if (current.data === data) {
				lastIndex = currentIndex;
			}
			current = current.next;
		}
		return lastIndex;
	};
	
	/*
	 * Adds the specified element as the tail (last element) of the list.
	 * @return {bool}
	 */
	LinkedList.prototype.offer = function(data) {
		return this.add(data);
	};
	
	/*
	 * Adds the specified element at the front of the list.
	 * @return {bool}
	 */
	LinkedList.prototype.offerFirst = function(data) {
		return this.addFirst(data);
	};
	
	/*
	 * Adds the specified elements at the end of the list.
	 * @return {bool}
	 */
	LinkedList.prototype.offerLast = function(data) {
		return this.add(data);
	};
	
	/*
	 * Retrieves, but does not remove, the head (first element) of the list.
	 * @return {element}
	 */
	LinkedList.prototype.peek = function() {
		return this._head.data;
	};
	
	/*
	 * Retrieves, but does not remove, the first element of the list, or returns null if the list is empty.
	 * @return {element}
	 */
	LinkedList.prototype.peekFirst = function() {
		return this._head.data;
	};
	
	/*
	 * Retrieves, but does not remove, the last element of the list, or returns null if the list is empty.
	 * @return {element}
	 */
	LinkedList.prototype.peekLast = function() {
		return this._tail.data;
	};
	
	/*
	 * Retrieves and removes the head (first element) of the list.
	 * @return {element}
	 */
	LinkedList.prototype.poll = function() {
		return this.removeFirst();
	};
	
	/*
	 * Retrieves and removes the head (first element) of the list.
	 * @return {element}
	 */
	LinkedList.prototype.pollFirst = function() {
		return this.removeFirst();
	};
	
	/*
	 * Retrieves and removes the last element of the list, or returns null if the list is empty.
	 * @return {element}
	 */
	LinkedList.prototype.pollLast = function() {
		return this.removeLast();
	};
	
	/*
	 * Pops an element from the stack represented by this list.
	 * IMPORTANT: LinkedLists are LIFO
	 * @return {element}
	 */
	LinkedList.prototype.pop = function() {
		return this.removeFirst();
	};
	
	/*
	 * Pushes an element onto the stack represented by the list.
	 * IMPORTANT: LinkedLists are LIFO
	 * @return {bool}
	 */
	LinkedList.prototype.push = function(data) {
		return this.addFirst(data);
	};
	
	/*
	 * Retrieves and removes the head (first element) of the list.
	 * Retrieves and removes the element at the specified index.
	 * @return {element}
	 */
	LinkedList.prototype.remove = function(index) {
		
		if(!index) index = 0;
		
		// Check for out-of-bounds values
		if (index > -1 && index < this._length) {
			var current = this._head, previous, i = 0;

			// Special case: Remove first item
			if (index === 0) {
				
				// Put the node at the head.
				this._head = current.next;
				
			} else {

				// Find the right location
				while (i++ < index) {
					previous = current;
					current = current.next;
				}

				// Skip over the item to remove
				previous.next = current.next;
				
				// Special case: Remove last item
				if (index == this._length - 1){
					this._tail = previous;
				}
			}

			// Decrement the length
			this._length--;
			
			MODCOUNT++;

			// Return the value
			return current.data;
			
		} else {
			// Index out of bounds.
			return null;
		}
	};
	
	/*
	 * Retrieves and removes the first element from the list.
	 * @return {element}
	 */
	LinkedList.prototype.removeFirst = function() {
		var current = this._head;
		var nextNode = current.next;
		this._head = nextNode;
		this._length--;
		MODCOUNT++;
		return current.data;
	};
	
	/*
	 * Removes the first occurance of the specified object in the list (when traversing from head to tail).
	 * @return {bool}
	 */
	LinkedList.prototype.removeFirstOccurrence = function(data) {
		if (this.remove(this.indexOf(data))) {
			return true;
		} else {
			return false;
		}
	};
	
	/*
	 * Removes and returns the last element in the list.
	 * @return {element}
	 */
	LinkedList.prototype.removeLast = function() {
		var current = this._head;
		while(current.next !==null ) {
			previous = current;
			current = current.next;
		}
		// Last reached.
		previous.next = null;
		this._tail = previous;
		this._length--;
		MODCOUNT++;
		return current.data;
	};
	
	/*
	 * Removes the last occurance of the specified object in the list (when traversing from head to tail).
	 * @return {bool}
	 */
	LinkedList.prototype.removeLastOccurrence = function(data) {
		if (this.remove(this.lastIndexOf(data))) {
			return true;
		} else {
			return false;
		}
	};
	
	/*
	 * Replaces the element at the specified position in the list with the specified element.
	 * Returns the element previously at the specified position.
	 * @return {bool}
	 */
	LinkedList.prototype.set = function(index,data) {
		var node = {
				data: data,
				next: null
		};
		var current = this._head;
		var previous;
		var i = 0;
		while(i++ < index) {
			previous = current;
			current = current.next;
		}
		// At the index specified.
		node.next = current.next;
		previous.next = node;
		MODCOUNT++;
		return current.data;
		
	};
	
	/*
	 * Removes and returns the last element in the list.
	 * @return {integer}
	 */
	LinkedList.prototype.size = function() {
		return this._length;
	};
	
	/*
	 * Sorts the list according to a function passed.
	 * @return {boolean}
	 */
	LinkedList.prototype.sort = function(sortFunction) {
		// Return immediately if the list is empty.
		if(this._length === 0) {
			return false;
		} else {
			//var numops = 0;
			var sortDone = false;
			// While the sort is not complete...
			while(!sortDone) {
				// Set sort to complete now. If it's not done, we'll reset it later.
				sortDone = true;
				var sortTemp = "";
				var current = this._head;
				do {
					// Check to see if this is the end of the list.
					if(current.next !== null) {
						var nextNode = current.next;
						// If not, apply the function passed on this and the next node.
						var sortResult = sortFunction(current.data,nextNode.data);
						if(sortResult === true || sortResult > 0) {
							// Result of the function is true...
							// Sort isn't complete (nextNode is not null)
							sortDone = false;
							// Store the current data...
							sortTemp = current.data;
							// Replace the current data with the data after.
							current.data = nextNode.data;
							// Store the old current data in the nextNode.
							nextNode.data = sortTemp;
							//numops++;
							//console.log(this.toString());
						}
					}
					// Move up the list.
					current = current.next;
				} while (current !== null);
				// End of the list reached.
				current = this._tail;
			}
			//console.log("Done in "+numops+" operations");
			MODCOUNT++;
			return true;
		}
	};
	
	/*
	 * Adds an element to the list while maintaining a sorted order.
	 * @return {void} 
	 */
	LinkedList.prototype.sortedAdd = function(element,sortFunction) {
		var node = {data:element,next:null};
		if(this._length === 0){
			this._head = node;
			this._tail = node;
			MODCOUNT++;
			this._length++;
			return;
		}
		var current = this._head;
		var direction = direction || "asc";
		var previous = null;
		var i=0;
		while(i++ < this._length) {
			if (sortFunction(current.data,node.data)) {
				
				if(previous === null) {
					// Special case: Insert at head.
					node.next = this._head;
					this._head = node;
					MODCOUNT++;
					this._length++;
					return;
				}
				
				node.next = current;
				previous.next = node;
				MODCOUNT++;
				this._length++;
				return;
			}
			previous = current;
			current = current.next;
		}
		// Didn't match any. Insert at tail.
		current = this._tail;
		current.next = node;
		this._tail = node;
		MODCOUNT++;
		this._length++;
		return;
	}
	
	/*
	 * Returns an array containing all of the elements in the list in proper sequence (from head to tail).
	 * @returns {object}
	 */
	LinkedList.prototype.toArray = function() {
		var arr = [];
		var current = this._head;
		
		while(current !== null) {
			arr.push(current.data);
			current = current.next;
		}
		
		return arr;
	};
	
	/*
	 * Returns a string representation of the list with HTML formatting.
	 * @returns {string} All items in the list.
	 */
	LinkedList.prototype.toString = function() {
		// Returns a string with HTML formatting.
		var str = "";
		if(this._length === 0) {
			str = null;
			return str;
		} else {
			var nodeTemp = current = this._head;
			do {
				str += "[" + current.data;
				if (current.next !== null) {
					var nxt = current.next;
					str += "], ";
				} else str += "]";
				
				current = current.next;
				
			} while (current !== null);

			return str;
		}
	};
	
	window.LinkedList = LinkedList;
})();