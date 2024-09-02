import { FaApple } from "react-icons/fa"
import { Button } from "../Button"
import { Container } from "../Container"

export const Hero = () => {
    return (
        <div className="h-[200vh] bg-bgDark text-light">
            <img src="/posters/img-4.jpg" alt="" />
            <Container>
                <h1 className="text-5xl font-bold">
                    All Apple Originals. <br /> 
                    Only on Apple TV+.
                </h1>
                <Button size="lg">
                    Stream now
                </Button>
                <p className="flex items-center font-semibold">
                    Watch on the <FaApple /> apple
                </p>
            </Container>
        </div>
    )
}

