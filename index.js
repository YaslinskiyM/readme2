const inquirer = require('inquirer');
const fs = require ('fs');

// TODO: Include packages needed for this application
const readmeGenerator = ({title, description, installation,  usageInformation, contributionGuidelines, testInstructions, license, gitHubUserName, emailAddress,  }) => {
    return `
    Project Title ${title}
    Description goes here ${description}
    Installation ${installation}
    Table of Content ${usageInformation}
    Contribution Guidlines ${contributionGuidelines}
    Test Instructions ${testInstructions }
    License Type ${license}
    GitHub Username ${gitHubUserName}
    Email Address ${emailAddress}

    `;
};

inquirer.prompt([
    {
        name: 'title',
        message: 'What is the title of this readme?',
        type: 'input',
    },

    {
        name: 'description',
        message: 'What is the ReadMe project about?',
        type: 'input',
    },
    

    {
        name: 'installation',
        message: 'What was used to create this?',
        type: 'input',
    },
    

    {
        name: 'usageInformation',
        message: 'What could this be used for?',
        type: 'input',
    },

    {
        name: 'contributionGuidelines',
        message: 'Who/what all contributed to this project?',
        type: 'input',
    },

    {
        name: 'testInstructions',
        message: 'Write out the instructions for testing this',
        type: 'input',
    },
    
    {
        name: 'license',
        message: 'What type of license would you like to apply?',
        type: 'list',
        choices: [
            'No License',
            'MIT',
            'Apache',
            'GPL',
        ],
    },

    {
        name: 'gitHubUserName',
        message: 'What is your GitHub Username',
        type: 'input',
    },

    {
        name: 'emailAddress',
        message: 'What is your email',
        type: 'input',
    },
    


]).then(response => {
    fs.writeFile(`${response.title}.md`, readmeGenerator(response), (err) => {
        err ? console.err(err) : console.log('success');
    });
});

//title, description, installation,  usageInformation, contributionGuidelines, testInstructions
    // TODO: Create an array of questions for user input

//    const questions = [];



// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

//TItle of project
//Table of Contents //when i click on the link it takes me to that spot on the page
// deswcritopms
// installatons intrusction
//usage info
//license-I get choices for this
//contributing
//test and questions- 
    //when asked for github username this is added to quesitons as a link to my gh
    //enter email this gets aded to this seciton with 






