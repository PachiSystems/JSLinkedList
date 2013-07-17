/*
 * LinkedList for JavaScript.
 * Eventually this will completely emulate a regular Java linked list.
 * Copyright 2013, Brian Milton
 * 
 */
function LinkedList() {
	this._length = 0;
	this._head = null;
	this._last = null;
};

LinkedList.prototype = {
	
	/*
	 * Appends a new node to the end of the list.
	 * @return {null}
	 */
	append : function(data) {

		// Create a new node.
		var node = {
				data : data,
				next : null
			},

			// Used to traverse the structure
			current;

		// Special case: No items in list.
		if (this._head === null) {
			
			this._head = node;
			this._last = node;
			
		} else {
			
			// Add as the last item in the list.
			current = this._last;
			current.next = node;
			this._last = node;
			
		}

		// Update the count.
		this._length++;
	},

	/*
	 * Returns the data of a node at the specified zero-based index.
	 * @return {*}
	 */
	item : function(index) {

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
	},

	/*
	 * Removes a node at the specified zero-based index.
	 * @return {null}
	 */
	remove : function(index) {

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
					this._last = previous;
				}
			}

			// Decrement the length
			this._length--;

			// Return the value
			return current.data;
			
		} else {
			
			// Index out of bounds.
			return null;
		}
	},
	
	/*
	 * Inserts a new node at the beginning of the list.
	 * @return {null}
	 */
	insertAsFirst : function(data) {
		var node = {
				data: data,
				next: this._head
			}
			
			// Set node at the head.
			this._head = node;
			this._length++;
	},
	
	/*
	 * Inserts a new node after matching an item passed.
	 * @return {null}
	 */
	insertAfter : function(item, data) {
		var current = this._head;
		
		// Itterate through the list.
		while (current !== null) {
			
			// When a matching item is found...
			if(current.data === item) {
				var node = {data:data,next:current.next};
				
				// See if it's at the end...
				if(current.next === null) this.add(data);
				
				// Set the matched node to point to this node next. 
				current.next = node;
				
				// Increment the length.
				this._length++;
				
				return;
			}
			
			current = current.next;
		}
	},
	
	/*
	 * Sorts the list according to a function passed.
	 * @return {null}
	 */
	sort : function(sortFunction) {
		// Return immediately if the list is empty.
		if(this._length === 0) {
			return;
		} else {
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
						if(sortFunction(current.data,nextNode.data)) {
							// Result of the function is true...
							// Sort isn't complete (nextNode is not null)
							sortDone = false;
							// Store the current data...
							sortTemp = current.data;
							// Replace the current data with the data after.
							current.data = nextNode.data;
							// Store the old current data in the nextNode.
							nextNode.data = sortTemp;
						}
					}
					// Move up the list.
					current = current.next;
				} while (current !== null);
				// End of the list reached.
				current = this._last;
			}
		}
	},
	
	/*
	 * Returns a string representation of the list with HTML formatting.
	 * @returns {string} All items in the list.
	 */
	toString: function() {
		// Returns a string with HTML formatting.
		var str = "";
		if(this._length === 0) {
			str = null;
			return str;
		} else {
			var nodeTemp = current = this._head;
			do {
				str += "Data: " + current.data;
				if (current.next !== null) {
					var nxt = current.next;
					str += ", Next: " + nxt.data + " | ";
				} else str += ", Next: null";
				
				current = current.next;
				
			} while (current !== null);

			return str;
		}
	}
}