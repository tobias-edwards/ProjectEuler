/**
 * Summary.
 * Summary goes here..
*/

const now = require('performance-now');


// Start timer
const start = now();

printPrimes(100);

// Stop timer
console.log(`${now() - start} ms`)
