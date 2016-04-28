/**
 * Created by yeshg on 4/26/2016.
 */

// average case O(n log n)
// worst case O(n^2)

var swap = require('.,/swap/swap.js');

function partition(arr, left, right) {
    // pivoting at the middle of the array
    var pivot = Math.floor((left + right) / 2);

    while (left < right) {
        while (arr[left] < arr[pivot]) {
            left++;
        }

        while (arr[right] > arr[pivot]) {
            right--;
        }

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    return left;
}

function quickSort(arr, left, right) {
    left = left || 0;
    right = right || arr.length - 1;

    if (arr.length > 1) {
        var index = partition(arr, left, right);

        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }

        if (index < right) {
            quickSort(arr, index, right);
        }
    }

    return arr;
}

//var arr=[6, 8, 2, 1, 4, 10, 3, 13, 11, 7];
//console.log(quickSort(arr));

module.exports = quickSort;
