/**
 * Returns the factorial of a given number using recursion.
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
	// Base case: factorial of 0 or 1 is 1
	if (n === 0 || n === 1) {
		return 1;
	}

	// Recursive case: n! = n × (n - 1)!
	return n * factorial(n - 1);
}

// Test cases
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(4)); // Output: 24
console.log(factorial(5)); // Output: 120

/**
 * Algorithm:
 * 1. Check if `n` is 0 or 1.
 *    - If true, return 1 (base case).
 * 2. Otherwise, return `n * factorial(n - 1)`.
 * 3. The function keeps calling itself with smaller values of `n`
 *    until it reaches the base case.
 * 4. As the recursive calls return, the results are multiplied together.
 *
 * Example for factorial(4):
 * factorial(4)
 * = 4 * factorial(3)
 * = 4 * (3 * factorial(2))
 * = 4 * (3 * (2 * factorial(1)))
 * = 4 * (3 * (2 * 1))
 * = 24
 *
 * Worst Case:
 * Time Complexity: O(n) - The function makes one recursive call for each value from n down to 1.
 * Space Complexity: O(n) - The recursive call stack stores n function calls.
 */
