function factorial(n) {
  if (n === 0) {
    return 1;
  }
  let result = n;
  while (--n) {
    result *= n;
  }
  return result;
}
