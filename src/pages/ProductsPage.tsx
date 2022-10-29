import {useProducts} from "../hooks/products";
import {useContext} from "react";
import {ModalContext} from "../context";
import {IProduct} from "../types/models";
import {CreateProduct, ErrorMessage, Loader, Modal, Product} from "../components";

export const ProductsPage = () => {
    const {loading, error, products, addProduct} = useProducts();
    const { modal, open, close } = useContext(ModalContext);

    const createHandler = (product: IProduct) => {
        addProduct(product);
        close();
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {products.map((product) => <Product product={product} key={product.id}/>)}
            {modal && (
                <Modal title="Create new product" onClose={close}>
                    <CreateProduct onCreate={createHandler}/>
                </Modal>
            )}
            <button
                className="fixed bottom-5 right-5 px-4 py-2 rounded-full bg-red-700 text-white text-2xl hover:bg-red-800"
                onClick={open}
            >+</button>
        </div>
    );
};