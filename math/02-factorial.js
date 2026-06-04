/**
 * Returns the factorial of a given number.
 *
 * The factorial of a non-negative integer `n` is the product
 * of all positive integers less than or equal to `n`.
 *
 * Examples:
 * 0! = 1
 * 1! = 1
 * 4! = 4 × 3 × 2 × 1 = 24
 *
 * @param {number} n - A non-negative integer.
 * @returns {number} The factorial of `n`.
 */
function factorial(n) {
	// Initialize result to 1
	let result = 1;

	// Multiply result by each number from 2 to n
	for (let i = 2; i <= n; i++) {
		result *= i;
	}

	// Return the final factorial value
	return result;
}

// Test cases
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(4)); // Output: 24
console.log(factorial(5)); // Output: 120

/**
 * Algorithm:
 * 1. Initialize a variable `result` with a value of 1.
 * 2. Loop from 2 up to `n`.
 * 3. Multiply `result` by the current number in each iteration.
 * 4. Return `result` after the loop completes.
 *
 * Worst Case:
 * Time Complexity: O(n) - We iterate through all numbers from 2 to n once.
 * Space Complexity: O(1) - We only use a single variable regardless of input size.
 */
