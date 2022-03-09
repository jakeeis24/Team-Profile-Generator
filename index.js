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

function newEmployee() {
  prompt({
    message: "Do you want to add another employee or create the roster?",
    type: "list",
    name: "choice",
    choices: ["Add another employee", "Create the roster"],
  }).then((data) => {
    console.log(`You chose to ==>`, data.choice);
    if (data.choice === "Add another employee") {
      //WHY YOU NO WORK
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
        setTimeout(newEmployee, 2000);
      });
    } else {
      generateHTML();
    }
  });
}
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
function generateHTML() {
  console.log(`Cards being generated for all employees!`);

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>Team Roster</title>
  </head>
  <body>
    <div class="jumbotron text-center my-5">
      <h1>Team Roster!</h1>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      ${employees
        .map((employee) =>
          employee.generateHTMLCard(
            employee.officeNumber || employee.github || employee.school
          )
        )
        .join("")}
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
  fs.writeFileSync("./dist/output.html", html);
  console.log(
    "Check the 'output.html' file in the dist directory for your website!"
  );
}
