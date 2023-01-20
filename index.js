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
        name: 'contribution',
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
    },
    // * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    // * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    // * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    // * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README
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
