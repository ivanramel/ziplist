function zipList(list: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];
  for (let i = 0; i < list.length; i++) {
    result.push(list[i], list2[i]);
  }
  return result;
}

function zipListTheFunctionalWay(list: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];
  list.forEach((element, index) => {
    result.push(element, list2[index]);
  });
  return result;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
