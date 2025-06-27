import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("eMoney");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const vat = totalPrice * 0.2; // 20% VAT
  const shipping = 50;
  const grandTotal = totalPrice + vat + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleContinueAndPay = () => {
    clearCart();
    setShowConfirmation(false);
    navigate("/");
  };

  if (showConfirmation) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <div className="mb-6">
            <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">
              THANK YOU FOR YOUR ORDER
            </h2>
            <p className="text-gray-500">
              You will receive an email confirmation shortly.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            {items.length > 0 && (
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={`/assets/cart/image-${items[0].slug}.jpg`}
                  alt={items[0].name}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-sm">
                    {items[0].name
                      .replace(" Headphones", "")
                      .replace(" Speaker", "")
                      .replace(" Earphones", "")}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {formatPrice(items[0].price)}
                  </p>
                </div>
                <span className="text-gray-500 text-sm">
                  x{items[0].quantity}
                </span>
              </div>
            )}
            {items.length > 1 && (
              <div className="border-t pt-4">
                <p className="text-gray-500 text-sm">
                  and {items.length - 1} other item{items.length > 2 ? "s" : ""}
                </p>
              </div>
            )}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between">
                <span className="text-gray-500">GRAND TOTAL</span>
                <span className="font-bold text-lg">
                  {formatPrice(grandTotal)}
                </span>
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            className="w-full"
            onClick={handleContinueAndPay}
          >
            BACK TO HOME
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation
        className="text-white"
        style={{ backgroundColor: "black" }}
        showBorder={false}
      />

      <div className="bg-gray-50 min-h-screen pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-20 py-6 md:py-8">
          <button
            onClick={() => window.history.back()}
            className="text-gray-500 hover:text-[#D87D4A] transition-colors mb-6 md:mb-8 text-sm md:text-base"
          >
            Go Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Checkout Form */}
            <div className="bg-white rounded-lg p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">CHECKOUT</h1>

              <form onSubmit={handleSubmit}>
                {/* Billing Details */}
                <div className="mb-6 md:mb-8">
                  <h2 className="text-[#D87D4A] text-xs md:text-sm font-bold tracking-wide mb-4">
                    BILLING DETAILS
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs md:text-sm font-bold text-black mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D87D4A] text-sm md:text-base"
                        placeholder="Alexei Ward"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs md:text-sm font-bold text-black mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D87D4A] text-sm md:text-base"
                        placeholder="alexei@mail.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs md:text-sm font-bold text-black mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D87D4A] text-sm md:text-base"
                        placeholder="+1 202-555-0136"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="mb-8">
                  <h2 className="text-[#D87D4A] text-sm font-bold tracking-wide mb-4">
                    SHIPPING INFO
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-black mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D87D4A]"
                        placeholder="1137 Williams Avenue"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D87D4A]"
                        placeholder="10001"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D87D4A]"
                        placeholder="New York"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D87D4A]"
                        placeholder="United States"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="mb-8">
                  <h2 className="text-[#D87D4A] text-sm font-bold tracking-wide mb-4">
                    PAYMENT DETAILS
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">
                        Payment Method
                      </label>
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="eMoney"
                          checked={paymentMethod === "eMoney"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-3"
                        />
                        <span>e-Money</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={paymentMethod === "cash"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-3"
                        />
                        <span>Cash on Delivery</span>
                      </label>
                    </div>
                  </div>

                  {paymentMethod === "eMoney" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-bold text-black mb-2">
                          e-Money Number
                        </label>
                        <input
                          type="text"
                          name="eMoneyNumber"
                          value={formData.eMoneyNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D87D4A]"
                          placeholder="238521993"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-black mb-2">
                          e-Money PIN
                        </label>
                        <input
                          type="text"
                          name="eMoneyPin"
                          value={formData.eMoneyPin}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D87D4A]"
                          placeholder="6891"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "cash" && (
                    <div className="flex items-center gap-4 mt-4 p-4 bg-gray-100 rounded-lg">
                      <img
                        src="/assets/checkout/icon-cash-on-delivery.svg"
                        alt="Cash on delivery"
                        className="w-12 h-12"
                      />
                      <p className="text-gray-500 text-sm">
                        The 'Cash on Delivery' option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>

                <Button variant="primary" className="w-full mt-8" type="submit">
                  CONTINUE & PAY
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-lg font-bold text-black mb-6">SUMMARY</h2>

              <div className="space-y-6 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={`/assets/cart/image-${item.slug}.jpg`}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-black text-sm">
                        {item.name
                          .replace(" Headphones", "")
                          .replace(" Speaker", "")
                          .replace(" Earphones", "")}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <span className="text-gray-500 text-sm">
                      x{item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">TOTAL</span>
                  <span className="font-bold">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">SHIPPING</span>
                  <span className="font-bold">{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">VAT (INCLUDED)</span>
                  <span className="font-bold">{formatPrice(vat)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-gray-500">GRAND TOTAL</span>
                  <span className="font-bold text-[#D87D4A] text-lg">
                    {formatPrice(grandTotal)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
