import {IProduct} from "../types/models";
import {useState} from "react";

interface ProductProps {
    product: IProduct
}

export const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false);

    const toggleVisibleDetails = () => {
        setDetails((prevState => !prevState));
    };

    const btnClass = details ? 'bg-yellow-400' : 'bg-blue-400';

    return (
        <div className="border py-3 px-6 rounded flex flex-col items-center mb-2">
            <img src={product.image} alt={product.title} className="w-1/6"/>
            <span>{product.title}</span>
            <span className="font-bold">{product.price}</span>
            <button
                className={"mb-2 py-2 px-2 border rounded " + btnClass}
                onClick={toggleVisibleDetails}
            >
                {details ? "Hide Details" : "Show Details"}
            </button>
            {details && (
                <div>
                    <p>{product.description}</p>
                    {product?.rating?.rate && (
                        <span>Rating: <span className="font-bold">{product.rating.rate}</span></span>
                    )}
                </div>
            )}
        </div>
    );
};