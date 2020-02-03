// import React, { Component } from 'react'

// class EditMovie extends Component {
//     constructor(props){
//     super(props)
        
//         this.state={
//             title: this.props.movie.title,
//             Poster: this.props.movie.Poster,
//             youtube: this.props.movie.youtube,
//             rating: this.props.movie.review
//         }
//     }

//     handleChange = e => {
//         let { value, title } = e.target
//         this.setState({
//             [title]: value
//         })
//     }

//     handleClick = () => {
//         let { id } = this.props.movie
//         let {title, Poster, youtube, rating} = this.state
//         let updatedMovie = {
//             title,
//             Poster,
//             youtube,
//             rating
//         }
//         this.props.update(id, updatedMovie)
//         this.props.toggle()
//     }

//     render() {
//         return(
//             <div>
//                 <h2>Information</h2>
//                 <div>
//                 <input
//                     type='text'
//                     name='title'
//                     value={this.state.name}
//                     placeholder='title'
//                     onChange={this.handleChange} />
//                 <input
//                     type='text'
//                     name='Poster'
//                     value={this.state.name}
//                     placeholder='Poster'
//                     onChange={this.handleChange} />
//                 <input
//                     type='text'
//                     name='youtube'
//                     value={this.state.name}
//                     placeholder='Youtube movie trailer'
//                     onChange={this.handleChange} />
//                 <input
//                     type='text'
//                     name='rating'
//                     value={this.state.name}
//                     placeholder='Rating'
//                     onChange={this.handleChange} />
//             </div>
//                 <button onClick={this.handleClick}>Back</button>
                  
                

//             </div>
//         )
//     }
// }

// export default EditMovie