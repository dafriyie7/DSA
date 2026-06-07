/**
 * Searches for a target value in a sorted array using Binary Search.
 *
 * Binary Search repeatedly divides the search range in half
 * until the target is found or the range becomes empty.
 *
 * Note:
 * The input array must be sorted in ascending order.
 *
 * Examples:
 * binarySearch([10, 20, 30, 40, 50], 30) → 2
 * binarySearch([10, 20, 30, 40, 50], 25) → -1
 *
 * @param {number[]} arr - A sorted array of numbers.
 * @param {number} target - The value to find.
 * @returns {number} The index of the target if found, otherwise -1.
 */
function binarySearch(arr, target) {
	// Initialize the search boundaries
	let left = 0;
	let right = arr.length - 1;

	// Continue searching while the range is valid
	while (left <= right) {
		// Find the middle index
		const mid = Math.floor((left + right) / 2);

		// Check if the middle element is the target
		if (arr[mid] === target) {
			return mid;
		}

		// If target is greater, search the right half
		if (arr[mid] < target) {
			left = mid + 1;
		}
		// Otherwise, search the left half
		else {
			right = mid - 1;
		}
	}

	// Target was not found
	return -1;
}

// Test cases
console.log(binarySearch([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(binarySearch([10, 20, 30, 40, 50], 25)); // Output: -1
console.log(binarySearch([1, 3, 5, 7, 9], 1)); // Output: 0
console.log(binarySearch([1, 3, 5, 7, 9], 9)); // Output: 4

/**
 * Algorithm:
 * 1. Set two pointers:
 *    - `left` at the beginning of the array.
 *    - `right` at the end of the array.
 * 2. Find the middle element.
 * 3. If the middle element equals the target, return its index.
 * 4. If the target is greater than the middle element,
 *    move `left` to `mid + 1`.
 * 5. If the target is smaller than the middle element,
 *    move `right` to `mid - 1`.
 * 6. Repeat until the target is found or the search range becomes empty.
 * 7. Return -1 if the target is not found.
 *
 * Example:
 * binarySearch([10, 20, 30, 40, 50], 40)
 *
 * Step 1: mid = 2 → arr[2] = 30
 *         40 > 30, search right half
 *
 * Step 2: mid = 3 → arr[3] = 40
 *         Match found
 *
 * Step 3: Return index 3
 *
 * Worst Case:
 * Time Complexity: O(log n) - The search range is halved in each iteration.
 * Space Complexity: O(1) - Only a few variables are used.
 */
