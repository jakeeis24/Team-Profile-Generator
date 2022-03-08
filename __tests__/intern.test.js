const Intern = require("../lib/intern");
describe("intern tests", () => {
  it("should set the school name from its constructor", () => {
    const schoolName = "TCU";
    const employee = new Intern(
      "Ashleigh",
      12,
      "ashemail@email.com",
      schoolName
    );
    expect(employee.school).toEqual(schoolName);
  });
});
