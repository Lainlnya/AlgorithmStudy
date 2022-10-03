// loselose hash size
// const HASH_SIZE = 37;

// djb2 hash size
const HASH_SIZE = 1013;

class Element {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class HashTable {
    constructor() {
        this.table = new Array(HASH_SIZE);
        this.length = 0;
    }
    
    // 각각의 요소를 하나씩 char로 변환한 뒤 hash에 더한 이후, hash size의 나머지 값을 구함 => hash code
    // hashCode(): 해시 함수
    // loselose hash function
    // hashCode(key) {
    //     let hash = 0;
    //     for (let i = 0; i < key.length; i++) {
    //         hash += key.charCodeAt(i);
    //     }
    //     return hash % HASH_SIZE;
    // }
    // djb2 hash function
    hashCode(key) {
        let hash = 5381; //seed, 모두 값이 소수로 되어있음
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % HASH_SIZE;
    }

    // put(): 데이터 추가
    put(key, value) {
        let index = this.hashCode(key);

        if (this.table[index] !== undefined) {
            return false;
        }
        
        this.table[index] = new Element(key, value);
        this.length++;
    }

    // get(): 데이터 조회
    get(key) {
        return this.table[this.hashCode(key)];
    }

    // remove(): 데이터 삭제
    remove(key) {
        let element = this.table[this.hashCode(key)];
        
        if (element !== undefined) {
            delete this.table[this.hashCode(key)];
            this.length--;
        }

        return element;
    }

    // clear(): 초기화
    clear() {
        this.table = new Array(HASH_SIZE);
        this.length = 0;
    }

    // size(): 크기 반환
    size() {
        return this.length;
    }

    // getBuffer(): 데이터 셋 반환
    getBuffer() {
        let array = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                array.push(this.table[i]);
            }
        }
        return array;
    }

    // print(): 데이터 셋 출력
    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`${i} -> ${this.table[i].key} : ${this.table[i].value}`);
            }
        }
    }

}

let ht = new HashTable();
console.log(ht);
ht.put("Ana", 172);
ht.put("Sue", 163);
ht.put("Paul", 190);

ht.print();
console.log(ht.getBuffer());

console.log(ht.size());
ht.clear();
console.log(ht);