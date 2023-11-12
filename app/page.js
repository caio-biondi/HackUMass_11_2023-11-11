import { Visualiser } from "./components/visualiser";

import { createHeap, printList, malloc } from "./allocator.jsx";

createHeap(10);

// printList()

malloc(2);

// printList()

malloc(3);

// printList()

// malloc(4);

// printList()

printList();

export default function Home() {
  return (
    <main>
      <div className={"flex justify-center container min-h-screen min-w-full bg-gray-200"}>
        <Visualiser></Visualiser>
      </div>
    </main>
  );
}
