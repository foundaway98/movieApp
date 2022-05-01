import { useEffect, useState } from "react"
import Movie from "../components/Movie"
function Home() {
    const[loading, setLoading] = useState(true)
  const[movies, setMovies] = useState([])
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies)
        setLoading(false)
      })
  },[])
  console.log(movies)
  console.log(typeof(movies))
  return (
    <div>
      {loading ? <h1>loading...</h1> : movies.map((movie) => (
          <Movie key = {movie.id}
            id = {movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
            genres={movie.genres}/>
        ))}
    </div>
  );
}

export default Home;