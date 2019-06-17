let dates = [
  {
    year: 2019,
    month: 6,
    day: 21
  },
  {
    year: 2019,
    month: 6,
    day: 7
  },
  {
    year: 2019,
    month: 5,
    day: 18
  },
  {
    year: 2019,
    month: 5,
    day: 17
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
