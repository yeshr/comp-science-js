/**
 * Created by yeshg on 4/27/2016.
 */

var swap = require('../swap/swap.js');

function bubbleSort(list) {
    var i = list.length;
    var j;
    while (i > 0) {
        j = i;
        while (j > 0) {
            if (list[j] < list[j-1]) {
                swap(list, j, j-1);
            }
            j--;
        }
        i--;
    }
    return list;
}

module.exports = bubbleSort;
//console.log( bubbleSort([3, 2, 7, 5, 1]) );

// time complexity: worst & average O(n^2)
