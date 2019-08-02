describe('Matching Days Function', function() {
    let matchingDaysInstance = createMatchingDays();

    it('It should return todays current week day and time', function() {
        let now = new Date();
        let today = now.getDay();
        matchingDaysInstance.setDate(new Date());
        assert.equal(matchingDaysInstance.getDate(), today);
    });

    it('it should return the weekday "5" for Friday if "2019-08-02" is provided as input on the first date input.', function() {
        matchingDaysInstance.setDate("2019-08-02");
        assert.equal(matchingDaysInstance.getDate(), 5);
    });

    it('it should return the weekday "3" for Wednesday if "2019-07-30" is provided as input on the second date input.', function() {
        matchingDaysInstance.setDate("2019-07-31");
        assert.equal(matchingDaysInstance.getDate(), 3);
    });

    it('it should return "Friday" if "2019-08-02" is provided as input on the first date input.', function() {
        matchingDaysInstance.setDate("2019-08-02");
        matchingDaysInstance.setDay();
        assert.equal(matchingDaysInstance.getDay(), 'friday');
    });

    it('it should return "Wednesday" if "2019-07-30" is provided as input on the second date input.', function() {
        matchingDaysInstance.setDate("2019-07-31");
        matchingDaysInstance.setDay();
        assert.equal(matchingDaysInstance.getDay(), 'wednesday');
    });
})