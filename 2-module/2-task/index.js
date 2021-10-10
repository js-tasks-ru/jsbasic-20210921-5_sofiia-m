function isEmpty(obj) {
  for (let objKey in obj) {
    return obj[objKey] in obj;
  }
  return true;
}
