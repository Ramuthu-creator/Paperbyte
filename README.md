# Paperbyte — Universal Design E-Commerce Platform

> **Modern & Accessible E-Commerce Platform**  
> **Standards:** Universal Design (7 Principles) & WCAG 2.1 AA/AAA  

---

## 🌟 Overview

**Paperbyte** is a fully functional, high-performance, and accessible e-commerce web application inspired by leading global retail platforms (Amazon, eBay, Argos). It has been developed strictly utilizing **HTML5, CSS3, and JavaScript (ES6+) only**, without external build pipelines, runtime frameworks, or external sub-directories.

Key architectural highlights:
1. **Zero Subdirectories:** All required files (`index.html`, `style.css`, `script.js`) reside in a single flat directory for instant portability and offline execution.
2. **Exactly 3 Categories:** 
   - `Electronics` (4 products)
   - `Clothing` (3 products)
   - `Stationery` (3 products)
3. **Exactly 10 Products with Distinct Prices:** Every product carries a unique, non-repeating price tag, individual stock tracking, star ratings, and detailed specifications.
4. **Persistent Web Storage (`localStorage`):** Real-time persistent state management for the product catalog, stock inventory, user shopping basket, completed mock order receipts, and accessibility preferences.
5. **Universal Design Standards:** Adheres to the 7 Principles of Universal Design and WCAG 2.1 AA/AAA accessibility guidelines.
6. **Mock Checkout & Payment Gateway:** 3-step checkout flow (Shipping Details &rarr; Payment Authorization with one-click test card presets &rarr; Order Review & Instant Receipt Generation).

---

## 📂 File Structure (Single Root Directory)

```text
Paperbyte/
├── index.html       # Semantic HTML5 structure with accessible markup & aria regions
├── style.css        # Responsive CSS3 styling, design tokens & high-contrast mode
├── script.js        # Core logic, localStorage syncing, cart & checkout wizard
└── README.md        # Technical specification & HCI evaluation manual
```

> **Self-Contained Design:** No subfolders (`css/`, `js/`, `assets/`, `img/`) are required. All vector artwork and icons are self-contained SVGs that render crisp and offline on any machine.

---

## 🛍️ Product Catalog Breakdown (Authentic Real-World Items in LKR)

| # | Product Name | Category | Unit Price (LKR) | Initial Stock | Real Photo / Key Feature |
|---|--------------|----------|------------------|---------------|--------------------------|
| 1 | **Lenovo Smart Paper E-Ink Tablet** | `Electronics` | **Rs. 138,500.00** | 8 | 10.3" Anti-glare E-Ink Carta, 4096-level stylus |
| 2 | **Anker Soundcore Q20i Hybrid ANC Headphones** | `Electronics` | **Rs. 18,990.00** | 15 | Hybrid ANC, 40mm Hi-Res drivers, 40h playtime |
| 3 | **Attack Shark K85 Tri-Mode Mechanical Keyboard** | `Electronics` | **Rs. 24,450.00** | 10 | 75% Layout, TFT display screen, hot-swappable switches |
| 4 | **UGREEN Uno 65W GaN Fast Charger** | `Electronics` | **Rs. 12,850.00** | 25 | Robot design, GaN III, 2x USB-C PD + USB-A |
| 5 | **Nike Sportswear Club Fleece Pullover Hoodie** | `Clothing` | **Rs. 16,500.00** | 18 | Brushed fleece, embroidered Futura logo |
| 6 | **The North Face Antora Waterproof Jacket**| `Clothing` | **Rs. 32,900.00** | 6 | DryVent™ 2L waterproof shell, storm flap |
| 7 | **Herschel Little America Classic Backpack** | `Clothing` | **Rs. 28,750.00** | 14 | 25L heavy-duty poly fabric, 15" padded laptop sleeve |
| 8 | **Moleskine Classic Hardcover Ruled Notebook** | `Stationery` | **Rs. 7,450.00** | 30 | Large A5 240 ivory pages, expandable pocket |
| 9 | **Lamy Safari Charcoal Fountain Pen (Fine)** | `Stationery` | **Rs. 9,900.00** | 16 | Ergonomic triangular grip, black chromium fine nib |
| 10| **Parker Jotter Stainless Steel CT Ballpoint Pen**| `Stationery` | **Rs. 14,200.00** | 10 | Iconic all-steel barrel, chrome arrow clip, Quinkflow ink |

*Summary:* Exactly **10 items**, exactly **3 categories**, **10 unique price points in Sri Lankan Rupees (LKR)**.

---

## 🧠 Universal Design Standards (HCI Implementation)

