import Employee from "../Employee.js/index.js";

export default class Agenda {
  constructor(tableAgenda, tableInfo) {
    this._tableAgenda = tableAgenda;
    this._tableInfo = tableInfo;
    this._numEmployees = 0;
    this._sumAge = 0;
    this._initTables();
  }
  /*localStorage.removeItem("employees"); Para poder eliminar contenido del localStorage*/
  _initTables() {
    // Leer la información que tengo en el localStorage
    let employees = JSON.parse(localStorage.getItem("employees"));
    this._employees = [];

    employees.forEach((objEmployee, index) => {
      let employee = new Employee(objEmployee);
     
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
  
      
    }); //Ciclos 
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

    let objEmployee = {
      name: employee.name,
      email: employee.email,
      birthday: employee.birthday
    };

    this._employees.push(objEmployee);
    localStorage.setItem("employees", JSON.stringify(this._employees)); //Guardar el objeto

    console.log(localStorage.getItem("employees"));



  }
}