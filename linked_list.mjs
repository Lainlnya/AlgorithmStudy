// Node(): data와 point를 가지고 있는 객체
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList(): head와 length를 가지고 있는 객체
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }
    
    isEmpty() {
        return this.length === 0;
    }

    printNode() {
        for (let node = this.head; node != null; node = node.next) {
            process.stdout.write(`${node.data} -> `);
        }
        console.log("null");       
    }

    append(value) {
        let node = new Node(value);
        let current = this.head;
    
        if (this.head === null) {
            this.head = node;
        } else {
            while(current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    insert(value, position = 0) {
        if (position < 0 || position > this.length) {
            return false;
        }
    
        let node = new Node(value);
        let current = this.head, index = 0, prev;
    
        if (position == 0) {
            node.next = current;
            this.head = node;
        } else {
            while (index++ < position) {
                prev = current;
                current = current.next;
            }
            node.next = current;
            prev.next = node;
        }
        this.length++;
        return true;
    }

    remove(value) {
        let current = this.head,
        prev = current;
        
        while (current.data != value && current.next != null) {
            prev = current;
            current = current.next;
        }

        if (current.data != value) {
            return null;
        }

        if (current === this.head) {
            this.head = current.next;
            prev.next = current.next;
        } 

        this.length--;

        return current.data;
    }

    removeAt(position = 0) {
        if (position < 0 || position > this.length) {
            return null;
        }
    
        let current = this.head, index = 0, prev;
        if (position === 0) {
            this.head = current.next;
        } else {
            while (index++ < position) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }
    
        this.length--;
    
        return current.data;
    }

    indexOf(value) {
        let current = this.head, index = 0;

        while (current != null) {
            if (current.data === value) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
}

export { LinkedList };