/**
 * Searches for a target value in a sorted array using Recursive Binary Search.
 *
 * Recursive Binary Search repeatedly divides the search range in half
 * by calling itself on the appropriate half of the array until the
 * target is found or the search range becomes empty.
 *
 * Note:
 * The input array must be sorted in ascending order.
 *
 * Examples:
 * recursiveBinarySearch([10, 20, 30, 40, 50], 30) → 2
 * recursiveBinarySearch([10, 20, 30, 40, 50], 25) → -1
 *
 * @param {number[]} arr - A sorted array of numbers.
 * @param {number} target - The value to find.
 * @param {number} left - The starting index of the search range.
 * @param {number} right - The ending index of the search range.
 * @returns {number} The index of the target if found, otherwise -1.
 */
function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
	// Base case: target does not exist in the array
	if (left > right) {
		return -1;
	}

	// Find the middle index
	const mid = Math.floor((left + right) / 2);

	// Check if the middle element is the target
	if (arr[mid] === target) {
		return mid;
	}

	// If target is greater, search the right half
	if (arr[mid] < target) {
		return recursiveBinarySearch(arr, target, mid + 1, right);
	}

	// Otherwise, search the left half
	return recursiveBinarySearch(arr, target, left, mid - 1);
}

// Test cases
console.log(recursiveBinarySearch([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(recursiveBinarySearch([10, 20, 30, 40, 50], 25)); // Output: -1
console.log(recursiveBinarySearch([1, 3, 5, 7, 9], 1)); // Output: 0
console.log(recursiveBinarySearch([1, 3, 5, 7, 9], 9)); // Output: 4
console.log(recursiveBinarySearch([2, 4, 6, 8, 10], 8)); // Output: 3

/**
 * Algorithm:
 * 1. Start with the entire array as the search range.
 * 2. Find the middle index of the current range.
 * 3. If the middle element equals the target, return its index.
 * 4. If the target is greater than the middle element:
 *    - Recursively search the right half.
 * 5. If the target is smaller than the middle element:
 *    - Recursively search the left half.
 * 6. If the search range becomes invalid (`left > right`),
 *    return -1 because the target does not exist.
 *
 * Example:
 * recursiveBinarySearch([10, 20, 30, 40, 50], 40)
 *
 * Step 1:
 * left = 0, right = 4
 * mid = 2 → arr[2] = 30
 * 40 > 30, search right half
 *
 * Step 2:
 * left = 3, right = 4
 * mid = 3 → arr[3] = 40
 * Match found
 *
 * Step 3:
 * Return index 3
 *
 * Worst Case:
 * Time Complexity: O(log n)
 * - The search range is halved during each recursive call.
 *
 * Space Complexity: O(log n)
 * - Due to the recursive call stack.
 */
