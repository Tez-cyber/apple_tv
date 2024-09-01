import { FaApple } from "react-icons/fa";
import { Container } from "./Container";

const Header = () => {
    return (
        <>
            <header className="bg-bgContrast px-6 min-h-11 flex items-center text-light">
                <Container>
                    <a href="/" className="text-light h-11 flex items-center px-6 -ml-6">
                        <FaApple />
                        <span className="sr-only">Back to Homepage</span>
                    </a>
                </Container>
            </header>
            <div className="sticky top-0 bg-bgContrast px-6 text-light min-h-11 flex items-center">
                <Container>
                    Apple Tv+
                </Container>
            </div>
        </>
    )
}

export default Header