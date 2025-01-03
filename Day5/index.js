/*
Event Loop Demonstration: Call Stack -> Node API -> Callback Queue -> Call Stack

1. Call Stack:
   - Executes synchronous code first.
   - Handles function calls in a LIFO (Last In, First Out) order.

2. Node API:
   - Handles asynchronous operations like `setTimeout`.
   - Moves completed tasks to the Callback Queue once the timer finishes.

3. Callback Queue:
   - Queues callbacks from the Node API when their tasks are ready.
   - Waits for the Call Stack to be empty before moving callbacks to it.

4. Execution Flow:
   a) Synchronous code runs first (console.log).
   b) `setTimeout` functions are sent to the Node API.
   c) When the timers expire, callbacks move to the Callback Queue.
   d) The Event Loop moves callbacks to the Call Stack (one at a time) when the Call Stack is empty.
*/

console.log("Starting up"); // Synchronous - Executed immediately and logs "Starting up".

setTimeout(() => {
    // Asynchronous - This callback is sent to Node API, waits for 2000ms, 
    // and then moves to the Callback Queue when the timer expires.
    console.log('2 seconds log'); 
}, 2000);

setTimeout(() => {
    // Asynchronous - This callback is sent to Node API, waits for 0ms 
    // (ready almost immediately), then moves to the Callback Queue.
    console.log('0 seconds log'); 
}, 0);

console.log("Finishing up"); // Synchronous - Executed immediately and logs "Finishing up".

/*
Final Output:
1. "Starting up" (from the first synchronous console.log).
2. "Finishing up" (from the second synchronous console.log).
3. "0 seconds log" (from the first setTimeout callback after the Call Stack is empty).
4. "2 seconds log" (from the second setTimeout callback after its 2000ms timer expires).
*/
