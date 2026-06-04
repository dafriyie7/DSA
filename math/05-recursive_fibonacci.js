/**
 * Returns the nth Fibonacci number using recursion.
 *
 * The Fibonacci sequence starts with:
 * 0, 1, 1, 2, 3, 5, 8, ...
 *
 * Each number is the sum of the two previous numbers.
 *
 * Examples:
 * fibonacci(0) -> 0
 * fibonacci(1) -> 1
 * fibonacci(6) -> 8
 *
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} The Fibonacci number at position `n`.
 */
function fibonacci(n) {
	// Base case: the first Fibonacci number is 0
	if (n === 0) {
		return 0;
	}

	// Base case: the second Fibonacci number is 1
	if (n === 1) {
		return 1;
	}

	// Recursive case:
	// Current number = previous number + number before that
	return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(7)); // Output: 13

/**
 * Algorithm:
 * 1. If `n` is 0, return 0.
 * 2. If `n` is 1, return 1.
 * 3. Otherwise, return fibonacci(n - 1) + fibonacci(n - 2).
 * 4. Repeat until the base cases are reached.
 *
 * Worst Case:
 * Time Complexity: O(2^n) - The function repeatedly recalculates the same Fibonacci values.
 * Space Complexity: O(n) - The recursive call stack grows up to `n` levels deep.
 */
