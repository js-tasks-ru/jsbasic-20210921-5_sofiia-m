function makeFriendsList(friends) {
  let ul = document.createElement("ul");

  for (const friend of friends) {
    let li = document.createElement("li");
    let name = [];
    for (let key in friend) {
      name.push(friend[key]);
    }
    li.textContent = name.join(" ");
    ul.append(li);
  }
  return ul;
}
