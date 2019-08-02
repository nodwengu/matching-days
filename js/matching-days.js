let firstInputElem = document.querySelector('#firstInput');
let secondInputElem = document.querySelector('#secondInput');

const matchingDaysInstance = createMatchingDays();

function highlightDays() {
   let days = document.querySelectorAll('.day');
   let innerDivs = document.querySelectorAll('.theDay');
   let firstInputVal = document.querySelector('#firstInput').value;
   let secondInputVal = document.querySelector('#secondInput').value;

   matchingDaysInstance.setDate(firstInputVal);
   matchingDaysInstance.setDay();
   let firstDate = matchingDaysInstance.getDate();
   let weekDay = matchingDaysInstance.getDay();

   matchingDaysInstance.setDate(secondInputVal);
   matchingDaysInstance.setDay();
   let secondDate = matchingDaysInstance.getDate();

   for (var i = 0; i < days.length; i++) {
      let daysElem = days[i];
     
      if(firstDate === secondDate) {
         for(let i = 0; i < innerDivs.length; i++) {
            let elem = innerDivs[i]
            if(elem.classList.contains(weekDay)) {
               removeClasses();
               elem.parentNode.classList.add('green');
            } 
         }
      }
   }

   for (var i = 0; i < days.length; i++) {
     
      if(firstDate !== secondDate) {
         for(let i = 0; i < innerDivs.length; i++) {
            let elem = innerDivs[i]
            if(elem.classList.contains(weekDay)) {
               removeClasses();
               elem.parentNode.classList.add('yellow');
               addBlueColor();
            } 
         }
      }
   }
}


function addBlueColor() {
   let days = document.querySelectorAll('.day');
   let innerDivs = document.querySelectorAll('.theDay');
   let secondInputVal = document.querySelector('#secondInput').value;

   matchingDaysInstance.setDate(secondInputVal);
   matchingDaysInstance.setDay();
   let theWeekDay = matchingDaysInstance.getDay();

   for (var i = 0; i < days.length; i++) {
      for(let i = 0; i < innerDivs.length; i++) {
         let elem = innerDivs[i]
         if(elem.classList.contains(theWeekDay)) {
            elem.parentNode.classList.add('blue');
         } 
      }
   }
}

function removeClasses() {
   let days = document.querySelectorAll('.day');
   for (var i = 0; i < days.length; i++) {
      let elem = days[i];
      elem.classList.remove('green')
      elem.classList.remove('blue')
      elem.classList.remove('yellow')
   }
}

firstInputElem.addEventListener('change', highlightDays);
secondInputElem.addEventListener('change', highlightDays);