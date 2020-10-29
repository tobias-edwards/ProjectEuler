/**
 * Summary.
 * Use the formula for the sum of an arithmetic series:
 * S = (n/2) * (2a + (n - 1)d)
*/

const now = require('performance-now');

const sumSeries = (n, a, d) => (n / 2) * ((2 * a) + (n - 1) * d);

const upper = 999;
const sumMultiples = m => sumSeries(Math.floor(upper / m), m, m);

// Start timer
const start = now();

const multiples3And5 = sumMultiples(3) + sumMultiples(5) - sumMultiples(15);
console.log(multiples3And5);

// Stop timer
console.log(`${now() - start} ms`);
