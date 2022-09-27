// Deque(): 초기 속성값 설정을 위한 생성자 함수
function Deque(array = []) {
    this.array = array;
}

Deque.prototype.getBuffer = function() {
    return this.array.slice();
};

Deque.prototype.isEmpty = function() {
    return this.array.length === 0;
}

// pushFront(): 앞 쪽 데이터 추가
Deque.prototype.pushFront = function(element) {
    return this.array.unshift(element);
}

// popFront():앞 쪽 데이터 삭제
Deque.prototype.popFront = function() {
    return this.array.shift();
}

// pushBack(): 뒤 쪽 데이터 추가
Deque.prototype.pushBack = function(element) {
    return this.array.push(element);
}

// popBack(): 뒤 쪽 데이터 삭제
Deque.prototype.popBack = function() {
    return this.array.pop();
}

// front(): 가장 첫 데이터 반환
Deque.prototype.front = function() {
    return this.length === 0 ? undefined : this.array[0];
}

// back(): 가장 끝 데이터 반환
Deque.prototype.back = function() {
    return this.length === 0 ? undefined : this.array[this.array.length - 1];
}

// size(): 크기 반환
Deque.prototype.size = function() {
    return this.array.length;
}

// clear(): 데크 초기화
Deque.prototype.clear = function() {
    this.array = [];
}

let dq = new Deque([1, 2, 3]);
console.log(dq);

dq.pushFront(0);
dq.pushBack(4);
console.log(dq);

console.log(dq.popFront());
console.log(dq.popBack());
console.log(dq);

dq.clear();
console.log(dq);
