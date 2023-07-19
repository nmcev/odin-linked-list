class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this._head) {
            this._head = newNode;
            this._tail = newNode;
        } else {

            this._tail.nextNode = newNode;
            this._tail = newNode
        }
    }
    prepend(value) {
        let newNode = new Node(value);
        if (!this._head) {
            this._head = newNode
            this._tail = newNode
        } else {
            newNode.nextNode = this._head;
            this._head = newNode;
        }
    }
    size() {
        let counter = 0;
        let currentNode = this._head
        while (currentNode !== null) {
            counter++;
            currentNode = currentNode.nextNode
        }
        console.log(`Size of linked list: ${counter}`);
    }
    head() {
        const head = this._head ? this._head.value : null;
        console.log(`The head of linked list: "${head}"`)
        return head;
    }

    tail() {
        const tail = this._tail ? this._tail.value : null;
        console.log(`The tail of linked list: "${tail}"`)
        return tail;
    }

    at(index) {
        let currentNode = this._head;
        let currentIndex = 0
        while (currentNode !== null) {
            if (currentIndex == index) {
                console.log(`The item at index ${index} is: "${currentNode.value}"`)
            }
            currentNode = currentNode.nextNode;
            currentIndex++;

        }
    }

    pop() {
        let currentNode = this._head
        if (!this._head) return null;

        if (!currentNode.nextNode) {
            const poppedValue = currentNode.value;
            this._head = null;
            this._tail = null;
            console.log(`Popped value is: "${poppedValue}"`);
            return poppedValue;
        }
        while (currentNode != null) {
            if (currentNode.nextNode.nextNode == null) {
                let poppedValue = currentNode.nextNode.value;
                currentNode.nextNode = null;
                this._tail = currentNode;
                console.log(`Popped value is: "${poppedValue}"`)
            }
            currentNode = currentNode.nextNode
        }
    }
    contains(value) {
        let currentNode = this._head
        while (currentNode != null) {
            if (currentNode.value == value) {
                return true
            }
            currentNode = currentNode.nextNode
        }
        return false
    }

    find(value) {
        let currentNode = this._head
        let currentIndex = 0
        while (currentNode != null) {
            if (currentNode.value == value) {
                console.log("founded at index: " + currentIndex);
                return currentIndex;
            }
            currentNode = currentNode.nextNode
            currentIndex++
        }
        console.log("The element is not in the linked list");
    }
    toString() {
        let currentNode = this._head;
        let output = "          Linked List   \n ----------------------------- \n"
        console.log("")
        while (currentNode !== null) {
            output += (`(${currentNode.value}) --> `);
            currentNode = currentNode.nextNode;
        }
        output += "null"
        console.log(output);
    }
}
class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode || null;
    }
}