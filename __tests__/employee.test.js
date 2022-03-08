const Employee = require("../lib/employee");
describe("employee test", () => {
  it("should show a new employee object has been created", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
  it("should show a name can be set in the new employee object", () => {
    const name = "Jake";
    const employee = new Employee(name);
    expect(employee.name).toEqual(name);
  });
});
