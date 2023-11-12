// generator for unique IDs (no repeats)
function* ID_generator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

const next_id = ID_generator();

class MemoryBlock {
  constructor(length) {
    this.id = next_id.next().value;
    this.length = length;
    this.free = false;
  }

  isFree() {
    return this.free;
  }

  getId() {
    return this.id;
  }

  getLength() {
    return this.length;
  }

  setFree(b) {
    this.free = b;
    return this;
  }

  setLength(size) {
    this.length = size;
    return this;
  }
}

// Linked list implementation
class ListNode {
  // constructor: (element: MemoryBlock, next: ListNode)
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }

  getElement() {
    return this.element;
  }
  getNext() {
    return this.next;
  }

  setNext(next) {
    this.next = next;
    return this;
  }
}

let some_size = 10;
let heap;

let mem_size;

export const listIterator = () => {};

export const createHeap = (size) => {
  heap = new ListNode(new MemoryBlock(some_size).setFree(true), undefined);
  mem_size = size;
  console.log("Heap created, size %s!", size);
};
// Initialize heap
// heap = createHeap(someSize)

export const printList = () => {
  let p = heap;
  while (p != undefined) {
    console.log(`Size: ${p.getElement().getLength()}, Free: ${p.getElement().isFree()}\n|`)
    p = p.getNext();
  }
};

export const generateDivs = () => {
  let divs = [];
  let current = heap;
  let percentages = [];

  while (current !== undefined) {
    let percentage = (current.getElement().getLength()*1.0 / mem_size) * 100;

    percentages.push(percentage)

    const s = "h-[" + (percentage).toString() + "%]";

    console.log(s);

    if (current.getElement().isFree()) {
      divs.push(<div key = {current.getElement().getId()} className={s + " w-80 bg-gray-500"}> </div>)
    } else {
      divs.push(<div key = {current.getElement().getId()} className={s + " w-80 bg-red-500"}> </div>)
    }

    current = current.getNext();
  }
  console.log("--");
  return divs;
};

export const malloc = (n) => {
  let current = heap; // head
  let previous = undefined;

  while (current !== undefined) {
    let blockLength = current.getElement().getLength();
    // Found a free block that can fit requested number of bytes
    if (blockLength >= n) {
      let newNode = new ListNode(new MemoryBlock(n), current); // Allocated block
      current.getElement().setLength(blockLength - n); // Adjust free block size
      if (previous == undefined) {
        // Allocating from the head
        heap = newNode;
      } else {
        previous.setNext(newNode);
      }
      console.log("Malloc successfull!");
      console.log(`New block's id: %s \n`, newNode.getElement().getId());
      return newNode.getElement().getId();
    }
    previous = current;
    current = current.next;
  }
  console.log("uh oh")
  return undefined; // Error handle later mby
};

// heap = [ MemoryBlock ]
