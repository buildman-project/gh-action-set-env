const core = require("@actions/core");
// const params = core.getInput("VariableList");

// const variables = params
//   .split(",")
//   .map((str) => str.trim())
//   .filter((str) => str != "");

const variables = Object.keys(process.env);

for (const variable of variables) {
  core.setOutput(variable, process.env[variable]);
}
