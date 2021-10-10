function filterRange(arr, a, b) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current >= a && current <= b) {
      filteredArray.push(current);
    }
  }
  return filteredArray;
}
