import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  ShoppingCart,
  ChevronDown,
  Plus,
  X,
  ArrowRight,
  Menu
} from 'lucide-react';
import { PRODUCT_CATEGORIES, SARAJ_PRODUCTS } from '../data/sarajData';

export default function Navbar({
  currentPage,
  onNavigate,
  selectedCategory,
  onSelectCategory,
  cartCount,
  onOpenCart,
  onSelectProduct,
  showToast
}) {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isMobileSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isMobileSearchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (catId, catName) => {
    onSelectCategory(catId);
    onNavigate('products');
    setIsProductsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    if (showToast) {
      showToast(`Browsing: ${catName}`);
    }
  };

  const matchingProducts = searchQuery.trim()
    ? SARAJ_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const navClasses = [
    'saraj-navbar',
    currentPage === 'home' ? 'nav-home-overlay' : '',
    currentPage === 'home' && !isScrolled ? 'nav-transparent' : '',
    isScrolled ? 'nav-scrolled' : ''
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClasses}>
      <div className="container navbar-inner">
        {/* 1. Left: Brand Logo */}
        <div
          className="saraj-logo"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          title="SARAJ EXIM"
        >
          <img
            src="/images/saraj/saraj_logo.png"
            alt="SARAJ EXIM"
            className="saraj-nav-logo-img"
          />
        </div>

        {/* Mobile Right-Side Drawer Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="mobile-nav-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* 2. Middle: Navigation Links (Clean & Well Separated) */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <button
              type="button"
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => {
                onNavigate('about');
                setIsMobileMenuOpen(false);
              }}
            >
              About
            </button>
          </li>

          {/* Our Products Dropdown */}
          <li
            className="nav-item-dropdown"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-btn ${currentPage === 'products' ? 'active' : ''}`}
              onClick={() => {
                onNavigate('products');
                setIsProductsDropdownOpen(prev => !prev);
              }}
            >
              <span>Our Products</span>
              <ChevronDown
                size={14}
                className={`dropdown-chevron ${isProductsDropdownOpen ? 'open' : ''}`}
              />
            </button>

            {/* Dropdown Menu with + Icons at the right of every item */}
            {isProductsDropdownOpen && (
              <div className="sharp-dropdown-menu">
                <a
                  href="#products"
                  className={`sharp-dropdown-item sharp-dropdown-all ${selectedCategory === null && currentPage === 'products' ? 'item-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(null, 'All Herbal Powders');
                  }}
                >
                  <span className="dropdown-item-num">★</span>
                  <span className="dropdown-item-label">All Herbal Powders</span>
                  <span className="dropdown-item-plus" title="Expandable">
                    <Plus size={14} />
                  </span>
                </a>

                {PRODUCT_CATEGORIES.map((cat, idx) => (
                  <a
                    key={cat.id}
                    href={`#products/${cat.id}`}
                    className={`sharp-dropdown-item ${selectedCategory === cat.id && currentPage === 'products' ? 'item-active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(cat.id, cat.name);
                    }}
                  >
                    <span className="dropdown-item-num">{idx + 1}.</span>
                    <span className="dropdown-item-label">{cat.name}</span>
                    <span className="dropdown-item-plus" title="Add / View sub-items">
                      <Plus size={14} />
                    </span>
                  </a>
                ))}
              </div>
            )}
          </li>

          <li>
            <button
              type="button"
              className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* 3. Right Side Corner: Search, Cart & Mobile Toggle at the Far Right Corner */}
        <div className="navbar-right-actions">
          {/* Integrated Search Input (Full-width overlay on small screens when opened) */}
          <div className={`navbar-search-wrapper ${isMobileSearchOpen ? 'mobile-search-active' : ''}`}>
            <form
              className="navbar-little-search"
              onSubmit={(e) => {
                e.preventDefault();
                onNavigate('products');
                setIsSearchDropdownOpen(false);
                setIsMobileSearchOpen(false);
              }}
            >
              <Search size={14} className="little-search-icon" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search herbs..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchDropdownOpen(true);
                }}
                onFocus={() => setIsSearchDropdownOpen(true)}
                className="little-search-input"
              />
              {(searchQuery || isMobileSearchOpen) && (
                <button
                  type="button"
                  className="little-search-clear"
                  aria-label="Close search"
                  onClick={() => {
                    if (searchQuery) {
                      setSearchQuery('');
                      setIsSearchDropdownOpen(false);
                    } else {
                      setIsMobileSearchOpen(false);
                      setIsSearchDropdownOpen(false);
                    }
                  }}
                >
                  <X size={14} />
                </button>
              )}
            </form>

            {isMobileSearchOpen && (
              <button
                type="button"
                className="mobile-search-close-btn"
                aria-label="Close mobile search"
                onClick={() => {
                  setIsMobileSearchOpen(false);
                  setIsSearchDropdownOpen(false);
                }}
              >
                <X size={18} />
              </button>
            )}

            {/* Instant Search Dropdown */}
            {isSearchDropdownOpen && searchQuery.trim() && (
              <div className="nav-search-results-dropdown">
                <div className="dropdown-header">
                  <span>Matching Herbs ({matchingProducts.length})</span>
                  <button
                    className="dropdown-close"
                    type="button"
                    onClick={() => setIsSearchDropdownOpen(false)}
                  >
                    ✕
                  </button>
                </div>
                {matchingProducts.length === 0 ? (
                  <div className="dropdown-empty">No products found</div>
                ) : (
                  matchingProducts.map(prod => (
                    <div
                      key={prod.id}
                      className="dropdown-item"
                      onClick={() => {
                        onSelectProduct(prod);
                        setIsSearchDropdownOpen(false);
                        setIsMobileSearchOpen(false);
                      }}
                    >
                      <img src={prod.image} alt={prod.name} className="dropdown-item-thumb" />
                      <div className="dropdown-item-info">
                        <span className="dropdown-item-title">{prod.name}</span>
                        <span className="dropdown-item-subtitle">₹{prod.price} • {prod.subtitle}</span>
                      </div>
                      <ArrowRight size={13} className="dropdown-item-arrow" />
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Mobile Search Icon Button (left of Cart on small screens) */}
          <button
            type="button"
            className="mobile-search-toggle-btn"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsMobileSearchOpen(true);
            }}
            aria-label="Search products"
            title="Search"
          >
            <Search size={19} />
          </button>

          {/* Cart Icon Button with Badge (left of Toggle on small screens) */}
          <button
            type="button"
            className="nav-cart-btn"
            onClick={onOpenCart}
            title="View Herbal Basket"
          >
            <ShoppingCart size={19} />
            {cartCount > 0 && <span className="badge-counter">{cartCount}</span>}
          </button>

          {/* Mobile Hamburger Toggle (exact right side on small screens) */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
