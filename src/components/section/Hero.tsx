import { FaApple } from "react-icons/fa"
import { Button } from "../Button"
import { Container } from "../Container"

export const Hero = () => {
    return (
        <div className="h-[300vh] relative bg-bgDark text-light">
            <div className="absolute top-0 left-0 w-full">
                <img src="/posters/img-4.jpg" alt="" />
            </div>
            <Container className="relative z-10 min-h-[--hero-height] flex flex-col justify-end items-start">
                <h1 className="text-5xl font-bold">
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

