import { Queue } from "./queue.mjs";
// edge object 객체 저장을 위한 생성자
// key: vertex
// value: list 형태로 연결된 vertex를 표현하여 edge 연결 관계 표현 (배열 형태)
class Graph {
    constructor() {
        this.edge = {};
        // vertex가 방문했는지 하지 않았는지를 확인하는 용도
        this.visited = {};
    }

    // addVertex(): 정점(vertex) 추가
    addVertex(v) {
        this.edge[v] = [];
        this.visited[v] = false;
    }

    // addEdge(): 간선(edge) 추가
    addEdge (v1, v2) {
        this.edge[v1].push(v2);
    }

    // print(): 현재 Graph 연결 상태 출력
    print() {
        for (let vertex in this.edge) {
            let neighbors = this.edge[vertex];
            if (neighbors.length === 0) continue;

            process.stdout.write(`${vertex} -> `);
            for (let j = 0; j < neighbors.length; ++j) {
                process.stdout.write(`${neighbors[j]} `);
            }

            console.log("");
        }
    }
    // bfs(): BFS 탐색
    bfs (startVertex) {
        this._bfsLoopVisit(startVertex);
    }

    // _bfsLoopVisit(): queue를 이용한 dfs 탐색
    _bfsLoopVisit (vertex) {
        let queue = new Queue();
        queue.enqueue(vertex);

        while (!queue.isEmpty()) {
            let vertex = queue.dequeue();
            if (this.visited[vertex]) {
                continue;
            }

            this.visited[vertex] = true;
            console.log(`visit ${vertex} `);

            let neighbors = this.edge[vertex];
            for (let i = 0; i < neighbors.length; i++) {
                queue.enqueue(neighbors[i]);
            }
        }
    }
}

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.print();
console.log("");

graph.bfs("A");