import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion"
import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "../movies"
import { useMemo, useRef, useState } from "react"
import { useWindowSize } from "react-use"
import { Button } from "../Button"

export const VideoCarousel = () => {
    const { width, height } = useWindowSize();
    const carouselWrapperRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: carouselWrapperRef,
        offset: ["start start", "end start"],
    })
    // === Track window size
    const maxScale = useMemo(() => {
        const windowYRatio = height / width; // shows how bigger or smaller height is over width
        const xScale = 1.66667 // 100vw / 60vw (size of image scale in the first section)
        const yScale = xScale * (16 / 9) * windowYRatio // === (16 / 9) - aspect ratio used for video
        return Math.max(xScale, yScale)
    }, [width, height])

    // ===== useTransform
    const [carouselVaraiant, setCarouselVariant] = useState<"inactive" | "active">("inactive");
    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        // == progress should .67 right after it has faded in 0.66
        if (progress >= .67) {
            setCarouselVariant("active")
        } else {
            setCarouselVariant("inactive")
        }
    })
    // ===== useTransform
    const scale = useTransform(
        scrollYProgress, [0.3, .5, .66], [maxScale * 1.1, maxScale, 1]
    )

    const postersOpacity = useTransform(
        scrollYProgress,
        [.64, .66],
        [0, 1]
    )

    const posterTranslateXLeft = useTransform(
        scrollYProgress,
        [.64, .66],
        [-20, 0]
    )
    const posterTranslateXRight = useTransform(
        scrollYProgress,
        [.64, .66],
        [20, 0]
    )
    return (
        <motion.div animate={carouselVaraiant} className="bg-bgDark pb-8">
            {/* ==== Large first section ==== */}
            <div ref={carouselWrapperRef} className="overflow-clip h-[300vh] mt-[-100vh]">
                <div className="h-screen sticky top-0 flex items-center">
                    <div className="flex gap-5 relative left-1/2 -translate-x-1/2">
                        {/* === first image === */}
                        <motion.div style={{ opacity: postersOpacity, x: posterTranslateXLeft }} className="shrink-0 w-[60vw] rounded-2xl overflow-clip aspect-[9/16] md:aspect-video">
                            <img className="w-full h-full object-cover" src={movies[0].poster} alt={movies[0].name} />
                        </motion.div>
                        {/* === second image === */}
                        <motion.div style={{ scale }} className="relative shrink-0 w-[60vw] rounded-2xl overflow-clip aspect-[9/16] md:aspect-video">
                            <img className="w-full h-full object-cover" src={movies[1].poster} alt={movies[0].name} />
                            {/* == video title ==  */}
                            <motion.div
                                variants={{
                                    active: { opacity: 1 },
                                    inactive: { opacity: 0 },
                                }}
                                className="absolute flex text-light items-center text-lg justify-between p-5 bottom-0 left-0 w-full"
                            >
                                <p className="">Best video title over</p>
                                <Button>Watch now</Button>
                            </motion.div>
                        </motion.div>
                        {/* === third image === */}
                        <motion.div style={{ opacity: postersOpacity, x: posterTranslateXRight }} className="shrink-0 w-[60vw] rounded-2xl overflow-clip aspect-[9/16] md:aspect-video">
                            <img className="w-full h-full object-cover" src={movies[2].poster} alt={movies[0].name} />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ==== carousel ==== */}
            <motion.div
                variants={{
                    active: { opacity: 1, y: 0 },
                    inactive: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.4 }}
                className="space-y-3 pt-4 -mt-[calc((100vh-(60vw*(16/9)))/2)] md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
            >
                <SmallVideoCarousel movies={randomMoviesSet1} />
                <div className="[--duration:80s] [--carousel-offset: -32px]">
                    <SmallVideoCarousel movies={randomMoviesSet2} />
                </div>
            </motion.div>
        </motion.div>
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