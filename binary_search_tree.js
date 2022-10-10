class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    _inOrderTraverseNode (node, callback) {
        if (node === null) {
            return;
        }

        this._inOrderTraverseNode(node.left, callback);
        callback(node);
        this._inOrderTraverseNode(node.right, callback);
    }

    inOrderTraverse (callback) {
        this._inOrderTraverseNode(this.root, callback);
        console.log("end");
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

    // 가장 최솟값이 가장 왼쪽에 위치하고, 가장 최댓값이 가장 오른쪽에 위치하는 것을 알 수있음
    // _minNode(): 반복문으로 트리를 순회하며 최솟값 노드 탐색
    _minNode (node) {
        if (node === null) {
            return null;
        }
        
        while (node && node.left !== null) {
            node = node.left;
        }
        return node.value;
    }

    min () {
        return this._minNode(this.root);
    }
    // _maxNode(): 반복문으로 트리를 순회하며 최댓값 노드 탐색
    _maxNode(node) {
        if (node === null) {
            return null;
        }

        while (node && node.right !== null) {
            node = node.right;
        }
        return node.value;
    }

    max () {
        return this._maxNode(this.root);
    }

    // searchNode(): 재귀로 트리를 순회하며 값을 만족하는 노드 탐색
    _searchNode(node, value) {
        if (node === null) {
            return false;
        }

        if (node.value === value) {
            return true;
        } else if (node.value > value) {
            return this._searchNode(node.left, value);
        } else if (node.value < value) {
            return this._searchNode(node.right, value);
        }
    }

    search (value) {
        return this._searchNode(this.root, value);
    }

    _findMinNode (node) {
        while (node && node.left !== null) {
            node = node.left;
        }

        return node;
    }
    _removeNode (node, value) {
        if (node === null) {
            return null;
        }

        if (node.value === value) {
            // case1: 0 child node (leaf node)
            if (node.left === null && node.right === null) {
                node = null;
            }
            // case2: 1 child node
            else if (node.left === null){
                node = node.right;
            } else if (node.right === null) {
                node = node.left;
            } 
            // case 3: 2 child node
            else {
                let aux = this._findMinNode(node.right);
                node.value = aux.value;
                node.right = this._removeNode(node.right, aux.value);
                console.log(node.right);
            }
        } else if (node.value > value) {
            node.left = this._removeNode(node.left, value);
        } else if (node.value < value) {
            node.right = this._removeNode(node.right, value);
        }
        return node;
    }

    remove (value) {
        this.root = this._removeNode(this.root, value);
    }
}

function printNode(node) {
    process.stdout.write(`${node.value} -> `);
}

// let tree = new BinarySearchTree();
// tree.insert("F");
// tree.insert("B");
// tree.insert("A");
// tree.insert("D");
// tree.insert("C");
// tree.insert("E");
// tree.insert("G");
// tree.insert("I");
// tree.insert("H");

// tree.remove("B");
// tree.inOrderTraverse(printNode);
// console.log(tree);

// console.log(tree.root);