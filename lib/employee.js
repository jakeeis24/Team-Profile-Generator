// const Manager = require("./manager");

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
            <h4 class="card-title">${this.name}</h4>
            <h5 class="card-subtitle mb-2 text-muted">${this.role}</h5>
            
              <p>ID: ${this.id}</p>
              <p>Email: <a href= "mailto:${this.email}">${this.email}</a></p>
              ${
                this.role === "Manager"
                  ? `<p>Office Number: ${extra}</p>`
                  : this.role === "Engineer"
                  ? `<p>Github: <a href="https://github.com/${extra}" target="_blank">${extra}</a></p>`
                  : `<p>Alma Mater: ${extra}</p>`
              }
            
          </div>
        </div>
      </div>`;
  }
}
module.exports = Employee;
