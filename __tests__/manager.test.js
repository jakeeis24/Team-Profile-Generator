const Manager = require("../lib/manager");
describe("manager tests", () => {
  it("should set the manager office number from its constructor", () => {
    const officeNum = 31415;
    const employee = new Manager("Charlie", 1, "email@charlie.com", officeNum);
    expect(employee.officeNumber).toEqual(officeNum);
  });
});