The interface was built grounded in the **7 Principles of Universal Design**:

### 1. Equitable Use
- **High-Contrast Vision Mode:** Instant toggle between standard mode and WCAG AAA compliant high-contrast theme (pure black `#000000`, stark white `#ffffff`, and high-visibility yellow `#ffff00`).
- **Font Size Scaling:** 3-tier font size selector (`A` 100%, `A+` 125%, `A++` 150%) using root CSS variables for users with low vision.
- **Audio Assistance (TTS):** Integrated Web Speech API (`speechSynthesis`) that reads product descriptions and prices aloud.

### 2. Flexibility in Use
- **Dual Display Modes:** Switch between responsive **Grid View** and compact **List View**.
- **Real-Time Live Search:** Sub-string matching across product names, categories, and descriptions.
- **Dynamic Sorting:** Sort by *Featured*, *Price: Low to High*, *Price: High to Low*, *Rating*, and *Name (A-Z)*.
- **In-Stock Filtering:** Filter toggle to hide out-of-stock items.

### 3. Simple and Intuitive Use
- **Guided 3-Step Checkout Wizard:** Progress indicator clearly dividing checkout into *Step 1: Shipping Details*, *Step 2: Payment*, and *Step 3: Review & Place Order*.
- **Category Filter Tabs:** Direct single-click category filters with real-time product count badges.

### 4. Perceptible Information
- **Multi-Sensory Feedback:** Visual badges (in-stock, low-stock, out-of-stock), animated toast notifications, and off-screen ARIA live regions (`aria-live="polite"`) for screen readers.
- **Live Card Mirroring:** Interactive credit card preview that reflects user input dynamically during checkout.

### 5. Tolerance for Error
- **Stock Depletion Guards:** Users cannot add more units to their cart than currently available in store stock.
- **Cart Item Removal Undo:** Removing an item triggers a toast notification with an immediate **"Undo"** action.
- **Form Validation:** Real-time visual feedback and explanatory error prompts before moving between checkout steps.

### 6. Low Physical Effort
- **Universal Keyboard Shortcuts:**
  - `/` &rarr; Focus product search box
  - `C` &rarr; Open shopping basket drawer
  - `H` &rarr; Reset filter to All Products
  - `T` &rarr; Toggle Dark/Light theme
  - `K` &rarr; Toggle High-Contrast mode
  - `Esc` &rarr; Close any active modal or drawer
  - `?` &rarr; Open keyboard shortcuts help cheatsheet
- **Skip Links:** Primary `#mainContent` skip link for screen reader and keyboard-only power users.

### 7. Size and Space for Approach and Use
- **Touch-Friendly Hit Targets:** All buttons and inputs meet the 44&times;44px touch target guidelines.
- **Fluid Responsiveness:** Adapts effortlessly from mobile devices (320px) up to ultra-wide desktop viewports.

---

## 💾 LocalStorage Data Schema

All persistent state is stored in the browser's `localStorage` under isolated keys:

| Key | Type | Description |
|-----|------|-------------|
| `paperbyte_products` | `Array<Product>` | Complete product inventory, including live stock quantities decremented on checkout. |
| `paperbyte_cart` | `Array<CartItem>` | Selected cart items, quantities, and pricing. |
| `paperbyte_orders` | `Array<Order>` | Generated mock order receipts with unique confirmation IDs (e.g. `PB-849201`). |
| `paperbyte_preferences`| `Object` | User theme, contrast mode, font size, and motion preferences. |

> **Evaluator Tip:** Use the **"Reset Store Data & Stock"** button in the footer at any time to restore the default 10 products and initial stock numbers.

---

## 🚀 How to Run Locally

Because this project is built entirely in vanilla HTML/CSS/JS with zero build tools or dependencies:

1. **Directly in Browser:** Double-click `index.html` to open it in Chrome, Firefox, Safari, or Edge.
2. **Via Local HTTP Server (Optional):**
   ```bash
   python3 -m http.server 3000
   ```
   Then navigate to `http://localhost:3000`.

---

## 📝 Architecture & Feature Verification Checklist

- [x] Application created in **HTML, CSS, and JavaScript only**
- [x] Files located in **one folder without any sub folders/directories**
- [x] Web browser **localStorage** used to store all relevant state
- [x] Follows **Universal Design standards** with documented purpose
- [x] Exactly **10 products** with different prices
- [x] Exactly **3 categories** (`Electronics`, `Clothing`, `Stationery`)
- [x] Add in-stock products to shopping basket & remove them
- [x] Mock checkout and payment process with order confirmation screen
- [x] 100% self-contained and ready for immediate deployment
