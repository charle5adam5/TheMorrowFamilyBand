let dates = [
  {
    year: 2019,
    month: 10,
    day: 3
  },
  {
    year: 2019,
    month: 9,
    day: 27
  },
 
  {
    year: 2019,
    month: 9,
    day: 21
  },
  {
    year: 2019,
    month: 9,
    day: 6
  },

 
 

 
];

let date = document.querySelectorAll('.date');
let gDates = document.querySelectorAll('.gig');

let today = new Date();
  date.forEach(function(item, index) {
    let gigDate = new Date(
        dates[index].year,
        dates[index].month - 1,
        dates[index].day
      );
      item.innerHTML = gigDate.toLocaleDateString();
      if(gigDate > today) {
        gDates[index].classList.add('upcoming');
      }
    })
