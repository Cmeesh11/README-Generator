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
      default: "Unnamed Project",
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
      default: "None",
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
      default: "Developers can contribute to this project by targeting an area of improvement, and creating a pull request to resolve the issue.",
      name: "contribution"
    },
    {
      type: "input",
      message: questions[5],
      default: "To run this program, navigate to the root directory and run 'node index.js` in the command line",
      name: "test"
    },
    {
      type: "list",
      message: "Choose a license: ",
      choices: ["The MIT License", "Mozilla Public License 2.0", "Apache 2.0 License", "GNU GPL v3"],
      name: "license"
    }
  ]).then((response) => {
    let markdown = generateMarkdown(response);
    writeToFile("newREADME.md", markdown, (err) => err ? console.log(error) : console.log("Success!"));
  })
}

// Function call to initialize app
init();
