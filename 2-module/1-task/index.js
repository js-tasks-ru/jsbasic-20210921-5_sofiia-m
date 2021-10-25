function sumSalary(salaries) {
  let sum = 0;
  let value;
  for (let key in salaries) {
    value = salaries[key];
    if ("number" === typeof value && !isNaN(value) && value !== Infinity && value !== -Infinity) {
      sum += value;
    }
  }
  return sum;
}
