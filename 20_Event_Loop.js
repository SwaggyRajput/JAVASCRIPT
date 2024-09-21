// ---------------------------------EVENT-LOOP------------ 


/*
Event Loop is a loop between call stack and callback queue and it checks
call stack is empty and callback queue has some element then it pushes element to call stack
and this process is called asynchronous code

When a setTimeout is called then it doesn't pushed into call stack directly
It goes to WebAPis and then to callback queue and then event loop check is done
and then settimeout is pushed into callstack

*/


//Note-->CHeck this process into "Loupe" website