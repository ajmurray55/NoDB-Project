const express = require('express')
const app = express()
// const ctrl = require('./controllers/movieController')
const {/*getTrailers*/ getMovies, createMovie, deleteMovie, updateReview} = require('./controllers/movieController')

const port = 4000

app.use(express.json())

// movie endpoints

app.get('/api/movies', getMovies)
// app.get('/api/trailers', getTrailers)
app.post('/api/create', createMovie)
app.delete('/api/delete/:id', deleteMovie)
app.put('/api/update/:id', updateReview)

app.listen(port, () => {
    console.log(`running on port ${port}`)
})