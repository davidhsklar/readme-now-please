// set up the license array

const licenseArray = ['MIT', 'Apache', 'Mozilla', 'Perl', 'Zlib']

// function to returns a license badge based on which license is selected by user
// If there is no license, return an empty string


function renderLicenseBadge(license) {

  if (license === licenseArray [0]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

  } else if (license === licenseArray[1]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === licenseArray [2]) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license === licenseArray [3]) {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  } else if (license === licenseArray [4]) {
    return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
  } else {
    return ""
  }

}
  



//  function that returns the license link based on the selected license
// If there is no license, return an empty string

function renderLicenseLink(license) {

  if (license === licenseArray [0]) {
    return `(https://opensource.org/licenses/MIT)`
  } else if (license === licenseArray [1]) {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if (license === licenseArray [2]) {
    return `(https://opensource.org/licenses/MPL-2.0)`
  } else if (license === licenseArray [3]) {
    return `(https://opensource.org/licenses/Artistic-2.0)`
  } else if (license === licenseArray [4]) {
    return `(https://opensource.org/licenses/Zlib)`
  } else {
    return ""
  }
} 


// function that returns more info about license based on selected license
// If there is no license, return an empty string

function renderLicenseSection(license) {

  if (license === licenseArray [0]) {
    return `Find out more about ${licenseArray[0]} by clicking here:`
  } else if (license === licenseArray [1]) {
    return `Find out more about ${licenseArray[1]} by clicking here:`
  } else if (license === licenseArray [2]) {
    return `Find out more about ${licenseArray [2]} by clicking here:`
  } else if (license === licenseArray [3]) {
    return `Find out more about  ${licenseArray [3]} by clicking here:`
  } else if (license === licenseArray [4]) {
    return `Find out more about ${licenseArray [4]} by clicking here:`
     
  } else {
    return ""
  }
}

// function to generate markdown file for README

function generateMarkdown(data) {
  return `# ${data.title}


  ## Badges

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  * [License](#license)

  * [Description](#description)

  * [Installation](#install)

  * [Usage](#usage)

  * [How to Contribute](#how-to-contribute)

  * [Tests](#tests)

  * [Questions?](#questions)

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description

  ${data.description}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## How to Contribute
  
  ${data.contributing} 
  [Contributor Covenant](https://www.contributor-covenant.org/)

  ## Tests
  ${data.test}

  ## Questions?
  ${data.questions}`;
}



module.exports = generateMarkdown;
