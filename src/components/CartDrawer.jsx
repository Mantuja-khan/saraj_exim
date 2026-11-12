import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onCheckout,
  onNavigate
}) {
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  return (
    <div
      className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`}
      onClick={onClose}
    >
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3 className="cart-title">Your Herbal Basket ({cartCount})</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--text-muted)' }}>
              <ShoppingCart size={46} style={{ margin: '0 auto 12px', opacity: 0.5 }} />
              <p>Your basket is currently empty.</p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onNavigate) onNavigate('products');
                }}
                style={{
                  marginTop: '14px',
                  color: 'var(--green-brand)',
                  fontWeight: '700',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Explore Herbal Powders →
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <span className="cart-item-price">₹{item.price * item.qty}</span>
                  <div className="cart-qty-ctrls">
                    <button
                      className="qty-btn"
                      onClick={() => onUpdateQty(item.id, -1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="qty-count">{item.qty}</span>
                    <button
                      className="qty-btn"
                      onClick={() => onUpdateQty(item.id, 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  style={{ color: '#aaa', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
                  aria-label="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">Subtotal</span>
              <span className="cart-total-val">₹{cartSubtotal}</span>
            </div>
            <button
              className="checkout-btn"
              onClick={onCheckout}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

