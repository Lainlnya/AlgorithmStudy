class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Queue {
    constructor (array) {
        this.array = array ? array : [];
    }

    isEmpty() {
        return this.array.length === 0;
    }

    enqueue(element) {
        return this.array.push(element);
    }

    dequeue() {
        return this.array.shift();
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    _insertNode (node, value) {
        
        if (node === null) {
            node = new Node(value);
        } else if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertNode(node.right, value);
        }
        return node;
    }

    insert (value) {
        this.root = this._insertNode(this.root, value);
    }
    // _preOrderTraverseNode: 재귀로 트리를 순회하며 전위 순회
    _preOrderTraverseNode (node, callback) {
        if (node === null) {
            return;
        }
        callback(node);
        this._preOrderTraverseNode(node.left, callback);
        this._preOrderTraverseNode(node.right, callback);
    }

    preOrderTraverse(callback) {
        this._preOrderTraverseNode(this.root, callback);
    }

     // _inOrderTraverseNode: 재귀로 트리를 순회하며 전위 순회
    _inOrderTraverseNode (node, callback) {
        if (node === null) {
            return;
        }
        this._inOrderTraverseNode(node.left, callback);
        callback(node);
        this._inOrderTraverseNode(node.right, callback);
    }

    inOrderTraverseNode (callback) {
        this._inOrderTraverseNode(this.root, callback);
    }

     // _postOrderTraverseNode: 재귀로 트리를 순회하며 전위 순회
    _postOrderTraverseNode (node, callback) {
        if (node === null) {
            return;
        }
        this._postOrderTraverseNode(node.left, callback);
        this._postOrderTraverseNode(node.right, callback);
        callback(node);
    }

    postOrderTraverseNode (callback) {
        this._postOrderTraverseNode(this.root, callback);
    }

    levelOrderTraverse (callback) {
        let q = new Queue();
        let node;
        q.enqueue(this.root);
        while (!q.isEmpty()) {
            node = q.dequeue();
            callback(node);
            if (node.left !== null) q.enqueue(node.left);
            if (node.right !== null) q.enqueue(node.right);
        }
    }
}
function printNode(node) {
    process.stdout.write(`${node.value} -> `);
}

// let tree = new BinaryTree();
// tree.insert("F");
// tree.insert("B");
// tree.insert("A");
// tree.insert("D");
// tree.insert("C");
// tree.insert("E");
// tree.insert("G");
// tree.insert("I");
// tree.insert("H");

// console.log(tree);

// console.log(" ****** pre order ******* ");
// tree.preOrderTraverse(printNode);
// console.log("end");

// console.log(" ****** in order ******* ");
// tree.inOrderTraverseNode(printNode);
// console.log("end");

// console.log(" ****** post order ******* ");
// tree.postOrderTraverseNode(printNode);
// console.log("end");

// console.log(" ****** Level-Order ******* ");
// tree.levelOrderTraverse(printNode);
// console.log("end");