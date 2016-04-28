/**
 * Created by yeshg on 4/27/2016.
 */

function merge(left, right) {
        var result = [];


    while(left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }

    return result.concat(left.slice(0), right.slice(0));
}


function mergeSort(list) {
    if (list.length < 2) {
        return list;
    }

    var middle = Math.floor(list.length / 2),
        left = list.slice(0, middle),
        right = list.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;

//var arr=[6, 8, 2, 1, 4, 10, 3, 13, 11, 7];
//console.log(mergeSort(arr));

// average & worst case O(n log n)
// space complexity O(n)
// Stable sort
// Not an in place sort algorithm
