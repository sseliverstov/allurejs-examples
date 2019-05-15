module.exports = function() {
    this.When("run it", function(callback) {
        callback();
    });

    this.Then("it works", function(callback) {
        callback(null, "pending");
    });
};