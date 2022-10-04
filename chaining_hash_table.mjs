import { LinkedList } from "./linked_list.mjs";

const HASH_SIZE = 37;

class Element {
    constructor (key, value) {
        this.key = key;
        this.value = value;
    }
}

class ChainingHashTable {
    constructor () {
        this.table = new Array(HASH_SIZE);
        this.length = 0;
    }

    hashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % HASH_SIZE;
    }

    clear () {
        this.table = new Array(HASH_SIZE);
        this.length = 0;
    }

    size () {
        return this.length;
    }

    put (key, value) {
        let index = this.hashCode(key);
        console.log(`key: ${key} -> index: ${index}`);

        if (this.table[index] === undefined) {
            this.table[index] = new LinkedList();
        }

        this.table[index].append(new Element(key, value));
        this.length++;

        return true;
    };

    getBuffer() {
        let array = [];

        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i]) {
                let current = this.table[i].head;
                
                while (current != null) {
                    array.push(current.data);
                    current = current.next;
                }
            }
        }
        return array;
    };

    print() {
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i]) {
                let current = this.table[i].head;
                process.stdout.write(`#${i}`);
                while (current !== null) {
                    process.stdout.write(` -> ${current.data.key}: ${current.data.value}`);
                    current = current.next;
                }
                console.log("");
            }
        }
    }

    get (key) {
        let index = this.hashCode(key);
        // 해당 인덱스 외에 다른 인덱스는 순회할 필요가 없다.
        if (this.table[index] !== undefined && !this.table[index].isEmpty()) {
            let current = this.table[index].head;
            while (current !== null) {
                if (current.data.key === key) {
                    return current.data.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    remove (key) {
        let index = this.hashCode(key);
        let element = undefined;

        if (this.table[index] !== undefined) {
            let current = this.table[index].head;
            
            while (current !== null) {
                if (current.data.key === key) {
                    element = current.data;
                    this.table[index].remove(current.data);
                    if (this.table[index].isEmpty()) {
                        delete this.table[index];
                    }
                }
                current = current.next;
            }
        }

        this.length--;
        return element;
    };
}
