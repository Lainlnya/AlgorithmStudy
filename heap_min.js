// 최소 힙 (Minheap)
// 1차원 배열의 형태로 만들 수 있기 때문에 생성자를 []로 만든다.
class Heap {
    constructor () {
        this.items = [];
    }

    // swap(): 배열 내 두 요소 위치를 변경
    swap (index1, index2) {
        let temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }

    // parentIndex(): 부모 노드의 위치 반환
    parentIndex (index) {
        return Math.floor((index - 1) / 2);
    }

    // leftChildIndex(): 왼쪽 자식 노드의 위치 반환
    leftChildIndex (index) {
        return index * 2 + 1;
    }

    // rightChildIndex(): 오른쪽 자식 노드의 위치 반환
    rightChildIndex (index) {
        return index * 2 + 2;
    }

    // parent(): 부모 노드의 요소 값 반환
    parent (index) {
        return this.items[this.parentIndex(index)];
    }

    // leftChild(): 왼쪽 자식 노드의 값 반환
    leftChild (index) {
        return this.items[this.leftChildIndex(index)];
    }

    // rightChild(): 오른쪽 자식 노드의 값 반환
    rightChild (index) {
        return this.items[this.rightChildIndex(index)];
    }

    // peek(): 현재 정렬된 최소/최대 노드 값 반환, minHeap이면 최소, maxheap이면 최대
    peek () {
        return this.items[0];
    }

    // size(): 현재 배열 내 크기 반환
    size () {
        return this.items.length;
    }

    // insert(): 신규 노드 추가
    insert (item) {
        this.items[this.size()] = item;
        this.bubbleUp();
    }

    // bubbleUp(): 신규 노드 위치 정렬
    bubbleUp () {
        let index = this.size() - 1;
        
        while (this.parent(index) && this.parent(index) > this.items[index]) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }

    // extract(): root 노드 반환 및 삭제
    extract () {
        let item = this.items[0];
        this.items[0] = this.items[this.size() - 1];
        this.items.pop();
        this.bubbleDown();

        return item;
    }

    // bubbleDown(): 대체된 root 노드 위치 정렬
    bubbleDown () {
        let index = 0;

        while (
        this.leftChild(index) && 
        (this.leftChild(index) < this.items[index] 
        || this.rightChild(index) < this.items[index])) {
            let childIndex = this.leftChildIndex(index);
            // right와 left 노드 중 right < left 이면 right쪽으로 내려갸아 하기 때문에 아래 케이스를 넣는 것
            if (this.rightChildIndex(index) && this.rightChild(index) < this.items[childIndex]) {
                childIndex = this.rightChildIndex(index);
            }
            this.swap(childIndex, index);
            index = childIndex;
        }
    }
}

// test code

// let minHeap = new Heap();

// minHeap.insert(90);
// minHeap.insert(15);
// minHeap.insert(10);
// minHeap.insert(7);
// minHeap.insert(12);
// minHeap.insert(2);
// minHeap.insert(8);
// minHeap.insert(3);

// console.log(minHeap.extract());
// console.log(minHeap);
// console.log(minHeap.extract());
// console.log(minHeap);
// console.log(minHeap.extract());
// console.log(minHeap);
// console.log(minHeap.extract());
// console.log(minHeap);
