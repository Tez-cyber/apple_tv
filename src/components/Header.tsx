import { FaApple } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header className="bg-bgContrast p-6 text-light">
                <a href="/" className="text-light">
                    <FaApple />
                </a>
            </header>
            <div className="">
                Apple Tv +
            </div>
        </>
    )
}

export default Header