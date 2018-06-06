let dates = [
  {
    year: 2018,
    month: 12,
    day: 22,
  },
  {
    year: 2018,
    month: 12,
    day: 21,
  },
  {
    year: 2018,
    month: 11,
    day: 17,
  },
  {
    year: 2018,
    month: 11,
    day: 16,
  },
  {
    year: 2018,
    month: 9,
    day: 15,
  },
  {
    year: 2018,
    month: 6,
    day: 29,
  }
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
