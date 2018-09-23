const { compose } = require("react-app-rewired");
const rewireDecorators = require("react-app-rewire-decorators-legacy");

module.exports = compose(
  rewireDecorators
);
