/**
 * Searches for a target value in an array using Linear Search.
 *
 * Linear Search checks each element one by one until the target
 * is found or the end of the array is reached.
 *
 * Examples:
 * linearSearch([10, 20, 30, 40], 30) → 2
 * linearSearch([5, 15, 25], 10) → -1
 *
 * @param {number[]} arr - The array to search through.
 * @param {number} target - The value to find.
 * @returns {number} The index of the target if found, otherwise -1.
 */
function linearSearch(arr, target) {
	// Check each element in the array
	for (let i = 0; i < arr.length; i++) {
		// If the current element matches the target
		if (arr[i] === target) {
			return i;
		}
	}

	// Target was not found
	return -1;
}

// Test cases
console.log(linearSearch([10, 20, 30, 40], 30)); // Output: 2
console.log(linearSearch([5, 15, 25], 10)); // Output: -1
console.log(linearSearch([1, 2, 3, 4, 5], 1)); // Output: 0
console.log(linearSearch([1, 2, 3, 4, 5], 5)); // Output: 4

/**
 * Algorithm:
 * 1. Start from the first element of the array.
 * 2. Compare each element with the target value.
 * 3. If a match is found, return the current index.
 * 4. If the end of the array is reached without finding the target,
 *    return -1.
 *
 * Example:
 * linearSearch([10, 20, 30, 40], 30)
 *
 * Step 1: Compare 10 with 30 → No match
 * Step 2: Compare 20 with 30 → No match
 * Step 3: Compare 30 with 30 → Match found
 * Step 4: Return index 2
 *
 * Worst Case:
 * Time Complexity: O(n) - We may need to check every element once.
 * Space Complexity: O(1) - No extra space is used regardless of input size.
 */
