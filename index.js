// Importing required packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
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
function writeToFile(fileName, data, err) {
  fs.writeFile(fileName, data, err);
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
    let markdown = generateMarkdown(response);
    writeToFile("README.md", markdown, (err) => err ? console.log(error) : console.log("Success!"));
  })
}

// Function call to initialize app
init();
