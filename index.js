const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/readmeusermade.md");
});
app.listen(3000, function () {
});

// required packages/files

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");



// Make an arry of questions for users to answer

function userAnswers () {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },

        {

            type: 'input',
            name: 'install',
            message: 'Please enter installation instructions (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your project!');
                    return false;
                }
            }
        },

        {

            type: 'input',
            name: 'usage',
            message: 'Please enter usage information.',
            
        },

        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter information on how people may contribute to the project.',
            
        },

        {
            type: 'input',
            name: 'test',
            message: 'Please enter test instructions.',
           

        },

        {
            type: 'list',
            name: 'license',
            message: 'Please choose your license.',
            choices: [
                'MIT',
                'Apache',
                'Mozilla',
                'Perl',
                'Zlib'

            ]
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter any questions you may have.',
        },
        
           
    
    ])

}
console.log('To exit, press ctl+c, but be sure to visit localhost:3000 first for a nice surpise!');

  //write the file

    function writeToFile (fileName, data){
        fs.writeFile(`readmeusermade.md`, data, function(err, result){
            if(err) console.log ('error');
        });
    }


// function to initialize app


async function init () {
    let answers = await userAnswers ();
   writeToFile((answers.fileName), (generateMarkdown(answers)));
}

// Function call to initialize app
init();
