
const chai = require('chai')
	, expect = chai.expect
	, sinon = require('sinon')
	, sinonChai = require('sinon-chai')
	, sinonStubPromise = require('sinon-stub-promise')
	, iconfinder = require('../../src/integrations/iconfinder');

chai.use(sinonChai);
sinonStubPromise(sinon);

describe("iconfinder integration", () => {
	describe("search for icons", () => {
		
		var responseMock;
		var integration;

		beforeEach(() => {
			responseMock = JSON.stringify(require("./iconfinder-searsh-response.mock.json"));
			integration = iconfinder(null);
		});

		it('should return a correct response', async () => {
			let _getStub = sinon.stub(integration, '_get')
			_getStub.resolves(responseMock);
			
			let result = await integration.search('menu');
			
			expect(result[0].download_url).to.be.equal('/download?url=/icons/134216/formats/svg/292272/download&integrator=iconfinder')
			expect(result[0].preview_url).to.be.equal('https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-24.png')
		})
	});
});
