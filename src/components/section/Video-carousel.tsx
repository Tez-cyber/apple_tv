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

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
    return (
        <div className="flex gap-3 overflow-clip">
            {
                movies.map((movie, i) => (
                    <div className="w-[30vh] shrink-0" key={`${movie.name}-${i}`}>
                        <img
                            className="w-full h-full object-cover rounded-xl"
                            src={movie.poster}
                            alt={movie.name}
                        />
                    </div>
                ))
            }
        </div>
    )
}