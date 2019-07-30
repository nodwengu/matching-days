describe('Matching Days Function', function() {
    it('It should display todays week day', function() {
        matchingDaysInstance.setSecondDate(new Date());
        assert.equal(matchingDaysInstance.getSecondDate(), 2);
    });

    it('it should display the weekday 1 for Monday', function() {
        matchingDaysInstance.setSecondDate("1983-06-27");
        assert.equal(matchingDaysInstance.getSecondDate(), 1);
    });

    it('it should display anything', function() {
        matchingDaysInstance.setSecondDate(new Date());
        assert.equal(matchingDaysInstance.getSecondDate(), 2);
    });
})