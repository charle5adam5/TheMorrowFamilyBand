let dates = [ 
  {
    year: 2020,
    month: 4,
    day: 11
  },
  {
    year: 2020,
    month: 3,
    day: 24
  }, 
  {
    year: 2020,
    month: 3,
    day: 24
  }, 
  {
    year: 2020,
    month: 1,
    day: 24
  }, 
  {
    year: 2020,
    month: 1,
    day: 3
  }, 
  {
    year: 2019,
    month: 12,
    day: 19
  }, 
{
  year: 2019,
  month: 12,
  day: 6
},
  {
    year: 2019,
    month: 11,
    day: 2
  },
  {
    year: 2019,
    month: 10,
    day: 26
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
