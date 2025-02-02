import { useState, useEffect, useContext } from "react";
import axios from "../axiosConfig";
import CartContext from "../context/CartContext";
import "./ProductList.css"; // Import CSS

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        axios.get("/products/getproducts")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product-card" key={product._id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="price">Price: ${product.price}</p>
                    <button onClick={() => addToCart(product._id, 1)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
