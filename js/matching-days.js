let firstInputElem = document.querySelector('#firstInput');
let secondInputElem = document.querySelector('#secondInput');

const matchingDaysInstance = createMatchingDays();

var date = new Date();
let day = date.getDay()

function highlightDays() {
   let firstInputVal = document.querySelector('#firstInput').value;
   let secondInputVal = document.querySelector('#secondInput').value;

   matchingDaysInstance.setDate(firstInputVal);
   let firstDate = matchingDaysInstance.getDate();

   matchingDaysInstance.setDate(secondInputVal);
   let secondDate = matchingDaysInstance.getDate();

   if(firstDate == secondDate) {
      if(firstDate === 1 && secondDate === 1) {
         removeClasses();
         document.querySelector('.monday').parentNode.classList.add('green');
      } else if(firstDate === 2 && secondDate === 2) {
         removeClasses();
         document.querySelector('.tuesday').parentNode.classList.add('green');
      } else if(firstDate === 3 && secondDate === 3) {
         removeClasses();
         document.querySelector('.wednesday').parentNode.classList.add('green');
      } else if(firstDate === 4 && secondDate === 4) {
         removeClasses();
         document.querySelector('.thursday').parentNode.classList.add('green');
      } else if(firstDate === 5 && secondDate === 5) {
         removeClasses();
         document.querySelector('.friday').parentNode.classList.add('green');
      } else if(firstDate === 6 && secondDate === 6) {
         removeClasses();
         document.querySelector('.saturday').parentNode.classList.add('green');
      } else if(firstDate === 0 && secondDate === 0) {      
         removeClasses();
         document.querySelector('.sunday').parentNode.classList.add('green');
      }   
   } 

   if(firstDate !== secondDate){
      if(firstDate === 1) {     
         removeClasses()
         document.querySelector('.monday').parentNode.classList.add('yellow');
         addBlueColor()
      } else if(firstDate === 2) {
         removeClasses()
         document.querySelector('.tuesday').parentNode.classList.add('yellow');
         addBlueColor()
      } else if(firstDate === 3) {
         removeClasses()
         document.querySelector('.wednesday').parentNode.classList.add('yellow');
         addBlueColor()
      } else if(firstDate === 4) {
         removeClasses()
         document.querySelector('.thursday').parentNode.classList.add('yellow');
         addBlueColor()
      } else if(firstDate === 5) {
         removeClasses()
         document.querySelector('.friday').parentNode.classList.add('yellow');
         addBlueColor()
      } else if(firstDate === 6) {
         removeClasses()
         document.querySelector('.saturday').parentNode.classList.add('yellow');
         addBlueColor()
      } else if(firstDate === 0) {
         removeClasses()
         document.querySelector('.sunday').parentNode.classList.add('yellow');
         addBlueColor()
      } 
   }
}


function addBlueColor() {
   let secondInputVal = document.querySelector('#secondInput').value;

   matchingDaysInstance.setDate(secondInputVal);
   let secondDate = matchingDaysInstance.getDate();

   if(secondDate === 1) {
      document.querySelector('.monday').parentNode.classList.add('blue');
   } else if(secondDate === 2) {
      document.querySelector('.tuesday').parentNode.classList.add('blue');
   } else if(secondDate === 3) {
      document.querySelector('.wednesday').parentNode.classList.add('blue');
   } else if(secondDate === 4) {
      document.querySelector('.thursday').parentNode.classList.add('blue');
   } else if(secondDate === 5) {
      document.querySelector('.friday').parentNode.classList.add('blue');
   } else if(secondDate === 6) {
      document.querySelector('.saturday').parentNode.classList.add('blue');
   } else if(secondDate === 0) {
      document.querySelector('.sunday').parentNode.classList.add('blue');
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