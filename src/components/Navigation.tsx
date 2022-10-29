import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="flex justify-between items-center h-12 px-5 bg-gray-500 text-white">
            <span className="font-bold">React 2022</span>

            <span>
                <Link to="/" className="mr-2">Products</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    );
};