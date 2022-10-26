import Node from './Node';

// SinglyLinkedList class structure
class SinglyLinkedList {
    constructor() {
        // head of the list
        this.head = null;
        // tail of the list
        this.tail = null;
        // length of the list
        this.length = 0;
    }

    // add new node to the end of the list
    push(val) { 
        let newNode = new Node(val);
        // if there is no head, set head and tail to be the new node
        if (!this.head) {
            // set head and tail to be the new node
            this.head = newNode;
            // set tail to be the new node
            this.tail = this.head;
        } else {
            // set the next property on the tail to be the new node
            this.tail.next = newNode;
            // set the tail property on the list to be the newly created node
            this.tail = newNode;
        }
        // increment the length by one
        this.length++;
        // return the linked list
        return this;
    }

    // traverse the list
    traverse() {
        // start from the head
        let current = this.head;
        // loop until current is null
        while (current) {
            // print the value of the node
            console.log(current.val);
            // move to the next node
            current = current.next;
        }
    }

    // remove the last node from the list
    pop() {
        // if there is no head, return undefined
        if (!this.head) return undefined;
        // start from the head
        let current = this.head;
        // loop until current.next is tail
        while (current.next !== this.tail) {
            // move to the next node
            current = current.next;
        }
        // set the tail to be the current node
        this.tail = current;
        // set the next property of the tail to be null
        this.tail.next = null;
        // decrement the length by one
        this.length--;
        // if the length is zero, set the head and tail to be null
        if (this.length === 0) {
            // set the head to be null
            this.head = null;
            // set the tail to be null
            this.tail = null;
        }
        // return the value of the node
        return current.val;
    }

    // remove the first node from the list
    shift() {
        // if there is no head, return undefined
        if (!this.head) return undefined;
        // store the current head in a variable
        let currentHead = this.head;
        // set the head to be the next of the current head
        this.head = currentHead.next;
        // decrement the length by one
        this.length--;
        // if the length is zero, set the tail to be null
        if (this.length === 0) this.tail = null;
        // return current pointer to new node head
        return currentHead;
    }

    // add new node to the beginning of the list
    unshift(val) {
        // create a new node
        let newNode = new Node(val);
        // if there is no head, set head and tail to be the new node
        if (!this.head) {
            // set head and tail to be the new node
            this.head = newNode;
            // set tail to be the new node
            this.tail = this.head;
        } else {
            // set the next property on the new node to be the current head
            newNode.next = this.head;
            // set the head property on the list to be the newly created node
            this.head = newNode;
        }
        // increment the length by one
        this.length++;
        // return the linked list
        return this;
    }

    // get the node at the specified index
    get(index) {
        // if the index is less than zero or greater than or equal to the length, return null
        if (index < 0 || index >= this.length) return null;
        // start from the head
        var counter = 0;
        var current = this.head;
        // loop until counter is equal to index
        while (counter !== index) {
            // move to the next node
            current = current.next;
            // increment the counter
            counter++;
        }
    }
    
    // change the value of the node based on its position in the list
    set(index, val) {   
        // get the node at the specified index
        var foundNode = this.get(index);
        // if the node is found, set the value of that node to be the value passed to the function and return true
        if (foundNode) {
            // set the value of the node
            foundNode.val = val;
            // return true
            return true;
        }
        // if the node is not found, return false
        return false;
    } 

    // insert a node at a specific position
    insert(index, val) {
        // if the index is less than zero or greater than the length, return false
        if (index < 0 || index > this.length) return false;
        // if the index is the same as the length, push a new node to the end of the list
        if (index === this.length) return !!this.push(val);
        // if the index is 0, unshift a new node to the start of the list
        if (index === 0) return !!this.unshift(val);
        // create a new node
        var newNode = new Node(val);
        // get the node at the index - 1
        var prev = this.get(index - 1);
        // set the next property on that node to be the new node
        var temp = prev.next;
        prev.next = newNode;
        // set the next property on the new node to be the previous next
        newNode.next = temp;
        // increment the length
        this.length++;
        // return true
        return true;
    }

    // remove a node at a specific position
    remove(index) {
        // if the index is less than zero or greater than the length, return undefined
        if (index < 0 || index >= this.length) return undefined;
        // if the index is the same as the length - 1, pop
        if (index === this.length - 1) return this.pop();
        // if the index is 0, shift
        if (index === 0) return this.shift();
        // get the node at the index - 1
        var previousNode = this.get(index - 1);
        // set the next property on that node to be the next of the next node
        var removed = previousNode.next;
        previousNode.next = removed.next;
        // decrement the length
        this.length--;
        // return the value of the node removed
        return removed;
    }


}

export default SinglyLinkedList;