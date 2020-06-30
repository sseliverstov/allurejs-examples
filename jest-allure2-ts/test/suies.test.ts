it("No suite", () => {});

describe("First suite", () => {
  it("one suite", () => {});
});

describe("First suite", () => {
  describe("Second suite", () => {
    it("two suites", () => {});
  });
});

describe("First suite", () => {
  describe("Second suite", () => {
    describe("Third suite", () => {
      it("three suites", () => {});
    });
  });
});

describe("First suite", () => {
  describe("Second suite", () => {
    describe("Third suite", () => {
      describe("Extra suite", () => {
        it("four suites v1", () => {});
      });
    });
  });
});
