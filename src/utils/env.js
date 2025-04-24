const dotenv = require("dotenv");

dotenv.config();

const env = (key, defaultValue = null) => {
  return process.env[key] || defaultValue;
};

// Attach env to the global object
global.env = env;

module.exports = env;
