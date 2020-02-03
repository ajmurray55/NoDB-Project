let id = 2;
const movies = [
  {
    id: 0,
    title: "",
    Poster: "",
    youtube: null,
    rating: "",
    message: ""

  },
]

module.exports = {
  getMovies: (req, res) => {
    
    res.status(200).send(movies);
    
  },

  createMovie: (req, res) => {
    const { title, Poster, youtube, rating, message } = req.body;
    console.log('hit body',req.body)
    let newMovie = {
      id: id++,
      title,
      Poster,
      youtube,
      rating,
      message

    };
    console.log('newMovie in server',newMovie)
    movies.push(newMovie);

    res.status(200).send(movies);

    // res.send(movies);
  },

  deleteMovie: (req, res) => {
    let { id } = req.params;

    let index = movies.findIndex(movies => +movies.id === +id);

    movies.splice(index, 1);

    res.status(200).send(movies);
  },

  updateReview: (req, res) => {
    let { id } = req.params;
    let index = movies.findIndex(movie => +movie.id === +id);
    const {  message } = req.body;
    const { title, Poster, youtube, rating } = movies[index]
    

    let updatedMovie = {
      id,
      title,
      Poster,
      youtube,
      rating, 
      message
    };

    movies.splice(index, 1, updatedMovie);
    res.status(200).send(movies);
  }
};
