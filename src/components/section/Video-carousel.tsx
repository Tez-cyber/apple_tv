import { useScroll, useTransform, motion } from "framer-motion"
import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "../movies"
import { useRef } from "react"

export const VideoCarousel = () => {
    const carouselWrapperRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: carouselWrapperRef,
        offset: ["start start", "end start"],
    })
    const scale = useTransform(scrollYProgress, [0.3, .5, .66], [3, 2.5, 1])

    return (
        <div className="bg-bgDark pb-8">
            {/* ==== Large first section ==== */}
            <div ref={carouselWrapperRef} className="overflow-clip h-[300vh] mt-[-100vh]">
                <div className="h-screen sticky top-0 flex items-center">
                    <div className="flex gap-5 mb-5 relative left-1/2 -translate-x-1/2">
                        <div className="shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip">
                            <img className="w-full h-full object-cover" src={movies[0].poster} alt={movies[0].name} />
                        </div>
                        <motion.div style={{ scale }} className="shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip">
                            <img className="w-full h-full object-cover" src={movies[1].poster} alt={movies[0].name} />
                        </motion.div>
                        <div className="shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip">
                            <img className="w-full h-full object-cover" src={movies[2].poster} alt={movies[0].name} />
                        </div>
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