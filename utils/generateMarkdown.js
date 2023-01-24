// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge ="";
  if(data.license != 'None' && data.license != 'Other') {
    licenseBadge = "[![License](https://img.shields.io/badge/License-" + data.license + "-lightgray.svg)](https://opensource.org/licenses/" + data.license +")";
  }
  // console.log(data);
  return `# ${data.title} \n ${licenseBadge}
\n ## Description
\n ${data.description}
\n ## Table of Contents
\n * [Installation](#installation)
\n * [Usage](#usage)
\n * [License](#license)
\n * [Contributing](#contributing)
\n * [Tests](#tests)
\n * [Questions](#questions)
\n ## Installation
\n ${data.installation}
\n ## Usage
\n ${data.usage}
\n This is the application ["Look and Feel"](./utils/README_Generator_Demo.avi)
\n ## License
\n ${data.license}
\n ## Contributing
\n ${data.contributing}
\n ## Tests
\n ${data.testing}
\n ## Questions
\n If you have any questions, please contact me at <${data.email}> .
\n This project can be found on <${data.github}>.`;
}

module.exports = generateMarkdown;
