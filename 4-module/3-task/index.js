function highlight(table) {
  let elements = table.getElementsByTagName("tr");
  for (const element of elements) {
    let childNodes = element.children;
    for (let child of childNodes) {
      let isAvailable = child.getAttribute("data-available");
      if (isAvailable === "true") {
        element.classList.add("available");
      } else if (isAvailable === "false") {
        element.classList.add("unavailable");
      } else if (isAvailable == null) {
        element.setAttribute("hidden", "hidden");
      }

      let textContent = child.textContent;

      if (textContent === "m") {
        element.classList.add("male");
      } else if (textContent === "f") {
        element.classList.add("female");
      }

      if (textContent < 18) {
        element.style.textDecoration = "line-through";
      }
    }
  }
}
