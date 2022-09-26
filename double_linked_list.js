function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
}

function DoubleLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoubleLinkedList.prototype.size = function() {
    return this.length;
}

DoubleLinkedList.prototype.isEmpty = function() {
    return this.length === 0;
}

DoubleLinkedList.prototype.printNode = function() {
    for (let node = this.head; node != null; node = node.next) {
        process.stdout.write(`${node.data} -> `);
    }
    console.log("null");
}

DoubleLinkedList.prototype.printNodeInverse = function() {
    for (let node = this.tail; node != null; node = node.prev) {
        process.stdout.write(`${node.data} -> `);
    }
    console.log("null");
}

DoubleLinkedList.prototype.append = function(value) {
    let node = new Node(value);

    if (this.head === null) {
        this.head = node;
        this.tail = node;
    } else {
        this.head.next = node;
        node.prev = this.head;
        this.tail = node;
    }
    this.length++;
}

DoubleLinkedList.prototype.insert = function (value, position = 0) {
    if (position < 0 || position > this.length) {
        return false;
    }

    let node = new Node(value);
    let current = this.head, index = 0, prev;

    if (position === 0) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = current;
            current.prev = node;
            this.head = node;
        }
    } else if (position === this.length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }
        prev.next = node;
        node.next = current;

        node.prev = prev;
        current.prev = node;
    }
    this.length++;

    return true;
}

DoubleLinkedList.prototype.remove = function(value) {
    let current = this.head, prev = current;

    while (current.data != value && current.next != null) {
        prev = current;
        current = current.next;
    }

    if (current.data !== value) {
        return null;
    }

    if (current === this.head) {
        this.head = current.next;
        if (this.length === 1) this.tail = null;
        else this.head.prev = null;
    } else if (current === this.tail) {
        this.tail = current.prev;
        this.tail.next = null;
    } else {
        prev.next = current.next;
        current.next.prev = prev;
    }
    this.length--;
    
    return current.data;
}

DoubleLinkedList.prototype.removeAt = function(position = 0) {
    if (position < 0 || position > this.length) {
        return null;
    }

    let current = this.head, index = 0, prev;

    if (position === 0) {
        this.head = current.next;
        if (this.length === 1) this.tail = null;
        else this.head.prev = null;
    } else if (position === this.length) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }

        prev.next = current.next;
        current.next.prev = prev;
    }
    this.length--;
    
    return current.data;
}

DoubleLinkedList.prototype.indexOf = function(value) {
    let current = this.head, index = 0;

    while (current != null){
        if (current.data === value) {
            return index;
        }
        index++;
        current = current.next;
    }
    return -1;
}