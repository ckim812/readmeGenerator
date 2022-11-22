const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How is the project used?",
    },
    {
      type: "checkbox",
      name: "license",
      message: "What license does your project have?",
      choices: ["MIT", "ISC", "none"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Who contributed to your project?",
    },
    {
      type: "input",
      name: "tests",
      message: "What tests are required for your project?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    }
  ])
  .then((data) => {
    let readmeContent = generateMarkdown(data);
    fs.writeFile("README2.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });