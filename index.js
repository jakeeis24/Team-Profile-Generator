const fs = require("fs");
const { prompt } = require("inquirer");
//imports
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const managerPrompt = [
  {
    message: "Manager's name:",
    name: "managerName",
    type: "input",
  },
  {
    message: "Manager's ID number:",
    name: "id",
    type: "input",
  },
  {
    message: "Manager's email:",
    name: "email",
    type: "input",
  },
  {
    message: "Manager's office number:",
    name: "officeNumber",
    type: "input",
  },
];

const employeePrompt = [
  {
    message: "Which type of employee would you like to add?",
    name: "role",
    type: "list",
    choices: ["Engineer", "Intern"],
  },
  {
    message: (answers) => `What is the ${answers.role}'s name?`,
    name: "name",
  },
  {
    message: (answers) => `What is the ${answers.role}'s ID number?`,
    name: "id",
  },
  {
    message: (answers) => `What is the ${answers.role}'s email address?`,
    name: "email",
  },
  {
    message: (answers) => {
      if (answers.role === "Engineer") return "Engineer's github URL:";
      return "Intern's alma mater:";
    },
    name: "extra",
  },
];
const employees = [];

//manager prompt
function managerInit() {
  //create manager
  prompt(managerPrompt).then((data) => {
    console.log(data);
    //
    //add to the class
    const manager = new Manager(
      data.managerName,
      data.id,
      data.email,
      data.officeNumber
    );
    employees.push(manager);
    //then start employee prompt
    newEmployee();
  });
}
managerInit();
function newEmployee() {
  prompt({
    message: "Do you want to add another employee or create the roster?",
    type: "list",
    name: "choice",
    choices: ["Add another employee", "Create the roster"],
  }).then((data) => {
    console.log(`You chose to ==>`, data.choice);
    if (data.choice === "Add another employee") {
      prompt(employeePrompt).then((data) => {
        console.log("Employee answers --", data);
        if (data.role === "Engineer") {
          const eng = new Engineer(data.name, data.id, data.email, data.extra);
          employees.push(eng);
        } else {
          const int = new Intern(data.name, data.id, data.email, data.extra);
          employees.push(int);
        }
        console.log(
          `Your ${data.role}, ${data.name}, has been added to the roster!`
        );
      });
    } else {
      generateHTML();
    }
  });
}
//function generateHTML() {} //TODO
