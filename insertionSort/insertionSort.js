/**
 * Created by yeshg on 4/26/2016.
 */

function insertion_sort(arr) {
    var i,
        len = arr.length,
        j,
        value;

    for(i=0; i<len; i++) { // times = n
        value = arr[i];


        for(j = i-1; j > -1, arr[j] > value; j--) { // times = n in reverse sorted array
            arr[j+1] = arr[j];
        }

        arr[j+1] = value;
    }
    return arr;
}

console.log(insertion_sort([5, 2, 6, 1, 3, 9]));

exports.insertion_sort = insertion_sort;

// Average & worst case O(n^2)
// Best case O(n)
// Is a stable sort