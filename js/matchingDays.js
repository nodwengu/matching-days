function createMatchingDays() {
   let date = 0;
   let weekDay = "";

   function setDate(val) {
      date = new Date(val).getDay();
   }

   function setDay() {
      switch (date) {
         case 0:
            weekDay = "sunday";
            break;
         case 1:
            weekDay = "monday";
            break;
         case 2:
            weekDay = "tuesday";
            break;
         case 3:
            weekDay = "wednesday";
            break;
         case 4:
            weekDay = "thursday";
            break;
         case 5:
            weekDay = "friday";
            break;
         case 6:
            weekDay = "saturday";
      }
   }

   function getDate() {
      return date;
   }

   function getDay() {
      return weekDay;
   }

   return {
      setDate,
      setDay,
      getDate,
      getDay,
   }
}

// let matchingDaysInstance = createMatchingDays();
// matchingDaysInstance.setDate("2019-07-31");
// matchingDaysInstance.setDay();
// let day = matchingDaysInstance.getDay();
// alert(day)


