let dates = [ 
  {
    year: 2020,
    month: 6,
    day: 18
  }, 
  {
    year: 2020,
    month: 6,
    day: 5
  }, 
  {
    year: 2020,
    month: 5,
    day: 8
  }, 
  {
    year: 2020,
    month: 4,
    day: 11
  },
  {
    year: 2020,
    month: 4,
    day: 4
  }, 
  {
    year: 2020,
    month: 4,
    day: 3
  }, 
  {
    year: 2020,
    month: 3,
    day: 24
  }, 
  {
    year: 2020,
    month: 3,
    day: 13
  }, 
  {
    year: 2020,
    month: 2,
    day: 29
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
