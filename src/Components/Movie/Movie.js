import React, { Component } from "react";
import MovieInfo from '../MovieInfo/MovieInfo'
import ViewInfo from '../ViewInfo/ViewInfo'
// import EditMovie from '../EditMovie/EditMovie'


class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
       edit: false
    };
  }


  toggleEdit = () => {
    let { edit } = this.state
    this.setState({
      edit: !edit
    })
  }
  render() {
    return (
      <div>
        {
          this.state.edit
          ?
          <ViewInfo {...this.props} toggle={this.toggleEdit}/>
          :
          <MovieInfo {...this.props} toggle={this.toggleEdit}/>  
        }
        
      </div>
    );
  }
}

export default Movie;
