const Engineer = require("../lib/engineer");
describe("engineer tests", () => {
  it("should set the github account from the constructor", () => {
    const testgitHub = "mygithub";
    const employee = new Engineer("Kim", 2, "email@kim.com", testgitHub);
    expect(employee.github).toEqual(testgitHub);
  });
});
