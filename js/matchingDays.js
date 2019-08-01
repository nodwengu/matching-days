function createMatchingDays() {
   let date = 0;
   let weekDay = "";

   function setDate(val) {
      date = new Date(val).getDay();
   }

   function setDay() {
      switch (date) {
         case 0:
            weekDay = "Sunday";
            break;
         case 1:
            weekDay = "Monday";
            break;
         case 2:
            weekDay = "Tuesday";
            break;
         case 3:
            weekDay = "Wednesday";
            break;
         case 4:
            weekDay = "Thursday";
            break;
         case 5:
            weekDay = "Friday";
            break;
         case 6:
            weekDay = "Saturday";
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

let matchingInstance = createMatchingDays();


