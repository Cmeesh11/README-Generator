// Importing required packages
const inquirer = require("inquirer");
const fs = require("fs");
// Created an array of questions for use in the command line
const questions = [
  "What is the title of your project?",
  "Write a description for your project.",
  "What are the steps required to install your project?",
  "Provide instructions and examples for use: ",
  "What are your guidelines for future contributers?",
  "Provide instructions and code for testing (what commands to run, what to click on, etc.)."
];

// Creates a readme file with inputted data
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data);

}
// Starts the program
function init() {
  inquirer.prompt([
    {
      type: "input",
      message: questions[0],
      name: "title"
    },
    {
      type: "input",
      message: questions[1],
      name: "description"
    },
    {
      type: "input",
      message: questions[2],
      name: "installation"
    },
    {
      type: "input",
      message: questions[3],
      name: "usage"
    },
    {
      type: "input",
      message: questions[4],
      name: "contribution"
    },
    {
      type: "input",
      message: questions[5],
      name: "test"
    }
  ]).then((response) => {
    writeToFile("README.md", )
  })
}

// Function call to initialize app
init();
