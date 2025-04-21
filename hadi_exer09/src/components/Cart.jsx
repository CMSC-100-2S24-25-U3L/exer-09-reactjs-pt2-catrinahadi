function Cart({ cartItems, removeFromCart }) {
    const handleRemoveFromCart = (id) => {
      removeFromCart(id);
    };
  
    const itemCounts = {};
    cartItems.forEach((item) => { // count product occurrences in the cart
      itemCounts[item.id] = (itemCounts[item.id] || 0) + 1;
    });
  
    return (
      <div className="cart-container">
        <div className="cart">
          <h2 className="cart-title">Shopping Cart</h2>
          <ul className="cart-items">
            {Object.keys(itemCounts).map((itemId) => { // loop through items in the cart
              const item = cartItems.find((item) => item.id === parseInt(itemId, 10)); // get item by id
              return ( // render each item and delete button
                <li className="cart-item" key={itemId}>
                  <div className="cart-item-info">
                    <p className="cart-item-nameprice">{item.name} - ${item.price} x {itemCounts[itemId]}</p>
                  </div>
                  <button className="delete-button" onClick={() => handleRemoveFromCart(parseInt(itemId, 10))}>delete</button>
                </li>
              );
            })}
          </ul>
          <p className="total-items">Total items: {cartItems.length}</p>
        </div>
      </div>
    );
}
  
export default Cart;