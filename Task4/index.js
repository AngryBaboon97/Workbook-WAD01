// The Sieve of Eratosthenes: Unveiling Primes

// Initialize an array of boolean values (isPrime) for numbers from 2 to n.
const n = 20; // Our chosen limit
const isPrime = Array(n + 1).fill(true);

// Begin with the first prime: 2.
for (let p = 2; p * p <= n; p++) {
    if (isPrime[p]) {
        // Mark multiples of p (greater than p) as false.
        for (let i = p * p; i <= n; i += p) {
            isPrime[i] = false;
        }
    }
}

// Iterate through the prime numbers 2 to n, for each number i, it checks is isPrime[i] is true. And it is added to the prime array using the push method.
const primes = [];
for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
        primes.push(i);
    }
}

// Display our findings:
console.log(`Prime numbers up to ${n}: ${primes.join(', ')}`);