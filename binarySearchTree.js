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



    insertNode(value, node = this.root) {
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

    deleteNode(value, currentNode = this.root) {
        // If the tree is empty or it has only one element and that's being deleted then simply
        // make its child as NULL and return it to maintain binary search property of BST
        if (!currentNode)
            return null;

        if (value < currentNode.data) {
            currentNode.left = this.deleteNode(value, currentNode.left);
        } else if (value > currentNode.data) {
            currentNode.right = this.deleteNode(value, currentNode.right);
        } else {
            // node with only one child or with no child
            if (currentNode.left === null) {
                return currentNode.left;

            } else if (currentNode.right === null) {
                return currentNode.right;
            }

            currentNode.data = this.minValueNode(currentNode.right);
            currentNode.right = this.deleteNode(currentNode.data, currentNode.right);
        }
        return currentNode;
    }
    minValueNode(node) {
        while (node.left != null) {
            node = node.left;
        }
        return node.data;
    }

    find(value) {
        // Recursive function to search for the value in the binary search tree
        function search(node, value) {
            if (!node) {
                return null; // Value not found in the subtree
            }

            if (value === node.data) {
                return node; // Found the node with the desired value
            } else if (value < node.data) {
                return search(node.left, value); // Search the left subtree
            } else {
                return search(node.right, value); // Search the right subtree
            }
        }

        // Start the search from the root of the binary search tree
        return search(this.root, value);
    }
    levelOrder() {
        if (!this.root) {
            return []; // Return an empty array if the tree is empty
        }

        const queue = [this.root];
        const resultArr = [];

        while (queue.length > 0) {
            const current = queue.shift(); // Dequeue the front node
            resultArr.push(current.data); // Process the current node

            // Enqueue the left and right children if they exist
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }

        return resultArr;
    }

}
