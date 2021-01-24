//add inquirer, fs, path
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//add js needed
generateMarkdown = require("./utils/generateMarkdown");

// Asks for user input to create unique README
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github name?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a short description about your project.",
      name: "description",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"],
    },
    {
      type: "input",
      message: "What installation instructions do you want to include?",
      default: "`npm install`",
      name: "installation",
    },
    {
      type: "input",
      message: "How do you run tests for your project?",
      name: "testing",
    },
    {
      type: "input",
      message: "What does the user need to know about using this application?",
      name: "usage",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to this application?",
      name: "contributing",
    },
    {
      type: "input",
      message:
        "Would you like to include an image to your README? Add pathway here.",
      name: "image",
    },
  ])
  .then((answers) => {
    console.log("Your logged answers:", answers);
    console.log("Creating your unique README file...");
    //path for the location, data to write-- this writes to current directory in a README.md file
    fs.writeFileSync(
      path.join(process.cwd(), "README.md"),
      generateMarkdown(answers)
    );
  });