function ziplist(numArr1, numArr2) {
    var finalArr = [];
    for (var i = 0; i < numArr1.length; i++) {
        finalArr.push(numArr1[i]);
        finalArr.push(numArr2[i]);
    }
    return finalArr;
}
function zipListTheFunctionalWay(numArr1, numArr2) {
    var finalArr = [];
    numArr1.forEach(function (element, index) {
        finalArr.push(element);
        finalArr.push(numArr2[index]);
    });
    return finalArr;
}
console.log(ziplist(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['d', 'e', 'f'], [4, 5, 6]));
