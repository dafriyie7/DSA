/**
 * Determines whether a given number is a prime number.
 *
 * A prime number is a natural number greater than 1
 * that has exactly two positive divisors: 1 and itself.
 *
 * Examples:
 * 2 -> true
 * 3 -> true
 * 4 -> false
 * 5 -> true
 *
 * @param {number} n - The number to check.
 * @returns {boolean} True if `n` is prime, otherwise false.
 */
function isPrime(n) {
	// Prime numbers must be greater than 1
	if (n < 2) {
		return false;
	}

	// Check for factors from 2 up to n - 1
	for (let i = 2; i < n; i++) {
		// If n is divisible by any number other than 1 and itself,
		// it is not a prime number
		if (n % i === 0) {
			return false;
		}
	}

	// No factors found, so the number is prime
	return true;
}

// Test cases
console.log(isPrime(1)); // Output: false
console.log(isPrime(2)); // Output: true
console.log(isPrime(4)); // Output: false
console.log(isPrime(5)); // Output: true

/**
 * Algorithm:
 * 1. If `n` is less than 2, return false.
 * 2. Loop from 2 up to `n - 1`.
 * 3. If `n` is divisible by any number in the loop, return false.
 * 4. If no divisors are found, return true.
 *
 * Worst Case:
 * Time Complexity: O(n) - In the worst case, we check every number from 2 to n - 1.
 * Space Complexity: O(1) - We only use a constant amount of extra memory.
 */
