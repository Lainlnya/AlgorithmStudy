// Node(): data와 point를 가지고 있는 객체
function Node(data) {
    this.data = data;
    this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function LinkedList() {
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.size = function() {
    return this.length;
}

LinkedList.prototype.isEmpty = function() {
    return this.length === 0;
}

let ll = new LinkedList();
ll.head = new Node(123);
ll.length++;
ll.head.next = new Node(456);
ll.length++;
console.log(ll);

// printNode(): 노드 출력
LinkedList.prototype.printNode = function() {
    for (let node = this.head; node != null; node = node.next) {
        process.stdout.write(`${node.data} -> `);
    }
    console.log("null");
}

ll.printNode();

// append(): 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function (value) {
    let node = new Node(value);
    let current = this.head;

    if (this.head === null) {
        this.head = node.data;
    } else {
        while(current.next != null) {
            current = current.next;
        }
        current.next = node;
    }
    this.length++;
}

// insert(): position 위치에 노드 추가
LinkedList.prototype.insert = function (value, position = 0) {
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
ll.append(2);
ll.insert(1);
ll.printNode();
ll.insert(10);
ll.insert(20);
ll.insert(100);
ll.printNode();
ll.insert(2, 1);
ll.insert(5, 2);
ll.printNode();

console.log(ll.size());

// remove(): value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function(value) {
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

LinkedList.prototype.removeAt = function(position = 0) {
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

LinkedList.prototype.indexOf = function(value) {
    let current = this.head, index = 0;

    while (current != null) {
        if (current.data === value) {
            return index;
        }
        index++;
        current = current.next;
    }
    return -1;
};