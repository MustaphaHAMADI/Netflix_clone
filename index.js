require("dotenv").config();
const axios = require("axios");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.API_KEY);

const one = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}&language=fr`;

const two = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const three = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`;

const four = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&with_watch_monetization_types=flatrate`;

const five = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`;

const six = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`;
const seven = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate`;

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestFour = axios.get(four);
const requestFive = axios.get(five);
const requestSix = axios.get(six);
const requestSeven = axios.get(seven);

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./static"));
let trendingMovies = [];

app.get("/", (req, res) => {
  axios
    .all([
      requestOne,
      requestTwo,
      requestThree,
      requestFour,
      requestFive,
      requestSix,
      requestSeven,
    ])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data.results;
        const responseTwo = responses[1].data.results;
        const responsesThree = responses[2].data.results;
        const responseFour = responses[3].data.results;
        const responseFive = responses[4].data.results;
        const responseSix = responses[5].data.results;
        const responseSeven = responses[6].data.results;
        trendingMovies.push(responseOne);

        res.render("index", {
          trending: responses[0].data.results,
          discover: responses[1].data.results,
          horror: responses[2].data.results,
          thriller: responses[3].data.results,
          action: responses[4].data.results,
          comedie: responses[5].data.results,
          drame: responses[6].data.results,
        });
      })
    )
    .catch((errors) => {
      // react on errors.
    });
});

app.get("/:movieId", (req, res) => {
  const { movieId } = req.params;
  const idUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=fr-FR`;
  axios
    .get(idUrl)
    .then((response) => {
      console.log(trendingMovies);
      res.render("movieDetails", {
        info: response.data,
        trend: trendingMovies,
      });
    })
    .catch((error) => {
      log.error(error);
    });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
