function zipList(list, list2) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        result.push(list[i], list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list, list2) {
    var result = [];
    list.forEach(function (element, index) {
        result.push(element, list2[index]);
    });
    return result;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
