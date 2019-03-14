import Agenda from "./Agenda.js";
import Employee from "./Employee.js";

class Main {
  constructor() {
    let agenda = new Agenda(
      document.querySelector("#agenda"),
      document.querySelector("#info")
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let sBirthday = document.querySelector("#birthday").value;
      sBirthday = sBirthday.split("-");

      let birthday = new Date(sBirthday[0], sBirthday[1] - 1, sBirthday[2]);

      let employee = new Employee(name, email, birthday);

      agenda.addEmployee(employee);
    });
  }
}

let m = new Main();
