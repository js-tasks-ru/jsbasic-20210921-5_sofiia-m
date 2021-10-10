function camelize(str) {
  let charArr = str.split("-");
  for (let i = 1; i < charArr.length; i++) {
    charArr[i] = charArr[i].toUpperCase().substr(0, 1) + charArr[i].substr(1);
  }
  return charArr.join("");
}
