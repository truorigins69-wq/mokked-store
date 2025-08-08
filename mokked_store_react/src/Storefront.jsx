
import { useState } from 'react';

export default function Storefront() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const product = {
    name: 'Mokked Hub Access',
    price: 10,
    description: 'Premium lifetime access to Mokked Hub — undetected scripts, updates, and elite support.',
    image: 'https://cdn.discordapp.com/attachments/1157407024020103270/1157414934238580746/image.png',
  };

  const addToCart = () => {
    setCart([product]);
    setShowCheckout(false);
  };

  const clearCart = () => {
    setCart([]);
    setShowCheckout(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">🧠 Mokked Hub Store</h1>

      <div className="bg-zinc-900 p-6 rounded-xl shadow-xl grid md:grid-cols-2 gap-6 items-center">
        <img src={product.image} alt={product.name} className="rounded-2xl w-full object-cover" />
        <div>
          <h2 className="text-2xl font-bold mb-2">🔥 {product.name}</h2>
          <p className="mb-4">{product.description}</p>
          <p className="text-xl font-bold">💸 ${product.price}</p>
          <button onClick={addToCart} className="mt-4 w-full bg-green-600 px-4 py-2 rounded-xl">➕ Add to Cart</button>
        </div>
      </div>

      {cart.length > 0 && (
        <div className="bg-zinc-800 p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-semibold mb-2">🛒 Your Cart</h3>
          <p>• {cart[0].name} — ${cart[0].price}</p>
          <div className="mt-4 flex gap-4">
            <button onClick={() => setShowCheckout(true)} className="bg-yellow-600 px-4 py-2 rounded-xl">💳 Checkout</button>
            <button onClick={clearCart} className="bg-red-600 px-4 py-2 rounded-xl">❌ Clear Cart</button>
          </div>
        </div>
      )}

      {showCheckout && (
        <div className="bg-zinc-800 p-6 rounded-xl shadow-xl border border-yellow-500 mt-4">
          <h3 className="text-2xl font-semibold mb-4">💳 Choose Payment Method</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="https://paypal.me/yourlink" target="_blank" rel="noreferrer">
              <button className="w-full bg-blue-600 py-2 rounded-xl">🅿️ PayPal</button>
            </a>
            <button onClick={() => navigator.clipboard.writeText('LgWdnCEVuN52DJGk61j4WFDHhK1J7NPYLf')} className="w-full bg-purple-600 py-2 rounded-xl">🪙 Copy LTC</button>
            <button onClick={() => navigator.clipboard.writeText('HuHo6uvY6Xk5eVm9BApoGGNTDY5HJxTHatmy3iZKhpoe')} className="w-full bg-indigo-600 py-2 rounded-xl">⚡ Copy SOL</button>
          </div>
          <div className="mt-6 text-sm text-yellow-300">
            After payment, return to our Discord and submit video proof in a ticket.
          </div>
          <div className="mt-2">
            <a href="https://discord.gg/yourserver" target="_blank" rel="noreferrer" className="text-blue-400 underline">🔗 Go to Discord</a>
          </div>
        </div>
      )}
    </div>
  );
}
