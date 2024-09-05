import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "../movies"

export const VideoCarousel = () => {
    return (
        <div className="bg-bgDark pb-8">
            {/* ==== Large first section ==== */}
            <div className="overflow-clip">
                <div className="flex gap-5 mb-5 left-1/2 -translate-x-1/2">
                    <div className="shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip">
                        <img className="w-full h-full object-cover" src={movies[0].poster} alt={movies[0].name} />
                    </div>
                    <div className="shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip">
                        <img className="w-full h-full object-cover" src={movies[1].poster} alt={movies[0].name} />
                    </div>
                    <div className="shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip">
                        <img className="w-full h-full object-cover" src={movies[2].poster} alt={movies[0].name} />
                    </div>
                </div>
            </div>

            {/* ==== carousel ==== */}
            <div className="space-y-3">
                <SmallVideoCarousel movies={randomMoviesSet1} />
                <div className="[--duration:80s] [--carousel-offset: -32px]">
                    <SmallVideoCarousel movies={randomMoviesSet2} />
                </div>
            </div>
        </div>
    )
}

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
    return (
        <div className="overflow-clip">
            <div className="flex gap-3 animate-carousel-move relative left-[var(--carousel-offset, 0px)]">
                {
                    movies.map((movie, i) => (
                        <div className="w-[30vh] shrink-0 aspect-video" key={`${movie.name}-${i}`}>
                            <img
                                className="w-full h-full object-cover rounded-xl"
                                src={movie.poster}
                                alt={movie.name}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}