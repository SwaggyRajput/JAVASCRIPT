
// ---------------------------------ASYNCHRONOUS TASK------------ 

/*

What does asynchronous means? Unlike synchronous, asynchronous is a behavior. Say if we have two lines of code Line-1 followed by Line-2. 
Line-1 is a time-consuming instruction. So Line-1 starts executing its instruction in the background (like a daemon process), 
allowing Line-2 to start executing without having to wait for Line-1 to finish.

We need this behavior when things are slow. Synchronous executions of code may seem straightforward but can be slow. 
Tasks like image processing can be slow, file operations can be really slow, making a network request and waiting for response is definitely slow, 
making huge calculations like over a 100 million for-loop iteration is somewhat slow.
So such slow things in Call stack results in “Blocking”. When the call stack is blocked, the browser prevents the user’s interrupts and 
other code statements from executing until the blocking statement is executed and the call stack is freed. 
Hence Asynchronous callbacks are used to handle such situations.

*/


// ---------------------------------EXERCISE 3------------ 

/*
EXERCISE 3: If we trace the call-stack we can see at:
Step 1: As usual console.log("Hello ") gets pushed into the stack first and is executed then popped out when done.
Step 2: setTimeout() gets pushed into the stack, but Note- console.log("Siddhartha") cannot be executed (or pushed to the stack)
immediately because it is meant to execute in some future time (i.e. after a minimum of 2 seconds).
So it disappears for now (will explain later where it disappears to).
Step 3: Naturally next line console.log(" I am ") is pushed into the stack, gets executed, and is popped out immediately.
Step 4: Call stack is empty and waiting.
Step 5: Suddenly console.log( "Siddhartha" ) is found pushed into the stack after 2 seconds as setTimeout() has timed out. 
It is then executed and once done is popped out of the Stack at 
Step 6: Stack is empty again.

Hence it proves, even though JavaScript is single threaded, we can achieve concurrency through asynchronously handling the tasks.

Now we are left with three important questions:
Question 1. WHAT happened to these Timeout() ?
Question 2. From WHERE did it came back? And
Question 3. HOW did it happen?

So this is where Event Loop, Callback Queue, and Web APIs (in browser) kicks in.
Let's introduce each of the above pieces and answer the above 3 questions through our next diagram in "26_Asynchronous_Task"

*/

// ---------------------------------EXERCISE 4------------ 

/*
EXERCISE 4: Let's jump right into

Step 2: At this point setTimeout(callback, 2000) gets pushed into the call stack. As we can see it has two components a callback and a delay of 2000ms.
Now setTimeout() is NOT a part of any JavaScript engine, it’s in fact, a Web API included in the browser environment as an extra feature.

Step 3: So the browser Web API takes the responsibility of the callback provided and fires up the timer of 2000 ms leaving behind setTimeout() 
statement which has done its job, so it popped out of the stack. [ Question 1 is answered]

Step 4: The next line in our script console.log( "I am" ) is pushed into the stack and popped out after its execution.

Step 5: Now we have a callback in the WebAPIs which is going to get triggered after 2000 ms.
But WebAPIs directly can not PUSH things randomly into the call-stack, because it might create an interrupt to some other code being executed by the
JavaScript engine at that moment. So instead the callback is inserted into the Callback Queue/Task Queue after the timer of 2000 msis over.
WebAPI is now empty and freed

Step 6: Event Loop — it is responsible for taking out the first element from the Callback/Task Queue and PUSH it into the Call-Stack
only when the stack is empty or free,so at this point of our equation, the Call-Stack is empty.

Step 7: So callback is pushed into the Call-Stack (as it was free and empty) from the Callback/Task queue by the Event Loop,
and callback is executed. [Question 2 is answered]

Step 8: So another executable statement console.log("Siddhartha") is found inside the callback ‘s scope,
therefore console.log("Siddhartha") is pushed into the Call-Stack

Step 9: Once console.log("Siddhartha") is executed, it is then popped out of the Call-Stack, and the JavaScript engine comes back to finish executing
the callback ‘s remaining body. Which when done, callback is popped out of the Call-Stack. The End of the story [Answers the “HOW”, i.e Question 3].

*/





