import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import CartDrawer from './components/CartDrawer';
import CatalogueModal from './components/CatalogueModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { SARAJ_PRODUCTS } from './data/sarajData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync hash routing on mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash || hash === 'home') {
        setCurrentPage('home');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else if (hash.startsWith('product/')) {
        const prodId = hash.replace('product/', '').trim();
        const found = SARAJ_PRODUCTS.find(p => p.id === prodId);
        if (found) {
          setSelectedProduct(found);
          setCurrentPage('product-detail');
        } else {
          setCurrentPage('products');
        }
      } else if (hash.startsWith('products')) {
        setCurrentPage('products');
        const parts = hash.split('/');
        if (parts.length > 1 && parts[1]) {
          setSelectedCategory(parts[1]);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll-triggered Left & Right Fade In Animations
  useEffect(() => {
    // Initial check for elements in viewport or elements needing immediate visibility
    const handleAnimate = () => {
      const animatedElements = document.querySelectorAll('.animate-left, .animate-right, .animate-up');
      if (!('IntersectionObserver' in window)) {
        animatedElements.forEach((el) => el.classList.add('in-view'));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -20px 0px'
        }
      );

      animatedElements.forEach((el) => observer.observe(el));
    };

    // Small delay to ensure DOM is rendered after route switch
    const timer = setTimeout(handleAnimate, 60);
    return () => clearTimeout(timer);
  }, [currentPage, selectedCategory, selectedProduct]);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.location.hash = `product/${product.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    if (catId) {
      window.location.hash = `products/${catId}`;
    } else {
      window.location.hash = 'products';
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`Added ${product.name} to basket!`);
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const handleCheckout = () => {
    showToast('Redirecting to Secure Payment...');
    setTimeout(() => {
      setIsCartOpen(false);
      setCartItems([]);
      showToast('🎉 Order Placed Successfully! Your SARAJ natural herbs will arrive soon.');
    }, 1200);
  };

  return (
    <div className="saraj-website">
      {/* Toast Notice */}
      {toastMessage && (
        <div className="toast-notice">
          <Check size={18} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* NAVBAR */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
        onSelectProduct={handleSelectProduct}
        showToast={showToast}
      />

      {/* MAIN VIEW PAGES */}
      <main className="saraj-main-content">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectCategory={handleSelectCategory}
            onSelectProduct={handleSelectProduct}
            showToast={showToast}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            onSelectProduct={handleSelectProduct}
            onAddToCart={addToCart}
            showToast={showToast}
          />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetailPage
            product={selectedProduct}
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onAddToCart={addToCart}
            showToast={showToast}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage showToast={showToast} />
        )}
      </main>

      {/* FOOTER */}
      <Footer
        onNavigate={navigateTo}
        onSelectCategory={handleSelectCategory}
        showToast={showToast}
      />

      {/* FLOATING ACTION BUTTONS (REAL WHATSAPP & PHONE ICONS & COLORS) */}
      <FloatingButtons />

      {/* SHOPPING CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
        onNavigate={navigateTo}
      />

      {/* OFFICIAL CATALOGUE MODAL */}
      <CatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
        onAddToCart={addToCart}
        showToast={showToast}
      />
    </div>
  );
}
