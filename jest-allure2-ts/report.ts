import { JasmineAllureReporter } from "allure-jasmine";

declare namespace jasmine {
  function getEnv(): any;
}

const reporter = new JasmineAllureReporter({ resultsDir: "../allure-results" });

jasmine.getEnv().addReporter(reporter);
