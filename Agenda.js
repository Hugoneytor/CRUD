export default class Agenda {
  constructor(tableAgenda, tableInfo) {
    this._tableAgenda = tableAgenda;
    this._tableInfo = tableInfo;
    this._numEmployees = 0;
    this._sumAge = 0;
  }

  addEmployee(employee) {
    let row = this._tableAgenda.insertRow(-1);

    let cellName = row.insertCell(0);
    let cellEmail = row.insertCell(1);
    let cellBirthday = row.insertCell(2);
    let cellAge = row.insertCell(3);

    cellName.innerHTML = employee.name;
    cellEmail.innerHTML = employee.email;
    cellBirthday.innerHTML = employee.getBirthdayAsString();
    cellAge.innerHTML = employee.getAge();

    this._numEmployees++; // this._numEmployees = this._numEmployees + 1
    this._sumAge += employee.getAge(); // this._sumAge = this._sumAge + employee.getAge()

    this._tableInfo.rows[0].cells[1].innerHTML = this._numEmployees;

    this._tableInfo.rows[1].cells[1].innerHTML =
      this._sumAge / this._numEmployees;
  }
}
