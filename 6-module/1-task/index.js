/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.insertHead();
    this.insertBody(rows);
    this.onClick();
  }

  insertHead() {
    let head = this.elem.createTHead();
    let row = head.insertRow();
    row.insertCell().textContent = "Имя";
    row.insertCell().textContent = "Возраст";
    row.insertCell().textContent = "Зарплата";
    row.insertCell().textContent = "Город";
    row.insertCell().textContent = "";
  }

  insertBody (rows) {
    this.body = this.elem.createTBody();
    for (let i = 0; i < rows.length; i++) {
      this.body.insertRow();
      let currentRow = rows[i];
      let row = this.body.getElementsByTagName("tr").item(i);
      row.insertCell().textContent = currentRow.name;
      row.insertCell().textContent = currentRow.age;
      row.insertCell().textContent = currentRow.salary;
      row.insertCell().textContent = currentRow.city;
      row.insertCell().innerHTML = "<button>X</button>";
    }
    return this.body;
  }

  onClick() {
    let buttons = this.body.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener("click", evt => button.parentElement.parentElement.remove())
    }
  }
}
