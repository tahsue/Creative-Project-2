document.getElementById("wordSubmit").addEventListener("click", function(event) {
event.preventDefault();
  const value = document.getElementById("wordInput").value;
  if (value === "") {
    return;
  }
  console.log(value);
  const url = "http://www.omdbapi.com/?t=" + value + "/&apikey=7bf5fca1";
  console.log(url);
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<div class="titleWord">' + json.Title + ":</div>";
      results += '<div class="movieItem"><b>Year Released</b>:&nbsp' + json.Year + "</div>";
      results += '<div class="movieItem"><b>Genre</b>:&nbsp' + json.Genre + "</div>";
      results += '<div class="movieItem"><b>Director</b>:&nbsp' + json.Director + "</div>";
      results += '<div class="movieItem"><b>Actors</b>:&nbsp' + json.Actors + "</div>";
      results += '<div class="movieItem"><b>Plot</b>:&nbsp' + json.Plot + "</div>";
      results += '<div class="movieItem"><b>Rating</b>:&nbsp' + json.Ratings[0].Value + "</div>";
      results += '<br><img src="' + json.Poster  + '">'
      document.getElementById("movieResults").innerHTML = results;
      console.log(Ratings);
    });
})


//     fetch(url2) // Since this is a promise, each of these functions are run at the same time
//         .then(function(response) {
//             return response.json();
//         }).then(function(json) {
//             let forecast = "";
//             for (let i = 0; i < json.list.length; i++) {
//                 forecast += "<div class=forecastItem>"
//                 forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
//                 forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
//                 forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
//                 forecast += "<p>Feels Like " + json.list[i].main.feels_like + "</p>";
//                 forecast += "<p>High: " + json.list[i].main.temp_max + "</p>";
//                 forecast += "<p>Low: " + json.list[i].main.temp_min + "</p>";
//                 forecast += "</div>";
//             }
//             document.getElementById("forecastResults").innerHTML = forecast;
//         });
// });

// const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=7fb2f793-00c9-44a9-86de-42b84e643f45";

// fetch(url)
//   .then(function(response) {
//     return response.json();
//   }).then(function(json) {
//     console.log(json);
//   })
