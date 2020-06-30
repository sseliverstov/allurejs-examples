describe("typescript jest", () => {
  describe("with allure v2", () => {
    it.each([true, false])('parametrized', (param) => {
      expect(param).toBeTruthy()
    })
  });
});
