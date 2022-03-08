//IN ADDITION TO EMPLOYEE officernumber and getRole()---Manager
const Employee = require("./employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
