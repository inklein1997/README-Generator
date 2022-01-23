// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const generateCOC = require('./utils/generateCodeOfConduct.js')
console.log(generateMarkdown)
console.log(generateCOC)

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is your project? (Complete Statement): [Title] is a',
        name: 'whatDesc',
    },
    {
        type: 'input',
        message: 'Why did you create your project? (Complete Statement): [Title] was created to',
        name: 'whyDesc',
    },
    {
        type: 'confirm',
        message: 'Do any packages need to be installed for you application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the name of the package?',
        name: 'packageName',
        when: (answers) => answers.installation === true,
    },
    {
        type: 'input',
        message: "Enter that package's URL",
        name: 'packageURL',
        when: (answers) => answers.installation === true,
    },
    {
        type: 'input',
        message: 'What code snippit is needed to install that package?',
        name: 'packageInstallCode',
        when: (answers) => answers.installation === true,
    },
    {
        type: 'input',
        message: 'What code is needed to invoke [Title]?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['No license','MIT','ISC','Creative Commons Attribution 4.0', 'GNU General Public License v3.0']
    },
    {
        type: 'confirm',
        message: "Because you have opted for a license, do you agree to Contributer Covenent's Code of Conduct?  For more information visit https://www.contributor-covenant.org/",
        name: 'agreementCOC',
        when: (answers) => answers.license != 'No license',
    },
    {
        type: 'input',
        message: 'Input contribution guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Input test instructions',
        name: 'test'
    },
    {
        type: 'checkbox',
        message: 'Which platforms would you like for people to reach out to you with questions?',
        name: 'platform',
        choices: ['Email','GitHub'],
    },
    {
        type: 'input',
        message: 'Enter your Email',
        name: 'email',
        when: (answers) => answers.platform.includes('Email'),
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'github',
        when: (answers) => answers.platform.includes('GitHub'),
    },
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    console.log(answers)
    fs.writeFile('./generated/README.md', generateMarkdown(answers), (err) => {
        err ? console.log(err) : console.log('README.md generated!')
    })
    fs.writeFile('./generated/code_of_conduct.md', generateCOC(answers), (err) => {err ? console.log(err) : console.log('code_of_conduct.md generated!')})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(writeToFile)
}

// Function call to initialize app
init();