# Saraj Exim - Category Products Directory

To add products to any specific category, open that category's folder below and add your new product item into the exported array in `products.js`:

| Category Name | Dedicated Folder | File to Edit |
|---|---|---|
| **Indian Spices Powder** | `src/data/products/spices/` | `products.js` |
| **Flower Powder** | `src/data/products/flower/` | `products.js` |
| **Fruit and Vegetable Powder** | `src/data/products/fruit_veg/` | `products.js` |
| **Herbal Powder** | `src/data/products/herbal/` | `products.js` |
| **Walnut Shell Powder** | `src/data/products/walnut_shell/` | `products.js` |
| **Cow Dung Powder** | `src/data/products/cow_dung/` | `products.js` |
| **Indian Pickle** | `src/data/products/pickle/` | `products.js` |
| **Edible Oils** | `src/data/products/edible_oils/` | `products.js` |

---

### How to Add a New Product (Example)

Open the category file (e.g. `src/data/products/spices/products.js`), and paste your product:

```javascript
{
  id: 'coriander_powder',               // Unique ID
  name: 'Coriander Powder',              // Product title
  subtitle: 'Stone Ground 100g',         // Pack description / weight
  price: 139,                            // Price in ₹ (INR)
  image: '/images/saraj/chilli_powder.png', // Image path
  category: 'spices',                    // Category ID
  categoryName: 'Indian Spices Powder',  // Category label
  featured: false,                       // true to show on Homepage featured section
  description: '100% pure coriander powder with natural aroma and freshness.',
  benefits: [
    'Aids digestion',
    'Rich in antioxidants',
    'Adds authentic aroma'
  ]
}
```

The system will automatically load the new product into all product pages, drop-downs, search, and detail pages!

