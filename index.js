// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const functions = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Input project iescription',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Input installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Input usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Input contribution guidelines',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Input test instructions',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'title',
        choices: ['MIT','ISC','Creative Commons Attribution 4.0', 'GNU General Public License v3.0']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
