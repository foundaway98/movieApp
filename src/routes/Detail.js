import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import MovieDetail from "../components/MovieDetail"

function Detail(){
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const [detail, setDetail] = useState([])
    const getMovie = async () => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        setDetail(json.data.movie)
        setLoading(false)
    }
    useEffect(() => {
        getMovie()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    console.log(detail)
    console.log(typeof(detail))
    return (
    <div>
        {loading ? <h1> Detail loading...</h1> : 
            <MovieDetail
                title = {detail.title_long}
                coverImg = {detail.large_cover_image}
                rating = {detail.rating}
                runtime = {detail.runtime}
                genres = {detail.genres}
                downloadCnt = {detail.download_count}
                likeCnt = {detail.like_count}/>
            }
        </div>
    );
    
}
export default Detail