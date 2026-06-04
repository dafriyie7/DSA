/**
 * Returns the first `n` numbers in the Fibonacci sequence.
 *
 * The Fibonacci sequence starts with 0 and 1.
 * Each subsequent number is the sum of the two previous numbers.
 *
 * Examples:
 * n = 2 -> [0, 1]
 * n = 3 -> [0, 1, 1]
 * n = 7 -> [0, 1, 1, 2, 3, 5, 8]
 *
 * @param {number} n - Number of Fibonacci elements to generate.
 * @returns {number[]} An array containing the first `n` Fibonacci numbers.
 */
function fibonacci(n) {
	// Initialize the sequence with the first two Fibonacci numbers
	const fib = [0, 1];

	// Generate the remaining numbers in the sequence
	for (let i = 2; i < n; i++) {
		// Current number = previous number + number before that
		fib[i] = fib[i - 1] + fib[i - 2];
	}

	// Return the completed Fibonacci sequence
	return fib;
}

// Test cases
console.log(fibonacci(2)); // Output: [0, 1]
console.log(fibonacci(3)); // Output: [0, 1, 1]
console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]

/**
 * Worst Case:
 * Time Complexity: O(n) - We calculate each Fibonacci number once.
 * Space Complexity: O(n) - We store all generated Fibonacci numbers in an array.
 */