// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge ="";
  if(data.license != 'None' && data.license != 'Other') {
    licenseBadge = "[![License](https://img.shields.io/badge/License-" + data.license + "-lightgray.svg)](https://opensource.org/licenses/" + data.license +")";
  }

  return `# ${data.title} \n ${licenseBadge}
\n ## Description
\n ${data.description}
\n ## Table of Contents
\n * Installation
\n * Usage
\n * License
\n * Contributing
\n * Tests
\n * Questions
\n ## Installation
\n ${data.installation}
\n ## Usage
\n ${data.usage}
\n ## License
\n ${data.license}
\n ## Contributing
\n ${data.contributing}
\n ## Tests
\n ${data.testing}
\n ## Questions
\n If you have any questions, please contact me at ${data.email}.
\n
\n This project can be found on ${data.github}.`;
}

module.exports = generateMarkdown;
