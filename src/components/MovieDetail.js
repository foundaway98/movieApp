import PropTypes from "prop-types"

function MovieDetail({title, coverImg, rating, runtime, genres, downloadCnt, likeCnt}){
    return <div>
        <img src={coverImg} alt={title}/>
        <h2>{title}</h2>
        <ul>
            <li>rating : {rating}</li>
            <li>runtime : {runtime} minutes</li>
            <li>genre</li>
            <ul>
                {genres.map((genre)=>(
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
            <li>downloads : {downloadCnt}</li>
            <li>likes : {likeCnt}</li>
        </ul>
    </div>
}

MovieDetail.propTypes = {
    title : PropTypes.string.isRequired,
    coverImg : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
    runtime : PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    downloadCnt : PropTypes.number.isRequired,
    likeCnt : PropTypes.number.isRequired
}

export default MovieDetail