import {useEffect, useState} from "react";
import {IProduct} from "../types/models";
import axios, {AxiosError} from "axios";

interface IGetProductsParams {
    limit?: number
}

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const addProduct = (product: IProduct) => {
        setProducts(prev => [...prev, product]);
    }

    const fetchProducts = async (params?: IGetProductsParams) => {
        try {
            setError('');
            setLoading(true);
            const { data } = await axios.get<IProduct[]>('https://fakestoreapi.com/products', { params });

            setProducts(data);
        } catch (e: unknown) {
            const err = e as AxiosError;

            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        void fetchProducts({ limit: 5 });
    }, []);

    return { loading, error, products, addProduct };
}