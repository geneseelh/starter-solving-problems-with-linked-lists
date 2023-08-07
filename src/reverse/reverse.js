const LinkedList = require("../lib/linkedList");

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list) {
    const reversedList = new LinkedList();
    const node = list.head;

    //while node is not null
    while (node) {
        // insert node value at head of reversedList
        reversedList.insertAtHead(node.value);
        // move the node pointer to the next node
        node = node.next;
    }
    // return the new reversedList
    return reversedList;
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {}

module.exports = { reverseIterative, reverseRecursive };
