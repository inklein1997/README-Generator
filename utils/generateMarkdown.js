// TODO: Create a function that returns a license badge based on which license is passed in
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
// TODO: Create a function that returns the license link
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
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection
  (license == 'No license') ? licenseSection = "This project is not licensed." : licenseSection = "This project is licensed under the terms of ["+license+"]("+renderLicenseLink(license)+")."
  return licenseSection
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {description, installation, usage, license, contribution, test}  = data
  return `# Title

  ## Table of Contents
  
  [${renderLicenseBadge(license)}](${renderLicenseLink(license)})

  ## Description
  ${description}
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## License
  ${renderLicenseSection(license)}
  
  ## Contributing
  ${contribution}
  
  ## Tests
  ${test}`
};

module.exports = generateMarkdown;
