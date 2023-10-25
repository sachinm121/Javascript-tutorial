// Immediately Invoked Function Expressions (IIFE)

// we use IIFE for remove polution of global variable
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sachin')
