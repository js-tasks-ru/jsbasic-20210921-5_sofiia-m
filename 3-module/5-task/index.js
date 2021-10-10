function getMinMax(str) {
  let result = {
    min: 0,
    max: 0
  };

  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let current = Number(arr[i]);
    if (current < result.min) {
      result.min = current;
    } else if (current > result.max) {
      result.max = current;
    }
  }
  return result;
}
