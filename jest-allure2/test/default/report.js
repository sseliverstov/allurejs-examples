const JasmineAllureReporter = require("allure-jasmine").JasmineAllureReporter;
const AllureRuntime = require("allure-jasmine").AllureRuntime;

const allure = new AllureRuntime({ resultsDir: "../../out/allure-results" });
const reporter = new JasmineAllureReporter(allure);

jasmine.getEnv().addReporter(reporter);
