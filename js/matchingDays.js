function createMatchingDays() {
   let firstDate = "";
   let secondDate = "";
   let firstDay = "";
   let secondDay = "";
  
   function setFirstDate(val) {
     firstDate = new Date(val).getDay();
   }

   function setSecondDate(val) {
     secondDate = new Date(val).getDay();
   }

   function getSecondDate() {
      return secondDate;
   }

   function getFirstDate() {
      return firstDate;
   }

   function setFirstDay() {
      switch (firstDate) {
         case 0:
            firstDay = "Sunday";
            break;
         case 1:
            firstDay = "Monday";
            break;
         case 2:
            firstDay = "Tuesday";
            break;
         case 3:
            firstDay = "Wednesday";
            break;
         case 4:
            firstDay = "Thursday";
            break;
         case 5:
            firstDay = "Friday";
            break;
         case 6:
            firstDay = "Saturday";
      }
   }

   function setSecondDay() {
      switch (secondDate) {
         case 0:
            secondDay = "Sunday";
            break;
         case 1:
            secondDay = "Monday";
            break;
         case 2:
            secondDay = "Tuesday";
            break;
         case 3:
            secondDay = "Wednesday";
            break;
         case 4:
            secondDay = "Thursday";
            break;
         case 5:
            secondDay = "Friday";
            break;
         case 6:
            secondDay = "Saturday";
      }
   }

   function getSecondDay() {
      return secondDay;
   } 

   function getFirstDay() {
      return firstDay;
   } 

   return {
      setFirstDate,
      getFirstDate,
      setSecondDate,
      getSecondDate,
      setSecondDay,
      getSecondDay,
      setFirstDay,
      getFirstDay
   }
}

