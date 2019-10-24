/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function calculateAverageMovieRate(topMoviesArray) {
  let sumOfRates = topMoviesArray.reduce((accumulator, rate, index, topMoviesArray) => {
    return accumulator + topMoviesArray[index].rate
  }, 0);
  return Math.round((sumOfRates / topMoviesArray.length) * 100) / 100;
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate(array) {
  let sumOfDramaRates = 0;
  let dramaMoviesArray = array.filter((value) => {
    return value.genre.includes("Drama")
  });
  if (dramaMoviesArray.length !== 0) {
    return parseFloat(calculateAverageMovieRate(dramaMoviesArray));
  } else {
    return 0;
  }
}

// Iteration 3: Ordering by year

function orderByYear(array) {
  let sortedArray = [...array]
  sortedArray.sort((a, b) => {
    if (a.year > b.year)
      return 1

    if (a.year < b.year)
      return -1

    if (a.title > b.title)
      return 1

    if (a.title < b.title)
      return -1
  })
  return sortedArray
}

// function orderByYear(array) {
//   array.sort(function(a, b) => {
//     var adate = /* ...parse the date in a.date... */,
//         bdate = /* ...parse the date in b.date... */,
//         rv = adate - bdate;
//     if (rv === 0) {
//         rv = a.title.localeCompare(b.title);
//     }
//     return rv;
// });

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function countSpielbergDramaMovies(array) {
  let dramaArray = array.filter((value, index, originalArray) => {
    if (array[index].genre.includes("Drama") && array[index].director === 'Steven Spielberg') {
      return true
    } else {
      return false
    }
  })
  return dramaArray.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


// BONUS Iteration: Best yearly rate average - Best yearly rate average