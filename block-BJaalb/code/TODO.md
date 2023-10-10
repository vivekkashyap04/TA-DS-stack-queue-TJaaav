## Implement Stack

- Linear data structure
- Flexible size
- First in Last out (LIFO)

### Implement Stack using Array to Store Data

Create a class named `Stack` with the following properties and methods:

- While implementing this you can use Array to store data and use any array methods.
- Test the `Stack` class using `Test 1` and `Test 2` given below

The class `Stack` will accept one optional parameter `capacity` using which we can limit the data size. The value of `capacity` will default to `Infinity`.

Properties:

- `storage` use it to store the data for the queue. It should be an array
- `capacity` defaults to `Infinity` if the length is above capacity the item can't be added. Alert a message saying `Stack is overflowing`
- `length` it will return the length of the queue (Getter/Setter)

YOU CAN ADD OTHER PROPERTIES IF YOU NEED.

Methods:

- `add` Adds an element to the stack
- `remove` Removes an element from the stack
- `peek` returns the first element from the top of the stack
- `printAll` print all the elements of the stack from one after another from the top
- `isEmpty` Returns `true` if the stack is empty

```js
class Stack {
  constructor(capacity = Infinity) {
    this.storage = [];
    this.capacity = capacity;
  }

  // Getter for length
  get length() {
    return this.storage.length;
  }

  // Method to add an element to the stack
  add(item) {
    if (this.length >= this.capacity) {
      console.log("Stack is overflowing");
      return;
    }
    this.storage.push(item);
  }

  // Method to remove an element from the stack
  remove() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    return this.storage.pop();
  }

  // Method to return the top element of the stack (peek)
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    return this.storage[this.length - 1];
  }

  // Method to print all elements of the stack
  printAll() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    for (let i = this.length - 1; i >= 0; i--) {
      console.log(this.storage[i]);
    }
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.length === 0;
  }
}

// Test 1

const stack = new Stack();

stack.add(10);
stack.add(12);
stack.add(120);
stack.add(1);
stack.add(4);

console.log(stack.remove()); // => 4
console.log(stack.length); // => 4
console.log(stack.remove()); // => 1
console.log(stack.length); // => 3

console.log(stack.peek()); // 120

console.log(stack.isEmpty()); // false

console.log(stack.remove()); // => 120

console.log(stack.add(100)); // 3

console.log(stack.peek()); // => 100

console.log(stack.remove()); // => 100
console.log(stack.remove()); // => 12
console.log(stack.remove()); // => 10

console.log(stack.isEmpty()); // true

// Test 2

const stack2 = new Stack(4);

stack2.add(10);
stack2.add(12);
stack2.add(120);
stack2.add(1);
stack2.add(4); // alert Stack is overflowing

console.log(stack2.remove()); // => 1
console.log(stack2.length); // => 3
console.log(stack2.remove()); // => 120
console.log(stack2.length); // => 2

console.log(stack2.peek()); // 12

console.log(stack2.isEmpty()); // false

console.log(stack2.remove()); // => 12

console.log(stack2.add(100)); // 2

console.log(stack2.peek()); // => 100

console.log(stack2.remove()); // => 100
console.log(stack2.remove()); // => 10

console.log(stack2.isEmpty()); // true
```

### Implement Queue using Object to Store Data

Create a class named `Stack` with the following properties and methods:

- While implementing this you can only use an Object to store the data
- Test the `Stack` class using `Test 1` and `Test 2` given below

Properties:

- `storage` use it to store the data for the queue. It should be an object
- `capacity` defaults to `Infinity` if the length is above capacity the item can't be added. Alert a message saying `Queue is overflowing`
- `length` it will return the length of the queue (Getter/Setter)

YOU CAN ADD OTHER PROPERTIES IF YOU NEED.

Methods:

- `add` Adds an element to the stack
- `remove` Removes an element from the stack
- `peek` returns the first element from the top of the stack
- `printAll` print all the elements of the stack from one after another from the top
- `isEmpty` Returns `true` if the stack is empty

```js
class Stack {
  // your code goes here
}

// Test 1

const stack = new Stack();

stack.add(10);
stack.add(12);
stack.add(120);
stack.add(1);
stack.add(4);

console.log(stack.remove()); // => 4
console.log(stack.length); // => 4
console.log(stack.remove()); // => 1
console.log(stack.length); // => 3

console.log(stack.peek()); // 120

console.log(stack.isEmpty()); // false

console.log(stack.remove()); // => 120

console.log(stack.add(100)); // 3

console.log(stack.peek()); // => 100

console.log(stack.remove()); // => 100
console.log(stack.remove()); // => 12
console.log(stack.remove()); // => 10

console.log(stack.isEmpty()); // true

// Test 2

const stack2 = new Stack(4);

stack2.add(10);
stack2.add(12);
stack2.add(120);
stack2.add(1);
stack2.add(4); // alert Stack is overflowing

console.log(stack2.remove()); // => 1
console.log(stack2.length); // => 3
console.log(stack2.remove()); // => 120
console.log(stack2.length); // => 2

console.log(stack2.peek()); // 12

console.log(stack2.isEmpty()); // false

console.log(stack2.remove()); // => 12

console.log(stack2.add(100)); // 2

console.log(stack2.peek()); // => 100

console.log(stack2.remove()); // => 100
console.log(stack2.remove()); // => 10

console.log(stack2.isEmpty()); // true
```
