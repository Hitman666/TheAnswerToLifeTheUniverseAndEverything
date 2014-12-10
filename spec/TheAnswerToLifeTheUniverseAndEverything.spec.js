var TheAnswerToLifeTheUniverseAndEverything = require('../index.js');

describe("TheAnswerToLifeTheUniverseAndEverything Suite", function() {
	it("should return a value of 42", function(done) {
		var value = TheAnswerToLifeTheUniverseAndEverything();
		expect(value).toEqual(42);
		done();
	});
});