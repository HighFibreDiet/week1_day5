describe('numberToWord', function() {
  it('returns the word for a single digit when a single digit.', function() {
    numberToWord(1).should.equal("one");
  });
});
