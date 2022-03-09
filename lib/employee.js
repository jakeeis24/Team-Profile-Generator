const Manager = require("./manager");

//name id email getname() getid() getemail() getrole()---returns employee
class Employee {
  constructor(name, id, email, role = "Employee") {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
  generateHTMLCard(extra) {
    return `<div class="col-sm-6 col-xl-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this.role}</h6>
            <ul>
              <li>ID: ${this.id}</li>
              <li>Email: ${this.email}</li>
              ${
                this.role === "Manager"
                  ? `<li>Office Number: ${extra}</li>`
                  : this.role === "Engineer"
                  ? `<li>Github Account: ${extra}</li>`
                  : `<li>Alma Mater: ${extra}</li>`
              }
            </ul>
          </div>
        </div>
      </div>`;
  }
}
module.exports = Employee;
