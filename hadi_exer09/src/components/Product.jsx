function Product({ products, addToCart }) {
    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="product-container">
            {products.map((product) => ( //added an onclick function in the add to cart button (also returns the info of the specific item)
                <div className="product-card" key={product.id}>
                    <img className="product-image" src={product.image} alt={product.name} />
                    <h1 className="product-name">{product.name}</h1>
                    <p className="product-price">${product.price}</p>
                    <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Product;