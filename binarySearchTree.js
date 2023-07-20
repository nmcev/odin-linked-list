const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

class Node {
    constructor(data = null, right = null, left = null) {
        this.data = data;
        this.right = right;
        this.left = left;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array, 0, array.length - 1);
    }

    buildTree(array, start, end) {
        if (start > end) return null;
        let midIndex = Math.floor((start + end) / 2);
        let root = new Node(array[midIndex]);
        root.left = this.buildTree(array, start, midIndex - 1);
        root.right = this.buildTree(array, midIndex + 1, end);
        return root;
    }

    insert(value) {
        this.root = this.insertNode(value, this.root);
    }

    insertNode(value, node) {
        if (node == null) {
            return new Node(value);
        }
        if (value < node.data) {
            node.left = this.insertNode(value, node.left);
        } else if (value > node.data) {
            node.right = this.insertNode(value, node.right);
        }
        return node;
    }
}