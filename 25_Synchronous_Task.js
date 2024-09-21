// ---------------------------------SYNCHRONOUS TASK------------ 

/*

What does synchronous means? 
Say we have 2 lines of codes Line-1 followed by Line-2.
Synchronous means Line-2 can not start running until the Line-1 has finished executing.

JavaScript is single-threaded, which means only one statement is executed at a time. 
As the JS engine processes our script line by line, it uses this single Call-Stack to keep track of codes that are supposed to run in their 
respective order.
Like what a stack does, a data structure that records lines of executable instructions and executes them in a LIFO manner. 
So say if the engine steps into a function foo(){ it PUSH-es foo() into the stack and when the execution of foo()return; } 
is over foo() is POP-ped out of the call-stack.

*/

// ---------------------------------EXERCISE-1------------ 

/*


EXERCISE 1: So from the above diagram shows how a typical line by line execution happens. When the script of three console.log() statements is thrown at JS —
Step 1: The console.log("Print 1")is pushed into the call stack and executed, once done with execution, it is then popped out of the stack.
Now the stack is empty and ready for any next instruction to be executed.
Step 2: console.log("Print 2"); // is the next instruction is pushed and the same thing repeats until 
Step 3: is executed and there is nothing left to push and execute.

*/



// ---------------------------------EXERCISE-2------------ 

/*
EXERCISE 2: So what's happening here is as follows:

Step 1: Call stack is pushed with the first executable statement of our script the First() function call.
While executing through the scope of the function First() our engine encounters another function call Second()

Step 2: Hence the function call Second() is pushed into the call stack and the engine starts executing Second()function’s body 
(Note: The function First()is still not finished), again, there’s another function call Third() inside Second()'s body.

Step 3: Likewise the function call Third() is pushed into the call stack and the engine starts processing Third() function definition.
While the functions Second() and First()still living in the stack waiting for their turn (successor to finish their execution) respectively.

Step 4: So when the engine encounters a return ; statement within the function definition of Third() , well that’s the end of Third() . 
Hence Third() is popped out of the call stack as it has finished execution. At this point, the engine is back at executing Second() ‘s offerings.

Step 5: Well as the engine encounters a return ; statement, the function Second() is popped out and the engine starts executing First() . 
Now there’s no return statement within the First() ‘s scope so the engine executes its body until the end of scope and pops First() out of the stack at Step 6.

*/