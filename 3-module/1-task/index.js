function namify(users) {
  let names = [];
  for (let usersKey in users) {
    names.push(users[usersKey].name);
  }
  return names;
}
