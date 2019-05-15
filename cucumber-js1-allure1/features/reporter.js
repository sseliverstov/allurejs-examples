var reporter = require('cucumberjs-allure-reporter');

reporter.config({targetDir: "../allure-results"});

module.exports = reporter;