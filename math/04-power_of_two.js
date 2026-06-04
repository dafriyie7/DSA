/**
 * Determines whether a given number is a power of two.
 *
 * A number is a power of two if it can be expressed as:
 * 2^0 = 1
 * 2^1 = 2
 * 2^2 = 4
 * 2^3 = 8
 * 2^4 = 16
 * ...
 *
 * Examples:
 * 1  -> true
 * 2  -> true
 * 4  -> true
 * 5  -> false
 * 16 -> true
 *
 * @param {number} n - The number to check.
 * @returns {boolean} True if `n` is a power of two, otherwise false.
 */
function isPowerOfTwo(n) {
	// Powers of two must be positive
	if (n < 1) {
		return false;
	}

	// Keep dividing by 2 until the number becomes 1
	while (n > 1) {
		// If n is not divisible by 2, it is not a power of two
		if (n % 2 !== 0) {
			return false;
		}

		n /= 2;
	}

	// If we reach 1, the original number was a power of two
	return true;
}

// Test cases
console.log(isPowerOfTwo(1)); // Output: true
console.log(isPowerOfTwo(2)); // Output: true
console.log(isPowerOfTwo(4)); // Output: true
console.log(isPowerOfTwo(5)); // Output: false
console.log(isPowerOfTwo(16)); // Output: true

/**
 * Algorithm:
 * 1. If `n` is less than 1, return false.
 * 2. While `n` is greater than 1:
 *    - If `n` is not divisible by 2, return false.
 *    - Divide `n` by 2.
 * 3. If `n` becomes 1, return true.
 *
 * Worst Case:
 * Time Complexity: O(log n) - We divide the number by 2 on each iteration.
 * Space Complexity: O(1) - We only use a constant amount of extra memory.
 */
