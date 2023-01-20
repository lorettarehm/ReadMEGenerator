const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
 const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of the project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Are there any usage instructions to pass to your users?',
        name: 'usage',
    },    
    {
        type: 'list',
        message: 'Which license is the application under?',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache', 'Other', 'None']
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How can the application be tested?',
        name: 'testing',
        default: 'npm test'
    },
    {
        type: 'input',
        message: 'What is your email for contact?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please provide link for github repository:',
        name: 'github',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 
        (err) => err ? console.error(err) : console.log('Success!'));
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
            // Write the file
            writeToFile("README.md",generateMarkdown(response));
        }
    );
}

// function call to initialize program
init();
