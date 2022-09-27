const DEFAULT_SIZE = 5;

// CircularQueue(): 초기 속성값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = DEFAULT_SIZE) {
    this.array = array;
    this.size = array.length > size ? array.length : size; // CirularQueue의 사이즈
    this.length = array.length; // array의 size
    this.head = 0;
    this.tail = array.length;
}

// getBuffer(): 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function() {
    return this.array.slice();
}
// isEmpty(): 데이터가 비어있는지 확인
CircularQueue.prototype.isEmpty = function() {
    return this.length == 0;
}

// isFull(): 데이터 꽉 차있는지 확인
CircularQueue.prototype.isFull = function() {
    return this.length == this.size;
}

// enqueue(): 데이터 추가
CircularQueue.prototype.enqueue = function (element) {
    if (this.isFull()) return false;
    
    this.array[this.tail] = element;
    //계속해서 tail이 증가하면 이후 성능에 좋지 않을 수 있기 때문에 미리 방지하는 것
    this.tail = (this.tail + 1) % this.size;
    this.length++;

    return true;
}
// dequeue(): 데이터 삭제
CircularQueue.prototype.dequeue = function () {
    if (this.isEmpty()) return undefined;

    let element = this.array[this.head];
    delete this.array[this.head];
    this.head = (this.head + 1) % this.size;
    this.length--;

    return element;
};

// front(): 가장 첫 데이터 반환
CircularQueue.prototype.front = function() {
    return this.length === 0 ? undefined : this.array[this.head];
}

CircularQueue.prototype.dataSize = function() {
    return this.length;
}

CircularQueue.prototype.clear = function(size = DEFAULT_SIZE) {
    this.array = [];
    this.size = size;
    this.length = 0;
    this.head = 0;
    this.tail = 0;
};

let cq = new CircularQueue([1, 2, 3, 4]);
console.log(cq);

cq.enqueue(5);
cq.enqueue(6);
console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);

cq.enqueue(6);
console.log(cq);
console.log(cq.front());
console.log(cq.dataSize());

cq.clear();
console.log(cq);