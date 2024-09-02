import { FaApple } from "react-icons/fa"
import { Button } from "../Button"
import { Container } from "../Container"

export const Hero = () => {
    return (
        <div className="h-[300vh] relative bg-bgDark text-light">
            <div className="absolute -top-[--header-row-height] left-0 h-[200vh] w-full">
                <img 
                    className="sticky top-0 h-screen w-full object-cover" 
                    src="/posters/img-2.jpg" 
                    alt="Hero section img" 
                />
            </div>
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

