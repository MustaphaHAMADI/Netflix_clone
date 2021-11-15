// const axios = require("axios");

// const one =
//   "https://api.themoviedb.org/3/trending/movie/week?api_key=4df8b563036925de112dcd96a1b25d4a&language=fr";

// const two =
//   "https://api.themoviedb.org/3/discover/movie?api_key=4df8b563036925de112dcd96a1b25d4a&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

// const three =
//   "https://api.themoviedb.org/3/discover/movie?api_key=4df8b563036925de112dcd96a1b25d4a&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate";

// const four =
//   "https://api.themoviedb.org/3/discover/movie?api_key=4df8b563036925de112dcd96a1b25d4a&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&with_watch_monetization_types=flatrate";

// const requestOne = axios.get(one);
// const requestTwo = axios.get(two);
// const requestThree = axios.get(three);
// const requestFour = axios.get(four);

// const apiCall = () => {
//   axios
//     .all([requestOne, requestTwo, requestThree, requestFour])
//     .then(
//       axios.spread((...responses) => {
//         const responseOne = responses[0].data.results;
//         const responseTwo = responses[1].data.results;
//         const responsesThree = responses[2].data.results;
//         const responseFour = responses[3].data.results;
//         return {
//           trending: responses[0].data.results,
//           discover: responses[1].data.results,
//           horror: responses[2].data.results,
//           thriller: responses[3].data.results,
//         };
//       })
//     )
//     .catch((errors) => {
//       // react on errors.
//     });
// };

// module.exports = apiCall;
