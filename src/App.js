import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Movie from "./Components/Movie/Movie";
import Form from "./Components/Form/Form";
import popCorn from "./Components/popcorn4.png";
// import EditMovie from "./Components/EditMovie/EditMovie"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.getMovies();
    axios.get(`/api/movies`).then(res => {
      console.log(this.state.movies);
      this.setState({
        movies: res.data
      });
    });
  }

  getMovies() {
    axios.get("/api/movies").then(res => {
      // console.log("inside axios.get");
      this.setState({
        movies: res.data
      });
    });
    // console.log("getMovies hit");
  }

  deleteMovie = id => {
    axios.delete(`/api/delete/${id}`).then(res => {
      this.setState({
        movies: res.data
      });
    });
  };

  createMovie = MovieInfo => {
    console.log("req body", MovieInfo);
    axios.post(`/api/create`, MovieInfo).then(movies => {
      console.log("inside createMovie", movies);
      this.setState({
        movies: movies.data
      });
    });
  };

  updateMovie = (id, MovieInfo) => {
    console.log("look here", id, MovieInfo);
    axios.put(`/api/update/${id}`, MovieInfo).then(res => {
      this.setState({
        movies: res.data
      });
    });
  };

  render() {
    const mappedMovies = this.state.movies.map(movie => {
      console.log("this.map", movie);
      return (
        <div>
          <Movie
            movie={movie}
            key={movie.id}
            delete={this.deleteMovie}
            update={this.updateMovie}
          />
        </div>
      );
    });

    return (
      <div>
        <header>
          <img className="popCorn" src={popCorn} />
          <h1>Movie Library</h1>
        </header>
        <main className="searchBar">
          <Form create={this.createMovie} />
          {mappedMovies}
        </main>
      </div>
    );
  }
}
export default App;
