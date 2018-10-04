const { compose } = require('react-app-rewired');
const rewireDecorators = require('react-app-rewire-decorators-legacy');
const rewireSass = require('react-app-rewire-scss');

module.exports = compose(
  rewireDecorators,
  rewireSass
);
