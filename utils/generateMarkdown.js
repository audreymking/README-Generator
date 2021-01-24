//this function takes the user input and adds it to the README template
function generateMarkdown(data) {
  return `
# Project Title

${data.title}

![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description

${data.description}

## Table of Contents

* [Title](#title)
* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [Image](#images)
* [Contributing](#contributing)
* [Testing](#testing)
* [Contact](#contact)


## Installation

To get started please run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Image

![Project ${data.image}](${data.image})

## Contributing

To contribute please follow these directions:
${data.contributing}

## Testing

Run the following command to run application tests.

\`\`\`
${data.testing}
\`\`\`

## Contact

My Email: ${data.email}

GitHub: ${data.github}

Check out my projects at [${data.github}](https://github.com/${data.github}/).
`
};
  

module.exports = generateMarkdown;
