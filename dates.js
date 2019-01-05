let dates = [
  {
    year: 2019,
    month: 2,
    day: 23, // casa
  },
  {
    year: 2019,
    month: 1,
    day: 25, //7-10
  },
  {
    year: 2019,
    month: 1,
    day: 18, // flavors
  },
  {
    year: 2019,
    month: 1,
    day: 11, // colonial
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
