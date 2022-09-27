function Queue(array) {
    this.array = array ? array : [];
}

Queue.prototype.getBuffer = function () {
    return this.array.slice();
}

Queue.prototype.isEmpty = function () {
    return this.array.length === 0;
}

let queue = new Queue([1, 2, 3, 4]);
console.log(queue);
let data = queue.getBuffer();
console.log(data === queue.array);
console.log(data);

console.log(queue.isEmpty());

Queue.prototype.enqueue = function (element) {
    return this.array.push(element);
}

Queue.prototype.dequeue = function() {
    return this.array.shift();
}

queue.enqueue(4);
queue.enqueue(5);
console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);

// front(): 가장 첫 데이터 반환
Queue.prototype.front = function() {
    return this.array.length == 0 ? undefined : this.array[0];
}

Queue.prototype.size = function() {
    return this.array.length;
}

Queue.prototype.clear = function() {
    return this.array = [];
}

console.log(queue.front());
console.log(queue);

console.log(queue.size());
queue.clear();
console.log(queue);
console.log(queue.size());