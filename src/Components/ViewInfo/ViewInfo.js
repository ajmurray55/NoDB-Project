import React, { Component } from "react";
import axios from "axios";

class ViewInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.movie.title,
      Poster: this.props.movie.Poster,
      youtube: this.props.movie.youtube,
      rating: this.props.movie.review,
      message: this.props.movie.message
    };
  }

  handleChange = e => {
    let { value, title, name } = e.target;
    this.setState({
      [title]: value,
      [name]: value
    });
  };

  handleClick = e => {
    e.preventDefault();
    let { id } = this.props.movie;
    let { /*title, Poster, youtube, rating,*/ message } = this.state;
    let updatedMovie = {
      // title,
      // Poster,
      // youtube,
      // rating
      message
    };
    this.props.update(id, updatedMovie);
    // this.props.toggle();
  };

  async handleClicked() {
    const movieData = await axios
      .get(`http://www.omdbapi.com/?t=${this.state.title}&apikey=2c2f9947`)
      .then(res => {
        return res.data;
      });

    this.setState({
      title: movieData.Title,
      Poster: movieData.Poster,
      rating: movieData.Ratings[1].Value
    });
    this.handleClick();
  }

  render() {
    // console.log('PROPSSS',this.props)
    return (
      <div className="ViewBox">
        <h2 className="MovieInfoTitle">Movie Info</h2>
        <div className="outerBackButton">
          <div className="BackButtonDiv">
            <button
              className="BackButton"
              id="BackButtonId"
              onClick={this.props.toggle}
            >
              Back
            </button>
          </div>
        </div>
        <div>
          <div className="youtubeInput">
            <input
              id="youtubeId"
              type="text"
              name="youtube"
              value={this.state.youtube}
              placeholder="Movie Trailer Url"
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="video">
          <iframe
            className="Trailer"
            padding-top="5"
            width="680"
            height="330"
            src={this.state.youtube}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <footer className="SubmitMessageDiv">
          <form onSubmit={this.handleClick}>
            <input
              className="message"
              type="text"
              name="message"
              value={this.state.message}
              placeholder="Message about the trailer"
              onChange={this.handleChange}
            />

            <input
              id="SubmitMessageId"
              className="SubmitMessage"
              type="submit"
              value="Submit"
            />
          </form>
          <p className="messageWriting">{this.props.movie.message}</p>
        </footer>
      </div>
    );
  }
}

export default ViewInfo;
