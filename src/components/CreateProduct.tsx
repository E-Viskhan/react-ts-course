import React, {ChangeEventHandler, FormEventHandler, useState} from "react";
import {IProduct, IProductBase} from "../types/models";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const productData: IProductBase =   {
    title: 'test product',
    description: 'lorem ipsum set',
    price: 13.5,
    image: 'https://i.pravatar.cc',
    category: 'electronic'
};

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const clearForm = () => {
        setTitle('');
    };

    const clearError = () => {
        setError('');
    }

    const formHandler: FormEventHandler = async (event) => {
        event.preventDefault();

        if (title.trim()) {
            const { data } =  await axios.post<IProduct>('https://fakestoreapi.com/products', {...productData, title});

            clearForm();
            onCreate(data);
        } else {
            setError("Данное поле обязательно");
        }

    };

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (error) {
            clearError();
        }

        setTitle(event.target.value);
    };

    return (
        <form
            className="flex flex-col"
            onSubmit={formHandler}
        >
            <input
                value={title}
                onChange={changeHandler}
                type="text"
                className="py-2 px-4 mb-2 border rounded outline-0"
                placeholder="Enter product title..."
            />
            {error && <ErrorMessage error={error} className="mb-2"/>}
            <button type="submit" className="py-2 px-4 border rounded bg-yellow-500 hover:text-white">Create</button>
        </form>
    );
};