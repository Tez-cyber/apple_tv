import { FaApple } from "react-icons/fa";
import { Container } from "./Container";
import { Button } from "./Button"

const Header = () => {
    return (
        <>
            <header className="bg-bgContrast text-light">
                <Container className="flex items-center min-h-11 px-6">
                    <a href="/" className="text-light h-11 flex items-center px-6 -ml-6">
                        <FaApple />
                        <span className="sr-only">Back to Homepage</span>
                    </a>
                </Container>
            </header>
            <div className="sticky top-0 bg-bgContrast text-light ">
                <Container className="flex items-center justify-between min-h-11 px-6">
                    <p className="">Apple Tv+</p>
                    <Button size="sm">Stream now</Button>
                </Container>
            </div>
        </>
    )
}

export default Header