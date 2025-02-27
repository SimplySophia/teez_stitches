

const Cart = ({ cartItems, setView, removeFromCart  }) => {

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold">Your Shopping Cart</h2>

            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <div key={index} className="mt-4 space-y-4 border-b pb-4 flex items-center relative">
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className="h-20 w-16 object-cover rounded-md"
                        />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-500">${item.price}</p>
                        </div>

                        <button
                          className="absolute top-3s right-2 bg-red-500 text-white px-3 py-1 rounded-md"
                          onClick={() => removeFromCart(index)}
                        >
                          remove
                        </button>
                    </div>
                    
                ))
            ) : (
                <p className="text-gray-500 mt-2">Your cart is empty.</p>
            )}

            <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => setView('product')}
            >
                Continue Shopping
            </button>
        </div>
    );
};

export default Cart;
