/**
 * Created by yeshg on 4/27/2016.
 */

var swap = require('../swap/swap.js');

function selectionSort(list) {
    var min,
        startIndex = 0,
        i,
        len = list.length;

    for (; startIndex < len; startIndex++) {
        min = startIndex;
        for (i = startIndex + 1; i < len; i++) {
            if (list[i] < list[min]) {
                min = i;
            }
        }

        if (startIndex !== min) {
            swap(list, startIndex, min);
        }
    }
    return list;
}

module.exports = selectionSort;

//console.log( selectionSort([3, 2, 7, 5, 1]) );

// time complexity: average & worst case  O(n^2)
