function Node(data) {
    this.data = data;
    this.next = null;
}

function CircularLinkedList() {
    this.head = null;
    this.length = 0;
}

CircularLinkedList.prototype.size = function() {
    return this.length;
}

CircularLinkedList.prototype.isEmpty = function() {
    return this.length === 0;
}

CircularLinkedList.prototype.printNode = function() {
    process.stdout.write("head -> ");
    if (this.length != 0) {
        process.stdout.write(`${this.node.data} -> `);
        for (let node = this.head.next; node != this.head; node = node.next) {
            process.stdout.write(`${node.data} -> `);
        }
    }
    console.log("null");
}

CircularLinkedList.prototype.append = function(value) {
    let node = new Node(value), current = this.head;

    if (this.head === null) {
        this.head = node;
    } else {
        while (current.next != this.head) {
            current = current.next;
        }
        current.next = node;
    }
    node.next = this.head;

    this.length++;
}

CircularLinkedList.prototype.insert = function(value, position = 0) {
    if (position < 0 || position > this.length) {
        return false;
    }

    let node = new Node(value);
    let current = this.head, index = 0, prev;

    if (position === 0) {
        node.next = current;

        if (this.isEmpty()){
            current = node;
        } else {
            while (current.next != this.head) {
                current = current.next;
            }
        }

        this.head = node;
        current.next = this.head;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }
        prev.next = node;
        node.next = current.next;

        if (node.next === null) {
            node.next = this.head;
        }
    }

    this.length++;

    return true;
}

CircularLinkedList.prototype.remove = function(value) {
    let current = this.head, prev = current, data;

    while (current.data != value && current.next != this.head) {
        prev = current;
        current = current.next;
    }

    if (current.data !== value) {
        return null;
    }

    data = current.data;
    if (current === this.head) {
        while (current.next != this.head) {
            current = current.next;
        }
        this.head = this.head.next;
        current.next = this.head;
    } else {
        prev.next = current.next;
    }
    this.length--;
    
    return data;
}

CircularLinkedList.prototype.removeAt = function(position = 0) {
    if (position < 0 || position > this.length) {
        return null;
    }

    let current = this.head, index = 0, prev, data;

    if (position === 0) {
        data = current.data;
        
        while(current.next != this.head) {
            current = current.next;
        }
        this.head = this.head.next;
        current.next = this.head;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }
        data = current.data;
        prev.next = current.next;
    }
    this.length--;

    return data;
}

CircularLinkedList.prototype.indexOf = function(value) {
    let current = this.head, index = 0;
    do{
        if (current.data === value) {
            return index;
        }
        index++;
        current = current.next;
    } while (current != this.head);

    return -1;
}