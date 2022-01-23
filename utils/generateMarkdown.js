let count = 0   //needed for ordered list display on .md file
// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge
  switch (license) {
    case 'MIT':
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'ISC':
      badge = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
      break;
    case 'Creative Commons Attribution 4.0':
      badge = '![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)';
      break;
    case 'GNU General Public License v3.0':
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    default:
      badge = ""
  }
  return badge
}
// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link
  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'ISC':
      link = 'https://opensource.org/licenses/ISC';
      break;
    case 'Creative Commons Attribution 4.0':
      link = 'https://creativecommons.org/licenses/by/4.0/';
      break;
    case 'GNU General Public License v3.0':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    default:
      link = ""
  }
  return link
}
// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection
  (license == 'No license') ? licenseSection = "This project is not licensed." : licenseSection = "This project is licensed under the terms of ["+license+"]("+renderLicenseLink(license)+")."
  return licenseSection
}

//renders description.  Accounts for difference in description if their is/isnt installations
function renderDescription(title, whatDesc, packageName, packageURL, whyDesc, installation) {
  let description;
  installation ? description = `**${title}** is a ${whatDesc} using the [${packageName} Package](${packageURL}). **${title}** was created to ${whyDesc}.` : description = `**${title}** is a ${whatDesc}. **${title}** was created to ${whyDesc}.`
  return description
}

//renders agreement for code of conduct if user selected they agreed to its terms
function renderAgreementCOCSection(agreementCOC) {
  let COCsection
  agreementCOC === true ? COCsection = "Before contributing to **README.md Generator**, please read this [code of conduct](code_of_conduct.md)[^1].<br>" : COCsection = ""
  return COCsection
}

//renders badge for code of conduct if user selected they agreed to its terms
function renderCodeOfConductBadge(agreementCOC) {
  let COCbadge
  (agreementCOC) ? COCbadge = "[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)" : COCbadge = ""
  return COCbadge
}

//renders installation instructions for 2 situations.  situation 1=if there is installation instructions or situation 2=if no packages need to installed
function renderInstallationSection(installation, packageName, packageURL, packageName, title, packageInstallCode) {
  let installationSection
  (installation) ? installationSection = `The [${packageName} Package](${packageURL}) is required for **${title}**.  Prior to running this application, please ensure the ${packageName} package is installed by running the following command in your command-line... :
  
  \`\`\`
  ${packageInstallCode}
  \`\`\`` : installationSection = `No package installations are required for **${title}**.`
  return installationSection
}

//renders github line if user inputs
function renderGitHub(github, platform, count) {
  count ++
  let githubContact
  platform.includes('GitHub') ? githubContact = `${count}. GitHub -- [${github}](https://github.com/${github})` : githubContact = ""
  return githubContact
}

//renders email line if user inputs
function renderEmail(email, platform, count) {
  count ++
  let emailContact
  platform.includes('Email') ? emailContact = `${count}. Email -- ${email}` : emailContact = ""
  return emailContact
}

//renders footer if user agreed to code of conduct
function renderFooter(agreementCOC) {
  let footer
  agreementCOC ? footer = "[^1]: Code of Conduct provided by [Contributor Covenant](https://www.contributor-covenant.org/)" : footer = ""
  return footer
}

//function to generate markdown for README
function generateMarkdown(answers) {
  const {title, whatDesc, whyDesc, installation, packageName, packageURL, packageInstallCode, usage, license, agreementCOC, contribution, test, platform, email, github}  = answers
  return `# ${title}
  [${renderLicenseBadge(license)}](${renderLicenseLink(license)})
  ${renderCodeOfConductBadge(agreementCOC)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Description
  ${renderDescription(title, whatDesc, packageName, packageURL, whyDesc, installation)}
  
## Installation
  Since **${title}** is a _NodeJS_ application, you must have NodeJS downloaded.  Please download [here](https://nodejs.org/en/download/) if you have not done so.
  ${renderInstallationSection(installation, packageName, packageURL, packageName, title, packageInstallCode)}

## Usage
  1. To invoke the application, enter the following command
  \`\`\`
  ${usage}
  \`\`\`

## License
  ${renderLicenseSection(license)}
  
## Contribution
${renderAgreementCOCSection(agreementCOC)}}
Here's how you can contribute...<br>
${contribution}

## Tests
${test}

## Questions
  If you have any questions, please contact me via:
  ${renderGitHub(github, platform, count)}
  ${renderEmail(email, platform, count)}

  ${renderFooter(agreementCOC)}
  `
};

//exports generateMarkdown so it can be pulled at index.js
module.exports = generateMarkdown;
