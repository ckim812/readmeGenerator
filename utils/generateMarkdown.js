// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license}](https://img.shields.io/badge/License-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output =  
`# ${data.title}
` + renderLicenseBadge(data.license) + `

## Description:

${data.description}

## Table of Contents:

## Installation:

${data.installation}

## Usage:

${data.usage}

## License:

This application uses ${data.license}.

## Contributing:

${data.contributing}

## Tests:

${data.tests}

## Questions?

You can reach me at:

GitHub: ${data.github}

Email: ${data.email}

<div align="center">
	<br>
	<a href="https://github.com/sindresorhus/css-in-readme-like-wat/blame/main/header.svg">
		<img src="header.svg" width="800" height="400" alt="Click to see the source">
	</a>
	<br>
</div>
`;

console.log(typeof(output));
console.log(data.license);
return output;
}

module.exports = generateMarkdown;


// ## Table of Contents (Optional)

// If your README is long, add a table of contents to make it easy for users to find what they need.

// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)
