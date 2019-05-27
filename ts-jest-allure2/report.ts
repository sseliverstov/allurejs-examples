import { JasmineAllureReporter } from "allure-jasmine";
import { AllureRuntime } from "allure-js-commons";


declare namespace jasmine {
  function getEnv(): any;
}

const reporter = new JasmineAllureReporter(
  new AllureRuntime({
    resultsDir: "../allure-results"
  })
);

jasmine.getEnv().addReporter(reporter);


