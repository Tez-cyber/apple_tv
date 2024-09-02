import { FaApple } from "react-icons/fa"
import { Button } from "../Button"
import { Container } from "../Container"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export const Hero = () => {
    const videoContainerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: videoContainerRef,
        offset: ["start start", "end end"]
    })
    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])
    return (
        <div className="h-[300vh] relative bg-bgDark text-light">
            <motion.div
                style={{ opacity }}
                ref={videoContainerRef} 
                className="absolute -top-[--header-row-height] left-0 h-[200vh] w-full"
            >
                <img
                    className="sticky top-0 h-screen w-full object-cover" 
                    src="/posters/img-2.jpg" 
                    alt="Hero section img" 
                />
            </motion.div>
            <Container className="relative pb-10 z-10 min-h-[--hero-height] flex flex-col justify-end items-start">
                <h1 className="text-5xl font-bold mb-10">
                    All Apple Originals. <br />
                    Only on Apple TV+.
                </h1>
                <Button size="lg" className="mb-16">
                    Stream now
                </Button>
                <p className="flex items-center font-semibold">
                    Watch on the <FaApple /> apple
                </p>
            </Container>
        </div>
    )
}

