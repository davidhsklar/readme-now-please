// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const { writeFile, fileContent } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation? (Required)',
        validate: motivationInput => {
          if (motivationInput) {
            return true;
          } else {
            console.log('Please enter your motivation!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'project',
        message: 'Why did you build this project? (Required)',
        validate: projectInput => {
          if (projectInput) {
            return true;
          } else {
            console.log('Please enter why you built this!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'problem',
        message: 'what problem does it solve? (Required)',
        validate: problemInput => {
          if (problemInput) {
            return true;
          } else {
            console.log('Please enter what this sovles!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'learn',
        message: 'what did you learn?:',
        validate: learnInput => {
          if (learnInput) {
            return true;
          } else {
            console.log('Please enter what you learned!');
            return false;
          }
        }
      }
    ]);
  };

// TODO: Create a function to write README file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {});
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
