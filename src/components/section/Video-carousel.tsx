import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "../movies"

export const VideoCarousel = () => {
    return (
        <div className="bg-bgDark">
            {/* ==== Large first section ==== */}
            {/* <div className="">
                <div className=""><img src={movies[0].poster} alt={movies[0].name} /></div>
                <div className=""><img src={movies[0].poster} alt={movies[0].name} /></div>
                <div className=""><img src={movies[0].poster} alt={movies[0].name} /></div>
            </div> */}

            {/* ==== carousel ==== */}
            <SmallVideoCarousel movies={randomMoviesSet1} />
            <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
    )
}

const SmallVideoCarousel = ({movies}: {movies: Movie[]}) => {
    return (
        <div className="flex gap-3">
            {
                movies.map((movie, i) => (
                    <img
                        key={`${movie.name}-${i}`}
                        src={movie.poster}
                        alt={movie.name}
                    />
                ))
            }
        </div>
    )
}