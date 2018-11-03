const chai = require("chai"),
  expect = chai.expect,
  assert = chai.assert,
  sinon = require("sinon"),
  sinonChai = require("sinon-chai"),
  sinonStubPromise = require("sinon-stub-promise"),
  chaiAsPromised = require("chai-as-promised"),
  downloadService = require("../../src/services/download");

chai.use(sinonChai);
chai.use(chaiAsPromised);
sinonStubPromise(sinon);

describe("download icon service", () => {
  describe("query data validate test", () => {

    var service;

    beforeEach(() => {
      service = downloadService({
        integrations: {}
      });
    });

    it("should expect error when without `url` query param", async () => {
      try {
        await service({ query: { integrator: "foo" } });
        assert.fail("expect a an error.");
      } catch (e) {
        expect(e).to.be.equal(`Query param 'url' don't found.`);
      }
    });
    it("should expect error when without `integrator` query param", async () => {
      try {
        await service({ query: { url: "foo" } });
        assert.fail("expect a an error.");
      } catch (e) {
        expect(e).to.be.equal(`Query param 'integrator' don't found.`);
      }
    });
    it("should expect error `integrator` query param dont exists", async () => {
      try {
        await service({ query: { url: "foo", integrator: "bar" } });
        assert.fail("expect a an error.");
      } catch (e) {
        expect(e).to.be.equal(`'integrator' don't exist.`);
      }
    });
  });
});
