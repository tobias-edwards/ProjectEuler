/**
 * Summary.
 * Even Fibonacci numbers occur for 3n - 1:
 * 1, "2", 3, 5, "8", 13, 21, "34", 55, 89, ...
 *
 * Reduce number of even checks by looking ahead to the next even term.
*/

const now = require('performance-now');

const totalEvenFib = limit => {
    let n1 = 1;
    let n2 = 2;

    let evenTotal = 2;
    let evenFib = 0;
    let n3 = 0;

    while (true) {
        if (!evenFib) {
            // Update previous two terms twice 
            n1 = n1 + n2;  // n3 = n1 + n2
            n2 = n1 + n2;  // n4 = n1(=n3) + n2

            evenFib = 1;
        } else {
            // Note even term and update
            n3 = n1 + n2;
            if (n3 > limit) {
                break;
            }

            n1 = n2;
            n2 = n3;
            evenTotal += n3;
            evenFib = 0;
        }
    }

    return evenTotal;
}

// Start timer
const start = now();

console.log(totalEvenFib(4000000));

// Stop timer
console.log(`${now() - start} ms`)
