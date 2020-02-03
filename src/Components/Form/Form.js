import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      Poster: "",
      youtube: null,
      rating: "",
      message: ""
    };
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleChange = e => {
    let { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleClicked(e) {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?t=${this.state.title}&apikey=2c2f9947`)
      .then(movieData => {
        console.log(movieData);
        this.setState(
          {
            title: movieData.data.Title,
            Poster: movieData.data.Poster,
            rating: "Rotten Tomatoes " + movieData.data.Ratings[1].Value,
            message: ""
          },
          this.handleClick
        );
      });
  }

  handleClick = () => {
    let { title, Poster, youtube, rating, message } = this.state;
    console.log("inside handleClick", this.state);
    let newMovie = {
      title,
      Poster,
      youtube,
      rating,
      message
    };
    console.log("in between new movie and this.props.state", newMovie);
    this.props.create(newMovie);
    this.setState({
      title: ""
    });
    console.log("below setState");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="SearchMenu">
          <form onSubmit={this.handleClicked}>
            <input
              className="NewMovieButton"
              type="text"
              name="title"
              value={this.state.title}
              placeholder="title"
              onChange={this.handleChange}
            />
            <input id="searchButton" value="Search" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
