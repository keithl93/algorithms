class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 데이터를 추가하는 메서드
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // 인덱스를 기반으로 노드를 제거하는 메서드
  removeAt(index) {
    if (index < 0 || index >= this.size) return;

    let current = this.head;
    let previous;
    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // Linked List를 출력하는 메서드
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.printList(); // 10, 20, 30
ll.removeAt(1);
ll.printList(); // 10, 30
