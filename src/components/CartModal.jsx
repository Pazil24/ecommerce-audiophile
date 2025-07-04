import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "./Button";

const CartModal = () => {
  const navigate = useNavigate();
  const {
    items,
    isOpen,
    totalPrice,
    updateQuantity,
    removeItem,
    clearCart,
    toggleCart,
  } = useCart();

  if (!isOpen) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const getCartImagePath = (slug) => {
    // Map slugs to actual cart image names
    const imageMap = {
      "xx99-mark-two-headphones": "image-xx99-mark-two-headphones.jpg",
      "xx99-mark-one-headphones": "image-xx99-mark-one-headphones.jpg",
      "xx59-headphones": "image-xx59-headphones.jpg",
      "zx9-speaker": "image-zx9-speaker.jpg",
      "zx7-speaker": "image-zx7-speaker.jpg",
      "yx1-earphones": "image-yx1-earphones.jpg",
    };
    return `/assets/cart/${imageMap[slug] || "placeholder.jpg"}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end pt-16 md:pt-20 pr-4 md:pr-6 lg:pr-20">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={toggleCart}
      ></div>

      {/* Cart Modal */}
      <div className="relative bg-white rounded-lg p-4 md:p-6 w-full max-w-sm md:max-w-md shadow-lg">
        {/* Go Back Button */}
        <div className="mb-4">
          <button
            onClick={toggleCart}
            className="text-gray-500 hover:text-[#D87D4A] transition-colors text-sm"
          >
            ← Go Back
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base md:text-lg font-bold text-black">
            CART ({items.length})
          </h2>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-gray-500 underline hover:text-black transition-colors text-sm md:text-base"
            >
              Remove all
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-6 md:py-8">
            <p className="text-gray-500 text-sm md:text-base">
              Your cart is empty
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4 md:space-y-6 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 md:gap-4">
                  <img
                    src={getCartImagePath(item.slug)}
                    alt={item.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-black text-xs md:text-sm truncate">
                      {item.name
                        .replace(" Headphones", "")
                        .replace(" Speaker", "")
                        .replace(" Earphones", "")}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  <div className="flex items-center bg-gray-100">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="px-2 md:px-3 py-2 text-gray-500 hover:text-[#D87D4A] transition-colors text-sm"
                    >
                      -
                    </button>
                    <span className="px-2 md:px-3 py-2 font-bold text-xs md:text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="px-2 md:px-3 py-2 text-gray-500 hover:text-[#D87D4A] transition-colors text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-500 text-sm md:text-base">TOTAL</span>
              <span className="font-bold text-base md:text-lg text-black">
                {formatPrice(totalPrice)}
              </span>
            </div>

            {/* Checkout Button */}
            <Button
              variant="primary"
              className="w-full text-sm md:text-base"
              onClick={() => {
                toggleCart();
                navigate("/checkout");
              }}
            >
              CHECKOUT
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
