function createMatchingDays() {
    let firstDate = "";
    let secondDate = "";

    // function setFirstDate(val) {
    //     firstDate = val;
    // }

    function getFirstDate() {
        return firstDate;
    }

    // function setSecondDate(val) {
    //     secondDate = val;
    // }

    function getSecondDate() {
        return secondDate;
    }

    return {
        // setFirstDate,
        getFirstDate,
        // setSecondDate,
        getSecondDate
    }
}

const matchingDaysInstance = createMatchingDays;



