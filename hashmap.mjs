// export class Linkedlist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.node_count = 0; // Initialize node count
//   }

//   add(data) {
//     const newNode = { data, next: null };

//     if (this.head === null) {
//       // List is empty, so new node becomes head and tail
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       // Add the new node to the end of the list
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }

//     this.node_count++; // Increment node count

//     // Reverse the list if there are 5 or more nodes
//     if (this.node_count >= 5) {
//       this.reverse();
//     }
//   }

//   remove2ndnode(){
//     if(this.node_count < 3){
//       alert('Not enough node to remove , need atleast 3');
//   }
//     if (this.head && this.head.next){
//       const secondnode = this.head.next;
//       this.head.next = secondnode.next;
//       this.node_count--;
//     }
//   }
  

//   remove() {
//     if (this.head === null) {
//       return null; // List is empty, nothing to remove
//     }

//     if (this.head === this.tail) {
//       // Only one element in the list
//       this.head = null;
//       this.tail = null;
//     } else {
//       // More than one element in the list
//       let current = this.head;
//       while (current.next !== this.tail) {
//         current = current.next;
//       }
//       current.next = null;
//       this.tail = current;
//     }

//     this.node_count--; // Decrement node count
//   }

//   reverse() {
//     let prev = null;
//     let current = this.head;
//     this.tail = this.head; // Update tail to the old head

//     while (current !== null) {
//       const nextNode = current.next;
//       current.next = prev;
//       prev = current;
//       current = nextNode;
//     }

//     this.head = prev; // Update head to the new head
//   }

//   gethead() {
//     return this.head;
//   }

//   gettail() {
//     return this.tail;
//   }

//   length() {
//     return this.node_count; // Return the current node count
//   }

//   toString(){
//     let current = this.head;
//     let result = [];
//     while (current !==null){
//       result.push(current.data);
//       current = current.next;
//     }
//     return result.join('->')
//   }
// }

// 

