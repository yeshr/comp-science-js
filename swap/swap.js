/**
 * Created by yeshg on 4/27/2016.
 */
function swap(list, i, j) {
    var temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

module.exports = swap;