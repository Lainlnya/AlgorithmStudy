class Dictionary {
    constructor (items = {}) {
        this.items = items;
    }
    
    getBuffer () {
        return { ...this.items };
    }

    clear () {
        return this.items = {};
    }

    size () {
        return Object.keys(this.items).length;
    }

    // has(): 객체 존재 여부 확인
    has (key) {
        return this.items.hasOwnProperty(key);
    }

    // set(): 개체(Entity) 추가
    set (key, value) {
        this.items[key] = value;
    }

    // get(): 개체(Entity)의 value 반환
    get (key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    // remove(): 개체(Entity) 삭제
    remove (key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    // keys(): 모든 key 값을 배열 형태로 반환
    keys () {
        let values = [];
        for (let k in this.items) {
            if (this.has(k)){
                values.push(k);
            }
        }
        return values;
        // return Object.keys(this.items);
    }

    // values(): 모든 value 값을 배열 형태로 반환
    values () {
        return Object.values(this.items);
    }

    // each(): 모든 개체 요소에 대해 callba 함수 수행 (:= foreach)
    each (fn) {
        for (let k in this.items) {
            if (this.has(k)) {
                fn(k, this.items[k]);
            }
        }
    }
};

function printDictionary(key, value) {
    console.log(`key: ${key}, value: ${value}`);
}
