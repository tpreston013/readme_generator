// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please provide a description of the project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide instructions for installation.',
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Please provide details about the project usage.',
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'What are the contribution guidelines?',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Please provide test instructions.',
        },
    
    ]);
};


const generateReadme = ({
    projectName,
    projectDescription,
    installation,
    usageInfo,
    contributionGuidelines,
    testInstructions
}) => `
# ${projectName}

# Description
${projectDescription}

# Installation
${installation}

# Usage
${usageInfo}

# Contribute
${contributionGuidelines}

# Testing
${testInstructions}
`

// Function to initialize app

const init = () => {
    questions()
    .then((userInput)=> fs.writeFileSync(`README.md`, generateReadme(userInput)))
    .catch((err) => {
        throw err
    })
};

// Function call to initialize app
init();
