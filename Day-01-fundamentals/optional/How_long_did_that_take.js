Number.prototype.isPrime = function() {
    if (this <= 1) {
        return false;
    }
    
    if (this <= 3) {
        return true;
    }
    
    if (this % 2 === 0 || this % 3 === 0) {
        return false;
    }
    
    for (let i = 5; i * i <= this; i += 6) {
        if (this % i === 0 || this % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}



const { performance } = require('perf_hooks');

function findNthPrime(n) {
    let primeCount = 0;
    let num = 2;
    while (primeCount < n) {
        if (num.isPrime()) {
            primeCount++;
        }
        num++;
    }
    return num - 1;
}

const start1 = performance.now();
const prime100000 = findNthPrime(100000);
console.log(`The 100,000th prime number is ${prime100000}`);
console.log(`This took ${performance.now() - start1} milliseconds to run`);

const start2 = performance.now();
const prime1000000 = findNthPrime(1000000);
console.log(`The 1,000,000th prime number is ${prime1000000}`);
console.log(`This took ${performance.now() - start2} milliseconds to run`);



function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const story = "Lorem ipsum..."; // Your story here
const reversed = reverseString(story);
console.log(reversed);





