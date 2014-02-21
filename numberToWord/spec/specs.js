describe('numberToWord', function() {
  it('returns the word for a single digit when a single digit.', function() {
    numberToWord(1).should.equal("one");
  });

  it('returns the correct word for the tens numbers', function() {
    numberToWord(20).should.equal("twenty");
  });

  it('returns a combo of a single digit word plus hundred for any round hundred number', function() {
    numberToWord(400).should.equal("four hundred");
  });

  it('returns a combo of a tens number and a single digit for numbers between 21 and 99', function() {
    numberToWord(78).should.equal("seventy eight");
  });

  it("returns the correct special word for numbers between 10 and 20", function() {
    numberToWord(15).should.equal("fifteen");
  });

  it("returns the correct word for numbers ending in 0 between 110 and 990", function() {
    numberToWord(15).should.equal("fifteen");
  });

  it("returns the correct words for numbers between 101 and 999", function() {
    numberToWord(593).should.equal("five hundred ninety three");
  });

});
