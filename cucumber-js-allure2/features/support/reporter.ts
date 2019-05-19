import { CucumberJSAllureFormatter } from "allure-cucumberjs";
import { AllureRuntime } from "allure-cucumberjs";

export default class Reporter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(options, new AllureRuntime({ resultsDir: "../allure-results" }), {});
  }
}