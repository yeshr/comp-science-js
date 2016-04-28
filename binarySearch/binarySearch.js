/**
 * Created by yeshg on 4/27/2016.
 */
function binarySearch(list, value, left, right) {
    var pivot;

    left = left !== undefined ? left : 0;
    right = right !== undefined ? right : list.length - 1;

    if (left >= right) {
        return -1;
    }
    pivot = Math.floor(left + right / 2);

    if (list[pivot] === value) {
        return pivot;
    }

    if (list[pivot] < value) {
        return binarySearch(list, value, pivot + 1, right);
    }

    return binarySearch(list, value, left, pivot - 1);
}

console.log(binarySearch([ 1, 3, 2, 4, 6, 7, 8, 10, 11, 13 ], 4));