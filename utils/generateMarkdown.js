// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license !== null) {
    switch (license) {
      case "GNU GPL v3":
        badge =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "The MIT License":
        badge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Mozilla Public License 2.0":
        badge =
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
      case "Apache 2.0 License":
        badge =
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      default:
        break;
    }
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if (license !== null) {
    switch (license) {
      case "GNU GPL v3":
        link = "https://www.gnu.org/licenses/gpl-3.0.en.html";
        break;
      case "The MIT License":
        link = "https://www.mit.edu/~amini/LICENSE.md";
        break;
      case "Mozilla Public License 2.0":
        link = "https://www.mozilla.org/en-US/MPL/2.0/";
        break;
      case "Apache 2.0 License":
        link = "https://www.apache.org/licenses/LICENSE-2.0";
        break;
      default:
        break;
    }
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This application is covered under ${license}  
  ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  ${renderLicenseBadge(response.license)}
  ## Description
  ${response.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  ## Installation
  ${response.installation}
  ## Usage
  ${response.usage}
  ## License
  ${renderLicenseSection(response.license)}
  ## Contributing
  ${response.contribution}
  ## Tests
  ${response.test}
  ## Questions
  Github: https://github.com/Cmeesh11  

  Email: cartermeesh11@gmail.com  
  `;
}

module.exports = generateMarkdown;
