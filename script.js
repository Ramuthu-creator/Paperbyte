/**
 * Paperbyte E-Commerce Application
 * Universal Design Standards & Fully Functional Storefront
 */

// ==========================================================================
// 1. DATA INITIALIZATION & LOCALSTORAGE MANAGEMENT
// ==========================================================================

// Currency Formatter (Sri Lankan Rupees - LKR)
function formatPrice(amount) {
  return "Rs. " + Number(amount || 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

const DEFAULT_PRODUCTS = [
  // Category 1: Electronics (4 Products)
  {
    id: "prod-1",
    name: "Lenovo Smart Paper E-Ink Tablet",
    category: "Electronics",
    price: 138500.00,
    stock: 8,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bestseller",
    image: "Lenovo-Smart-Paper.webp",
    description: "10.3-inch anti-glare E-Ink digital paper tablet with battery-free stylus, 4096 levels of pressure sensitivity, cloud sync, and 50GB cloud storage.",
    specs: ["10.3\" Dual-Color Front Light E-Ink Carta", "Battery-Free Stylus (4096 Pressure Levels)", "Rockchip RK3566 Quad-Core / 64GB Storage", "Ultra-Slim 5.5mm CNC Aluminum Chassis"],
    svgIcon: `
      <svg class="product-svg-art" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lenovo Smart Paper illustration">
        <rect x="25" y="15" width="110" height="130" rx="12" fill="#1e293b" />
        <rect x="33" y="23" width="94" height="114" rx="6" fill="#f8fafc" />
        <path d="M42 42H118M42 58H118M42 74H90M42 90H105" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
        <path d="M42 110C55 102 70 118 85 106C92 100 100 105 110 102" stroke="#4338ca" stroke-width="3" stroke-linecap="round"/>
        <rect x="122" y="35" width="6" height="80" rx="3" fill="#6366f1" />
      </svg>
    `
  },
  {
    id: "prod-2",
    name: "Anker Soundcore Q20i Hybrid ANC Headphones",
    category: "Electronics",
    price: 18990.00,
    stock: 15,
    rating: 4.8,
    reviewsCount: 98,
    badge: "Popular",
    image: "Anker-Soundcore-Q20i.webp",
    description: "Hybrid active noise cancelling wireless over-ear headphones with 40mm dynamic drivers, Hi-Res certified sound, custom EQ app, and 40-hour playtime.",
    specs: ["Hybrid Active Noise Cancellation (ANC)", "40mm Dynamic Drivers (Hi-Res Audio)", "40H ANC Playtime / 60H Standard Mode", "Dual Device Bluetooth 5.0 Connection"],
    svgIcon: `
      <svg class="product-svg-art" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anker Soundcore Q20i illustration">
        <path d="M35 85C35 50 60 30 80 30C100 30 125 50 125 85" stroke="#4338ca" stroke-width="8" stroke-linecap="round"/>
        <rect x="25" y="80" width="24" height="45" rx="12" fill="#0f172a"/>
        <rect x="111" y="80" width="24" height="45" rx="12" fill="#0f172a"/>
        <rect x="28" y="86" width="18" height="33" rx="9" fill="#0d9488"/>
        <rect x="114" y="86" width="18" height="33" rx="9" fill="#0d9488"/>
      </svg>
    `
  },
  {
    id: "prod-3",
    name: "Attack Shark K85 Tri-Mode Mechanical Keyboard",
    category: "Electronics",
    price: 24450.00,
    stock: 10,
    rating: 4.7,
    reviewsCount: 76,
    badge: "Top Rated",
    image: "Attack-Shark-K85.webp",
    description: "75% compact Tri-Mode wireless mechanical keyboard featuring customized linear mechanical switches, TFT color screen, RGB backlighting, and volume knob.",
    specs: ["Tri-Mode: 2.4GHz Wireless, BT 5.0, USB-C", "TFT Smart Color Display Screen & Knob", "Factory-Lubed Hot-Swappable Linear Switches", "Gasket Mount with Multi-Layer Sound Dampening"],
    svgIcon: `
      <svg class="product-svg-art" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Attack Shark K85 illustration">
        <rect x="15" y="45" width="130" height="70" rx="10" fill="#334155" />
        <rect x="23" y="53" width="18" height="14" rx="3" fill="#818cf8"/>
        <rect x="45" y="53" width="18" height="14" rx="3" fill="#cbd5e1"/>
        <rect x="67" y="53" width="18" height="14" rx="3" fill="#cbd5e1"/>
        <rect x="89" y="53" width="18" height="14" rx="3" fill="#cbd5e1"/>
        <rect x="111" y="53" width="24" height="14" rx="3" fill="#818cf8"/>
        <rect x="23" y="73" width="22" height="14" rx="3" fill="#cbd5e1"/>
        <rect x="49" y="73" width="18" height="14" rx="3" fill="#2dd4bf"/>
        <rect x="71" y="73" width="18" height="14" rx="3" fill="#cbd5e1"/>
        <rect x="93" y="73" width="42" height="14" rx="3" fill="#cbd5e1"/>
        <rect x="40" y="93" width="80" height="14" rx="4" fill="#4338ca"/>
      </svg>
    `
  },
  {
    id: "prod-4",
    name: "UGREEN Uno 65W GaN Fast Charger",
    category: "Electronics",
    price: 12850.00,
    stock: 25,
    rating: 4.9,
    reviewsCount: 112,
    badge: "Essential",
    image: "UGREEN-Uno-65W-Charger.webp",
    description: "Playful robot design 65W GaN fast wall charger with smart interactive TFT mini-display, dual USB-C Power Delivery 3.0 ports, and USB-A output.",
    specs: ["65W Max GaNFast Semiconductor Power", "Smart Mini LED Expression Display", "2x USB-C (65W) + 1x USB-A (22.5W)", "Thermal Guard 2.0 Temperature Protection"],
    svgIcon: `
      <svg class="product-svg-art" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="UGREEN Uno 65W GaN Charger illustration">
        <rect x="40" y="35" width="80" height="85" rx="12" fill="#0f172a" />
        <rect x="58" y="50" width="44" height="12" rx="4" fill="#14b8a6"/>
        <rect x="58" y="70" width="44" height="12" rx="4" fill="#14b8a6"/>
        <rect x="58" y="90" width="44" height="14" rx="4" fill="#6366f1"/>
        <rect x="55" y="120" width="8" height="18" rx="2" fill="#94a3b8"/>
        <rect x="97" y="120" width="8" height="18" rx="2" fill="#94a3b8"/>
      </svg>
    `
  },

  // Category 2: Clothing (3 Products)
  {
    id: "prod-5",
    name: "Nike Sportswear Club Fleece Pullover Hoodie",
    category: "Clothing",
    price: 16500.00,
    stock: 18,
    rating: 4.9,
    reviewsCount: 84,
    badge: "New Arrival",
    image: "Nike-Sportswear-Club-Fleece-Hoodie.webp",
    description: "Classic brushed-back fleece pullover hoodie delivering cozy warmth, ribbed hem and cuffs, kangaroo pocket, and iconic embroidered Futura logo.",
    specs: ["80% Cotton / 20% Polyester Brushed Fleece", "Adjustable Drawcord Paneled Hood", "Ribbed Cuffs & Hem for Snug Fit", "Machine Washable Premium Comfort"],
    svgIcon: `
      <svg class="product-svg-art" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nike Sportswear Hoodie illustration">
        <path d="M45 45L20 80L35 90L48 68V130H112V68L125 90L140 80L115 45H95C95 55 65 55 65 45H45Z" fill="#334155"/>
        <path d="M65 45C65 60 95 60 95 45C95 30 65 30 65 45Z" fill="#1e293b"/>
        <path d="M80 60V125" stroke="#6366f1" stroke-width="3" stroke-linecap="round"/>
        <circle cx="80" cy="72" r="4" fill="#2dd4bf"/>
      </svg>
    `
  },
  {
    id: "prod-6",
    name: "The North Face Antora Waterproof Jacket",
    category: "Clothing",
    price: 32900.00,
    stock: 6,
    rating: 4.8,
    reviewsCount: 42,
    badge: "Limited Stock",
    image: "The-North-Face-Antora-Jacket.webp",
    description: "Modern weatherproof hooded rain jacket made with breathable, 100% recycled DryVent 2L fabric, windproof protection, and storm flap.",
    specs: ["Waterproof, Breathable DryVent™ 2L Shell", "Non-PFC DWR Durable Water-Repellent Finish", "Attached 3-Piece Hood with Adjustable Cord", "Secure-Zip Hand Pockets & Elastic Cuffs"],
    svgIcon: `
      <svg class="product-svg-art" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The North Face Antora Jacket illustration">
        <path d="M42 35L15 75L30 85L45 65V140H115V65L130 85L145 75L118 35H95L80 50L65 35H42Z" fill="#0f172a"/>
        <path d="M80 50V138" stroke="#fcd34d" stroke-width="3" stroke-dasharray="6 4"/>
        <rect x="52" y="90" width="22" height="16" rx="3" fill="#1e293b"/>
        <rect x="86" y="90" width="22" height="16" rx="3" fill="#1e293b"/>
      </svg>
    `
  },
  {
    id: "prod-7",
    name: "Herschel Little America Classic Backpack",
    category: "Clothing",
    price: 28750.00,
    stock: 14,
    rating: 4.7,
    reviewsCount: 130,
    badge: "Popular",
    image: "Herschel-Little-America-Backpack.webp",
    description: "Signature mountaineering-style 25L backpack featuring rubber magnetic strap closures, drawstring cinch, air-mesh back padding, and 15\" padded laptop sleeve.",
    specs: ["25L Capacity Heavy-Duty Poly Fabric", "Padded & Fleece-Lined 15\" Laptop Sleeve", "Contoured Air-Mesh Shoulder Straps", "Front Pocket with Key Clip & Hidden Zipper"],
    svgIcon: `
      <svg class="product-svg-art" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Herschel Backpack illustration">
        <rect x="42" y="42" width="76" height="96" rx="20" fill="#1e293b"/>
        <rect x="52" y="70" width="56" height="58" rx="10" fill="#334155"/>
        <path d="M60 42C60 28 100 28 100 42" stroke="#6366f1" stroke-width="5" stroke-linecap="round"/>
        <path d="M65 85H95" stroke="#2dd4bf" stroke-width="3" stroke-linecap="round"/>
        <circle cx="80" cy="100" r="4" fill="#cbd5e1"/>
      </svg>
    `
  },

  // Category 3: Stationery (3 Products)
  {
    id: "prod-8",
    name: "Moleskine Classic Hardcover Ruled Notebook",
    category: "Stationery",
    price: 7450.00,
    stock: 30,
    rating: 4.9,
    reviewsCount: 210,
    badge: "Bestseller",
    image: "Moleskine-Classic-Notebook.webp",
    description: "The legendary notebook with bound cardboard cover, rounded corners, acid-free ivory pages, bookmark ribbon, and elastic closure band.",
    specs: ["Large A5 Format (13 x 21 cm) - 240 Pages", "70 g/m² Acid-Free Ivory Lined Paper", "Expandable Inner Pocket for Notes & Cards", "180° Lay-Flat Thread Binding"],
    svgIcon: `
      <svg class="product-svg-art" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Moleskine Notebook illustration">
        <rect x="35" y="25" width="90" height="115" rx="8" fill="#4338ca"/>
        <rect x="42" y="25" width="10" height="115" fill="#312e81"/>
        <circle cx="75" cy="50" r="2" fill="#e0e7ff"/>
        <circle cx="95" cy="50" r="2" fill="#e0e7ff"/>
        <circle cx="75" cy="70" r="2" fill="#e0e7ff"/>
        <circle cx="95" cy="70" r="2" fill="#e0e7ff"/>
        <circle cx="75" cy="90" r="2" fill="#e0e7ff"/>
        <circle cx="95" cy="90" r="2" fill="#e0e7ff"/>
        <path d="M90 140L93 115L96 140" fill="#f43f5e"/>
      </svg>
    `
  },
  {
    id: "prod-9",
    name: "Lamy Safari Charcoal Fountain Pen (Fine)",
    category: "Stationery",
    price: 9900.00,
    stock: 16,
    rating: 4.8,
    reviewsCount: 65,
    badge: "Handcrafted",
    image: "Lamy-Safari-Fountain-Pen.webp",
    description: "Timeless German-engineered fountain pen crafted from robust matte charcoal ABS plastic with ergonomic grip section and black chromium-plated fine steel nib.",
    specs: ["Ergonomic Triangular Grip Section", "Black Chromium-Plated Fine Steel Nib", "Sturdy Flexible Spring-Brass Wire Clip", "Window Indicator for Ink Cartridge Level"],
    svgIcon: `
      <svg class="product-svg-art" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lamy Safari Fountain Pen illustration">
        <rect x="74" y="30" width="12" height="60" rx="3" fill="#64748b"/>
        <rect x="76" y="90" width="8" height="30" fill="#94a3b8"/>
        <path d="M74 120L80 138L86 120H74Z" fill="#fcd34d"/>
        <path d="M80 120V134" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="71" y="26" width="18" height="6" rx="2" fill="#475569"/>
      </svg>
    `
  },
  {
    id: "prod-10",
    name: "Parker Jotter Stainless Steel CT Ballpoint Pen",
    category: "Stationery",
    price: 14200.00,
    stock: 10,
    rating: 4.6,
    reviewsCount: 52,
    badge: "Classic",
    image: "Parker-Jotter-Stainless-Steel-Pen.webp",
    description: "Iconic retro stainless steel ballpoint pen featuring high-shine chrome arrow trim, signature click button mechanism, and Quinkflow smooth ink refill.",
    specs: ["Solid Stainless Steel Barrel & Cap", "Polished Chrome Trim & Arrow Pocket Clip", "Signature Parker Click Push-Button Action", "Medium 1.0mm Quinkflow Blue Ink Refill"],
    svgIcon: `
      <svg class="product-svg-art" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parker Jotter Ballpoint Pen illustration">
        <rect x="25" y="80" width="110" height="45" rx="6" fill="#0d9488" fill-opacity="0.8"/>
        <rect x="35" y="45" width="28" height="40" rx="4" fill="#14b8a6"/>
        <rect x="70" y="55" width="24" height="30" rx="4" fill="#5eead4"/>
        <rect x="100" y="35" width="25" height="50" rx="4" fill="#0f766e"/>
        <circle cx="80" cy="102" r="4" fill="#ffffff"/>
      </svg>
    `
  }
];

// LocalStorage Keys
const STORAGE_KEYS = {
  PRODUCTS: "paperbyte_products",
  CART: "paperbyte_cart",
  ORDERS: "paperbyte_orders",
  PREFERENCES: "paperbyte_preferences"
};

// Application State
let appState = {
  products: [],
  cart: [],
  orders: [],
  activeCategory: "all",
  searchQuery: "",
  sortBy: "featured",
  onlyInStock: false,
  viewMode: "grid",
  lastRemovedItem: null,
  preferences: {
    theme: "light",
    contrast: "normal",
    fontSize: "normal",
    reducedMotion: false,
    speechEnabled: true
  }
};

// ==========================================================================
// 2. STATE PERSISTENCE & INITIALIZATION
// ==========================================================================

function loadStateFromStorage() {
  // 1. Products
  try {
    const savedProducts = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (savedProducts) {
      const parsed = JSON.parse(savedProducts);
      // Auto-migrate if stored products are from previous USD catalog or missing images
      if (!Array.isArray(parsed) || parsed.length !== 10 || !parsed[0].image || parsed[0].price < 1000) {
        console.info("Migrating store products to authentic LKR catalog with product imagery.");
        appState.products = [...DEFAULT_PRODUCTS];
        saveProductsToStorage();
        appState.cart = [];
        saveCartToStorage();
      } else {
        // Automatically migrate any legacy image filenames to the new transparent webp studio cutouts
        const imageMigrationMap = {
          "Lenovo Smart Paper.webp": "Lenovo-Smart-Paper.webp",
          "Attack Shark K85 Mechanical Keyboard.webp": "Attack-Shark-K85.webp",
          "UGREEN 65W UNO RG GaN Fast Charging Adapter.jpg": "UGREEN-Uno-65W-Charger.webp",
          "ugreen_official.png": "UGREEN-Uno-65W-Charger.webp",
          "Nike-Sportswear-Club-Fleece-Hoodie.png": "Nike-Sportswear-Club-Fleece-Hoodie.webp",
          "The-North-Face-Antora-Jacket.jpg": "The-North-Face-Antora-Jacket.webp",
          "Herschel-Little-America-Backpack.jpg": "Herschel-Little-America-Backpack.webp",
          "Moleskine-Classic-Notebook.jpg": "Moleskine-Classic-Notebook.webp",
          "Lamy-Safari-Fountain-Pen.jpg": "Lamy-Safari-Fountain-Pen.webp",
          "Parker-Jotter-Stainless-Steel-Pen.jpg": "Parker-Jotter-Stainless-Steel-Pen.webp"
        };
        parsed.forEach(p => {
          if (imageMigrationMap[p.image]) {
            p.image = imageMigrationMap[p.image];
          }
        });
        appState.products = parsed;
        saveProductsToStorage();
      }
    } else {
      appState.products = [...DEFAULT_PRODUCTS];
      saveProductsToStorage();
    }
  } catch (e) {
    console.warn("Could not load products from localStorage, using defaults", e);
    appState.products = [...DEFAULT_PRODUCTS];
  }

  // 2. Cart
  try {
    const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
    appState.cart = savedCart ? JSON.parse(savedCart) : [];
  } catch (e) {
    appState.cart = [];
  }

  // 3. Orders
  try {
    const savedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
    appState.orders = savedOrders ? JSON.parse(savedOrders) : [];
  } catch (e) {
    appState.orders = [];
  }

  // 4. Preferences
  try {
    const savedPrefs = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
    if (savedPrefs) {
      appState.preferences = { ...appState.preferences, ...JSON.parse(savedPrefs) };
    }
  } catch (e) {
    console.warn("Using default accessibility preferences");
  }

  applyPreferences();
}

function saveProductsToStorage() {
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(appState.products));
}

function saveCartToStorage() {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(appState.cart));
}

function saveOrdersToStorage() {
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(appState.orders));
}

function savePreferencesToStorage() {
  localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(appState.preferences));
}

function resetEntireStoreData() {
  if (confirm("Reset Paperbyte store data back to default? This will clear orders and restore original stock.")) {
    localStorage.removeItem(STORAGE_KEYS.PRODUCTS);
    localStorage.removeItem(STORAGE_KEYS.CART);
    localStorage.removeItem(STORAGE_KEYS.ORDERS);
    appState.products = [...DEFAULT_PRODUCTS];
    appState.cart = [];
    appState.orders = [];
    saveProductsToStorage();
    saveCartToStorage();
    saveOrdersToStorage();
    renderProducts();
    updateCartUI();
    showToast("Store data restored to pristine initial state!", "info");
    announceForScreenReader("Store data has been reset to defaults.");
  }
}

// ==========================================================================
// 3. UNIVERSAL DESIGN & ACCESSIBILITY CONTROLS
// ==========================================================================

function applyPreferences() {
  const root = document.documentElement;

  // Theme
  root.setAttribute("data-theme", appState.preferences.theme);
  const themeLabel = document.getElementById("currentThemeLabel");
  if (themeLabel) {
    themeLabel.textContent = appState.preferences.theme === "dark" ? "Dark Mode" : "Light Mode";
  }
  const btnThemeLight = document.getElementById("btnThemeLight");
  const btnThemeDark = document.getElementById("btnThemeDark");
  if (btnThemeLight && btnThemeDark) {
    btnThemeLight.classList.toggle("active", appState.preferences.theme === "light");
    btnThemeDark.classList.toggle("active", appState.preferences.theme === "dark");
  }

  // Contrast
  root.setAttribute("data-contrast", appState.preferences.contrast);
  const contrastLabel = document.getElementById("currentContrastLabel");
  if (contrastLabel) {
    contrastLabel.textContent = appState.preferences.contrast === "high" ? "High Contrast (WCAG AAA)" : "Standard";
  }
  const btnContrastNormal = document.getElementById("btnContrastNormal");
  const btnContrastHigh = document.getElementById("btnContrastHigh");
  if (btnContrastNormal && btnContrastHigh) {
    btnContrastNormal.classList.toggle("active", appState.preferences.contrast !== "high");
    btnContrastHigh.classList.toggle("active", appState.preferences.contrast === "high");
  }

  // Font Size
  root.setAttribute("data-font-size", appState.preferences.fontSize);
  const fontLabel = document.getElementById("currentFontSizeLabel");
  if (fontLabel) {
    const labels = { normal: "Standard (100%)", large: "Large (125%)", "extra-large": "Extra Large (150%)" };
    fontLabel.textContent = labels[appState.preferences.fontSize] || "Standard (100%)";
  }
  document.querySelectorAll("[data-size]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.size === appState.preferences.fontSize);
  });

  // Reduced Motion
  root.setAttribute("data-reduced-motion", appState.preferences.reducedMotion);
}

function toggleA11yPanel() {
  const panel = document.getElementById("a11yFlyoutPanel");
  if (panel && panel.classList.contains("active")) {
    closeA11yPanel();
  } else {
    openA11yPanel();
  }
}

function openA11yPanel() {
  const panel = document.getElementById("a11yFlyoutPanel");
  const backdrop = document.getElementById("a11yBackdrop");
  const fab = document.getElementById("btnA11yFab");
  if (panel && backdrop) {
    panel.classList.add("active");
    backdrop.classList.add("active");
    panel.setAttribute("aria-hidden", "false");
    if (fab) fab.setAttribute("aria-expanded", "true");
    announceForScreenReader("Accessibility preferences panel opened");
  }
}

function closeA11yPanel() {
  const panel = document.getElementById("a11yFlyoutPanel");
  const backdrop = document.getElementById("a11yBackdrop");
  const fab = document.getElementById("btnA11yFab");
  if (panel && backdrop) {
    panel.classList.remove("active");
    backdrop.classList.remove("active");
    panel.setAttribute("aria-hidden", "true");
    if (fab) fab.setAttribute("aria-expanded", "false");
  }
}

function setHighContrast(isHigh) {
  appState.preferences.contrast = isHigh ? "high" : "normal";
  savePreferencesToStorage();
  applyPreferences();
  announceForScreenReader(`High contrast mode ${isHigh ? "enabled" : "disabled"}`);
}

function setTheme(theme) {
  appState.preferences.theme = theme;
  savePreferencesToStorage();
  applyPreferences();
  announceForScreenReader(`Theme set to ${theme}`);
}

function resetAccessibilityPreferences() {
  appState.preferences.theme = "light";
  appState.preferences.contrast = "normal";
  appState.preferences.fontSize = "normal";
  appState.preferences.reducedMotion = false;
  savePreferencesToStorage();
  applyPreferences();
  showToast("Accessibility settings reset to standard defaults", "info");
  announceForScreenReader("Accessibility preferences reset to default values");
}

function toggleTheme() {
  appState.preferences.theme = appState.preferences.theme === "dark" ? "light" : "dark";
  savePreferencesToStorage();
  applyPreferences();
  announceForScreenReader(`Switched to ${appState.preferences.theme} theme`);
}

function toggleHighContrast() {
  appState.preferences.contrast = appState.preferences.contrast === "high" ? "normal" : "high";
  savePreferencesToStorage();
  applyPreferences();
  announceForScreenReader(`High contrast mode ${appState.preferences.contrast === "high" ? "enabled" : "disabled"}`);
}

function setFontSize(size) {
  appState.preferences.fontSize = size;
  savePreferencesToStorage();
  applyPreferences();
  announceForScreenReader(`Font size set to ${size}`);
}

function announceForScreenReader(message) {
  const liveRegion = document.getElementById("a11yLiveAnnouncer");
  if (liveRegion) {
    liveRegion.textContent = message;
  }
}

function speakText(text) {
  if (!('speechSynthesis' in window)) {
    showToast("Text-to-speech is not supported on this browser.", "info");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

// ==========================================================================
// 4. PRODUCT FILTERING, SORTING & RENDERING
// ==========================================================================

function getFilteredProducts() {
  return appState.products.filter(item => {
    // 1. Category Filter
    if (appState.activeCategory !== "all" && item.category.toLowerCase() !== appState.activeCategory.toLowerCase()) {
      return false;
    }
    // 2. In Stock filter
    if (appState.onlyInStock && item.stock <= 0) {
      return false;
    }
    // 3. Search Query
    if (appState.searchQuery.trim() !== "") {
      const q = appState.searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchSpecs = item.specs.some(s => s.toLowerCase().includes(q));
      if (!matchName && !matchCategory && !matchDesc && !matchSpecs) {
        return false;
      }
    }
    return true;
  }).sort((a, b) => {
    switch (appState.sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "featured":
      default:
        return 0; // retain initial logical order
    }
  });
}

function renderProducts() {
  const container = document.getElementById("productsGrid");
  const countEl = document.getElementById("resultsCount");
  if (!container) return;

  const filtered = getFilteredProducts();
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${appState.products.length} products`;
  }

  // Update Category Badge Counts
  updateCategoryCounts();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 class="empty-state-title">No products found</h3>
        <p class="empty-state-text">We couldn't find any items matching your current filters or search term "${appState.searchQuery}".</p>
        <button class="btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.className = `products-grid ${appState.viewMode === "list" ? "list-view" : ""}`;

  container.innerHTML = filtered.map(product => {
    const isOutOfStock = product.stock <= 0;
    const isLowStock = product.stock > 0 && product.stock <= 7;
    const stockClass = isOutOfStock ? "out-of-stock" : isLowStock ? "low-stock" : "in-stock";
    const stockLabel = isOutOfStock ? "Out of Stock" : isLowStock ? `Only ${product.stock} Left` : `${product.stock} in Stock`;

    // Calculate cart quantity already allocated
    const cartItem = appState.cart.find(c => c.productId === product.id);
    const cartQty = cartItem ? cartItem.quantity : 0;
    const remainingStock = product.stock - cartQty;
    const canAddToCart = remainingStock > 0;

    return `
      <article class="product-card" id="card-${product.id}" aria-labelledby="title-${product.id}">
        <div class="product-card-visual">
          <span class="category-tag">${product.category}</span>
          <span class="stock-tag ${stockClass}">${stockLabel}</span>
          ${product.image 
            ? `<img src="${encodeURI(product.image)}" alt="${product.name}" class="product-img" loading="lazy" />` 
            : (product.svgIcon || '')}
        </div>

        <div class="product-card-body">
          <div class="product-rating" aria-label="Rated ${product.rating} out of 5 stars from ${product.reviewsCount} reviews">
            <span class="stars" aria-hidden="true">★★★★★</span>
            <span>${product.rating.toFixed(1)}</span>
            <span>(${product.reviewsCount})</span>
          </div>

          <h3 class="product-title" id="title-${product.id}">${product.name}</h3>
          <p class="product-description">${product.description}</p>

          <div class="product-card-footer">
            <div class="price-container">
              <span class="price-label">Price</span>
              <span class="product-price">${formatPrice(product.price)}</span>
            </div>

            <div class="card-action-btns">
              <button 
                class="btn-quick-view" 
                onclick="openQuickView('${product.id}')"
                aria-label="Quick details for ${product.name}"
                title="Quick View">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>

              <button 
                class="btn-add-cart" 
                onclick="addToCart('${product.id}')"
                ${!canAddToCart ? "disabled" : ""}
                aria-label="${!canAddToCart ? 'Out of Stock' : `Add ${product.name} to basket`}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span>${!canAddToCart ? (isOutOfStock ? "Out of Stock" : "Max in Cart") : "Add"}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function updateCategoryCounts() {
  const counts = {
    all: appState.products.length,
    electronics: appState.products.filter(p => p.category.toLowerCase() === "electronics").length,
    clothing: appState.products.filter(p => p.category.toLowerCase() === "clothing").length,
    stationery: appState.products.filter(p => p.category.toLowerCase() === "stationery").length
  };

  document.querySelectorAll("[data-category-count]").forEach(badge => {
    const cat = badge.dataset.categoryCount;
    if (counts[cat] !== undefined) {
      badge.textContent = counts[cat];
    }
  });
}

function setCategory(categoryName) {
  appState.activeCategory = categoryName;
  document.querySelectorAll(".category-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === categoryName);
  });
  renderProducts();
  announceForScreenReader(`Filter applied: ${categoryName} category selected`);
}

function resetFilters() {
  appState.activeCategory = "all";
  appState.searchQuery = "";
  appState.sortBy = "featured";
  appState.onlyInStock = false;
  
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "featured";
  const inStockCheck = document.getElementById("inStockOnly");
  if (inStockCheck) inStockCheck.checked = false;

  setCategory("all");
}

// ==========================================================================
// 5. SHOPPING BASKET / CART OPERATIONS (LOCALSTORAGE)
// ==========================================================================

function addToCart(productId, quantityToAdd = 1) {
  const product = appState.products.find(p => p.id === productId);
  if (!product) return;

  const existingItemIndex = appState.cart.findIndex(item => item.productId === productId);
  const currentInCart = existingItemIndex > -1 ? appState.cart[existingItemIndex].quantity : 0;

  if (currentInCart + quantityToAdd > product.stock) {
    showToast(`Sorry, only ${product.stock} units available in stock.`, "danger");
    announceForScreenReader(`Cannot add more. Only ${product.stock} available in stock.`);
    return;
  }

  if (existingItemIndex > -1) {
    appState.cart[existingItemIndex].quantity += quantityToAdd;
  } else {
    appState.cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      quantity: quantityToAdd
    });
  }

  saveCartToStorage();
  updateCartUI();
  renderProducts(); // Update card button states (Max in Cart / stock remaining)

  showToast(`Added "${product.name}" to your basket!`, "success");
  announceForScreenReader(`Added ${product.name} to your shopping basket. Basket count: ${getTotalCartCount()}`);
}

function updateCartQuantity(productId, newQty) {
  const product = appState.products.find(p => p.id === productId);
  const itemIndex = appState.cart.findIndex(item => item.productId === productId);
  if (itemIndex === -1 || !product) return;

  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }

  if (newQty > product.stock) {
    showToast(`Cannot increase beyond available stock (${product.stock}).`, "danger");
    return;
  }

  appState.cart[itemIndex].quantity = newQty;
  saveCartToStorage();
  updateCartUI();
  renderProducts();
}

function removeFromCart(productId) {
  const itemIndex = appState.cart.findIndex(item => item.productId === productId);
  if (itemIndex === -1) return;

  const removed = appState.cart[itemIndex];
  appState.lastRemovedItem = { ...removed };
  appState.cart.splice(itemIndex, 1);

  saveCartToStorage();
  updateCartUI();
  renderProducts();

  showToast(`Removed "${removed.name}"`, "info", true);
  announceForScreenReader(`Removed ${removed.name} from basket.`);
}

function undoLastRemoval() {
  if (!appState.lastRemovedItem) return;
  addToCart(appState.lastRemovedItem.productId, appState.lastRemovedItem.quantity);
  appState.lastRemovedItem = null;
  const toast = document.querySelector(".toast");
  if (toast) toast.remove();
}

function clearEntireCart() {
  if (appState.cart.length === 0) return;
  if (confirm("Are you sure you want to remove all items from your basket?")) {
    appState.cart = [];
    saveCartToStorage();
    updateCartUI();
    renderProducts();
    showToast("Shopping basket cleared.", "info");
    announceForScreenReader("Shopping basket cleared.");
  }
}

function getTotalCartCount() {
  return appState.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function calculateCartTotals() {
  const subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 15000 || subtotal === 0 ? 0 : 650;
  const tax = subtotal * 0.025; // 2.5% mock sales tax
  const total = subtotal + shipping + tax;

  return { subtotal, shipping, tax, total };
}

function updateCartUI() {
  const badge = document.getElementById("cartBadge");
  const count = getTotalCartCount();
  if (badge) {
    badge.textContent = count;
    badge.setAttribute("aria-label", `${count} items in shopping basket`);
  }

  const itemsList = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotal");
  const shippingEl = document.getElementById("cartShipping");
  const taxEl = document.getElementById("cartTax");
  const totalEl = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("btnProceedCheckout");

  const totals = calculateCartTotals();

  if (subtotalEl) subtotalEl.textContent = formatPrice(totals.subtotal);
  if (shippingEl) shippingEl.textContent = totals.shipping === 0 ? "FREE" : formatPrice(totals.shipping);
  if (taxEl) taxEl.textContent = formatPrice(totals.tax);
  if (totalEl) totalEl.textContent = formatPrice(totals.total);

  if (checkoutBtn) {
    checkoutBtn.disabled = appState.cart.length === 0;
  }

  if (!itemsList) return;

  if (appState.cart.length === 0) {
    itemsList.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-tertiary);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 1rem;">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">Your basket is empty</p>
        <p style="font-size: 0.85rem;">Discover our 10 curated products and add your favorites!</p>
      </div>
    `;
    return;
  }

  itemsList.innerHTML = appState.cart.map(item => {
    const prod = appState.products.find(p => p.id === item.productId);
    const maxStock = prod ? prod.stock : 99;

    return `
      <div class="cart-item">
        <div class="cart-item-img">
          ${prod && prod.image 
            ? `<img src="${encodeURI(prod.image)}" alt="${prod.name}" />` 
            : (prod ? prod.svgIcon : "")}
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title" title="${item.name}">${item.name}</div>
          <div class="cart-item-price">${formatPrice(item.price)} each &bull; <strong>${formatPrice(item.price * item.quantity)}</strong></div>
          <div class="cart-qty-controls">
            <button 
              class="qty-btn" 
              onclick="updateCartQuantity('${item.productId}', ${item.quantity - 1})"
              aria-label="Decrease quantity of ${item.name}">-</button>
            <span class="qty-number" aria-label="Quantity ${item.quantity}">${item.quantity}</span>
            <button 
              class="qty-btn" 
              onclick="updateCartQuantity('${item.productId}', ${item.quantity + 1})"
              ${item.quantity >= maxStock ? "disabled" : ""}
              aria-label="Increase quantity of ${item.name}">+</button>
          </div>
        </div>
        <button 
          class="btn-remove-item" 
          onclick="removeFromCart('${item.productId}')"
          title="Remove item" 
          aria-label="Remove ${item.name} from basket">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;
  }).join("");
}

// Drawer visibility toggle
function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  if (drawer && backdrop) {
    drawer.classList.add("active");
    backdrop.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
    document.getElementById("btnCloseCart").focus();
    announceForScreenReader("Shopping basket opened");
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
  }
}

// ==========================================================================
// 6. QUICK VIEW MODAL & TEXT-TO-SPEECH (UNIVERSAL DESIGN)
// ==========================================================================

let quickViewActiveProductId = null;
let quickViewCurrentQty = 1;
let quickViewIsSpeaking = false;

function openQuickView(productId) {
  const product = appState.products.find(p => p.id === productId);
  if (!product) return;

  quickViewActiveProductId = productId;
  quickViewCurrentQty = 1;
  stopQuickViewSpeech();

  const modalOverlay = document.getElementById("quickViewModal");
  const modalBody = document.getElementById("quickViewContent");
  if (!modalOverlay || !modalBody) return;

  const isOutOfStock = product.stock <= 0;
  const isLowStock = product.stock > 0 && product.stock <= 7;
  const stockClass = isOutOfStock ? "out-of-stock" : isLowStock ? "low-stock" : "in-stock";
  const stockLabel = isOutOfStock 
    ? "Out of Stock" 
    : isLowStock 
      ? `Only ${product.stock} Left in Stock` 
      : `In Stock (${product.stock} available)`;

  // Round rating for star visuals
  const starCount = Math.round(product.rating || 5);
  const starsString = "★".repeat(starCount) + "☆".repeat(5 - starCount);

  modalBody.innerHTML = `
    <div class="quick-view-grid">
      <!-- Left Column: Visual Showcase -->
      <div class="quick-view-visual">
        <div class="quick-view-top-badges">
          <span class="category-tag">${product.category}</span>
          ${product.badge ? `<span class="badge-highlight">${product.badge}</span>` : ""}
        </div>

        ${product.image 
          ? `<img src="${encodeURI(product.image)}" alt="${product.name}" class="quick-view-img" />` 
          : (product.svgIcon || "")}

        <span class="quick-view-visual-hint">Studio Quality • Genuine Product</span>
      </div>

      <!-- Right Column: Product Intelligence & Purchase -->
      <div class="quick-view-details">
        <div class="quick-view-status-row">
          <span class="stock-tag ${stockClass}" style="position: static; pointer-events: auto;">${stockLabel}</span>
          <span class="quick-view-trust-tag">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Official Warranty
          </span>
        </div>

        <h2 class="quick-view-product-title">${product.name}</h2>

        <div class="quick-view-rating-row" aria-label="Rated ${product.rating} out of 5 stars from ${product.reviewsCount} verified reviews">
          <span class="rating-stars" aria-hidden="true">${starsString}</span>
          <span class="rating-score">${product.rating.toFixed(1)}</span>
          <span class="rating-separator">•</span>
          <span class="rating-count">${product.reviewsCount} verified ratings</span>
        </div>

        <div class="quick-view-price-box">
          <div class="quick-view-price" id="quickViewPrice">${formatPrice(product.price)}</div>
          <span class="quick-view-shipping-badge">✓ Free Islandwide Delivery</span>
        </div>

        <!-- Accessible Audio Narration Button -->
        <button 
          id="quickViewSpeechBtn"
          class="speech-assist-btn" 
          onclick="toggleQuickViewSpeech()"
          title="Listen to product description and specifications"
          aria-label="Listen to audio description">
          <svg class="speech-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <span id="quickViewSpeechLabel">Listen to Description</span>
        </button>

        <p class="quick-view-desc">${product.description}</p>

        <!-- Key Specifications Box -->
        <div class="quick-view-specs-section">
          <h4 class="quick-view-specs-title">Key Specifications</h4>
          <ul class="specs-list">
            ${product.specs.map(spec => `
              <li>
                <span class="spec-check-icon" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>${spec}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Quantity & Add to Cart Action -->
        <div class="quick-view-actions-wrap">
          <div class="quick-view-qty-group">
            <div class="qty-stepper" role="group" aria-label="Product quantity">
              <button 
                type="button" 
                class="btn-qty" 
                onclick="changeQuickViewQty(-1)" 
                aria-label="Decrease quantity" 
                id="btnQuickViewQtyDec" 
                disabled>−</button>
              <span class="qty-value" id="quickViewQtyVal" aria-live="polite">1</span>
              <button 
                type="button" 
                class="btn-qty" 
                onclick="changeQuickViewQty(1)" 
                aria-label="Increase quantity" 
                id="btnQuickViewQtyInc" 
                ${isOutOfStock || product.stock <= 1 ? "disabled" : ""}>+</button>
            </div>
          </div>

          <button 
            id="quickViewAddBtn"
            class="btn-primary quick-view-add-btn" 
            onclick="handleQuickViewAddToCart('${product.id}')"
            ${isOutOfStock ? "disabled" : ""}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span id="quickViewAddBtnText">${isOutOfStock ? "Out of Stock" : `Add to Basket • ${formatPrice(product.price)}`}</span>
          </button>
        </div>

        <!-- E-Commerce Guarantees -->
        <div class="quick-view-guarantees">
          <div class="guarantee-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            <span>Islandwide Delivery</span>
          </div>
          <div class="guarantee-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <span>1-Year Warranty</span>
          </div>
          <div class="guarantee-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
            <span>7-Day Return</span>
          </div>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add("active");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.getElementById("btnCloseQuickView").focus();
}

function changeQuickViewQty(delta) {
  if (!quickViewActiveProductId) return;
  const product = appState.products.find(p => p.id === quickViewActiveProductId);
  if (!product) return;

  const maxStock = Math.max(1, product.stock);
  quickViewCurrentQty = Math.max(1, Math.min(maxStock, quickViewCurrentQty + delta));

  const valEl = document.getElementById("quickViewQtyVal");
  if (valEl) valEl.textContent = quickViewCurrentQty;

  const decBtn = document.getElementById("btnQuickViewQtyDec");
  const incBtn = document.getElementById("btnQuickViewQtyInc");
  if (decBtn) decBtn.disabled = quickViewCurrentQty <= 1;
  if (incBtn) incBtn.disabled = quickViewCurrentQty >= maxStock;

  const btnText = document.getElementById("quickViewAddBtnText");
  if (btnText) {
    btnText.textContent = `Add to Basket • ${formatPrice(product.price * quickViewCurrentQty)}`;
  }
}

function handleQuickViewAddToCart(productId) {
  addToCart(productId, quickViewCurrentQty);
  closeQuickView();
}

function toggleQuickViewSpeech() {
  if (quickViewIsSpeaking) {
    stopQuickViewSpeech();
    return;
  }

  if (!('speechSynthesis' in window)) {
    showToast("Text-to-speech is not supported on this browser.", "info");
    return;
  }

  const product = appState.products.find(p => p.id === quickViewActiveProductId);
  if (!product) return;

  window.speechSynthesis.cancel();

  const narration = `${product.name}. Category: ${product.category}. Price: ${formatPrice(product.price)}. In stock: ${product.stock} units. Description: ${product.description}. Key features include: ${product.specs.join(", ")}.`;

  const utterance = new SpeechSynthesisUtterance(narration);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  const btn = document.getElementById("quickViewSpeechBtn");
  const label = document.getElementById("quickViewSpeechLabel");

  if (btn) btn.classList.add("speaking");
  if (label) label.textContent = "Audio Playing... (Click to Stop)";
  quickViewIsSpeaking = true;

  utterance.onend = () => {
    stopQuickViewSpeech();
  };

  utterance.onerror = () => {
    stopQuickViewSpeech();
  };

  window.speechSynthesis.speak(utterance);
}

function stopQuickViewSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  quickViewIsSpeaking = false;
  const btn = document.getElementById("quickViewSpeechBtn");
  const label = document.getElementById("quickViewSpeechLabel");
  if (btn) btn.classList.remove("speaking");
  if (label) label.textContent = "Listen to Description";
}

function closeQuickView() {
  stopQuickViewSpeech();
  const modalOverlay = document.getElementById("quickViewModal");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
  }
}

// ==========================================================================
// 7. MOCK CHECKOUT & PAYMENT WIZARD (UNIVERSAL DESIGN)
// ==========================================================================

let checkoutStep = 1;
let checkoutFormData = {
  fullName: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
  cardNumber: "",
  cardExpiry: "",
  cardCvv: ""
};

function openCheckoutModal() {
  if (appState.cart.length === 0) {
    showToast("Your basket is empty. Please add items to checkout.", "warning");
    return;
  }

  closeCartDrawer();
  checkoutStep = 1;
  const modal = document.getElementById("checkoutModal");
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    renderCheckoutStep();
    announceForScreenReader("Checkout wizard opened. Step 1: Shipping and Contact Details.");
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
}

function renderCheckoutStep() {
  // Update step indicators
  document.querySelectorAll(".step-indicator").forEach(el => {
    const stepNum = parseInt(el.dataset.step, 10);
    el.classList.toggle("active", stepNum === checkoutStep);
    el.classList.toggle("completed", stepNum < checkoutStep);
  });

  const stepContainer = document.getElementById("checkoutStepContainer");
  const totals = calculateCartTotals();

  if (checkoutStep === 1) {
    stepContainer.innerHTML = `
      <form id="shippingForm" onsubmit="handleShippingSubmit(event)" novalidate>
        <h3 style="margin-bottom: 1rem; font-weight: 700;">Step 1: Contact & Shipping Information</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.9rem;">
          Please enter your delivery and contact details to proceed with checkout.
        </p>

        <div class="form-grid">
          <div class="form-group" id="group-fullName">
            <label for="inputFullName">Full Name *</label>
            <input type="text" id="inputFullName" class="form-input" required value="${checkoutFormData.fullName || 'Alex Morgan'}" placeholder="e.g. Alex Morgan" />
            <span class="error-message">Please provide a valid full name.</span>
          </div>

          <div class="form-group" id="group-email">
            <label for="inputEmail">Email Address *</label>
            <input type="email" id="inputEmail" class="form-input" required value="${checkoutFormData.email || 'alex.morgan@example.com'}" placeholder="e.g. name@example.com" />
            <span class="error-message">Please enter a valid email address.</span>
          </div>

          <div class="form-group" id="group-address">
            <label for="inputAddress">Delivery Street Address *</label>
            <input type="text" id="inputAddress" class="form-input" required value="${checkoutFormData.address || 'Millennium Drive, IT Park'}" placeholder="Street and house number" />
            <span class="error-message">Street address is required.</span>
          </div>

          <div class="form-grid two-cols">
            <div class="form-group" id="group-city">
              <label for="inputCity">City / Suburb *</label>
              <input type="text" id="inputCity" class="form-input" required value="${checkoutFormData.city || 'Colombo'}" placeholder="City" />
              <span class="error-message">City is required.</span>
            </div>

            <div class="form-group" id="group-postal">
              <label for="inputPostal">Postal Code *</label>
              <input type="text" id="inputPostal" class="form-input" required value="${checkoutFormData.postalCode || '10115'}" placeholder="e.g. 10115" />
              <span class="error-message">Postal code is required.</span>
            </div>
          </div>
        </div>

        <div class="checkout-step-footer">
          <button type="button" class="btn-secondary" onclick="closeCheckoutModal()">Cancel</button>
          <button type="submit" class="btn-primary">Continue to Payment &rarr;</button>
        </div>
      </form>
    `;
  } else if (checkoutStep === 2) {
    stepContainer.innerHTML = `
      <form id="paymentForm" onsubmit="handlePaymentSubmit(event)" novalidate>
        <h3 style="margin-bottom: 0.5rem; font-weight: 700;">Step 2: Mock Payment Authorization</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.25rem; font-size: 0.88rem;">
          This is a simulated sandbox checkout. Use our instant preset card or enter test digits.
        </p>

        <div class="card-presets-bar">
          <span>Quick Autofill Test Card:</span>
          <button type="button" class="btn-preset-card" onclick="autofillTestCard('4242 4242 4242 4242', '12/28', '888')">Visa Test</button>
          <button type="button" class="btn-preset-card" onclick="autofillTestCard('5555 5555 5555 4444', '08/29', '321')">Mastercard Test</button>
        </div>

        <!-- Live Mock Card Preview -->
        <div class="mock-card-preview" aria-hidden="true">
          <div class="card-preview-chip"></div>
          <div class="card-preview-number" id="previewCardNumber">•••• •••• •••• ••••</div>
          <div class="card-preview-meta">
            <div>
              <div style="font-size: 0.65rem; opacity: 0.7;">Cardholder</div>
              <div id="previewCardName">${checkoutFormData.fullName || 'ALEX MORGAN'}</div>
            </div>
            <div>
              <div style="font-size: 0.65rem; opacity: 0.7;">Expires</div>
              <div id="previewCardExpiry">MM/YY</div>
            </div>
          </div>
        </div>

        <div class="form-grid">
          <div class="form-group" id="group-cardNumber">
            <label for="inputCardNumber">Card Number (16 Digits) *</label>
            <input 
              type="text" 
              id="inputCardNumber" 
              class="form-input" 
              maxlength="19" 
              placeholder="4242 4242 4242 4242" 
              value="${checkoutFormData.cardNumber || '4242 4242 4242 4242'}"
              oninput="formatCardNumberInput(this)"
              required />
            <span class="error-message">Enter a valid 16-digit card number.</span>
          </div>

          <div class="form-grid two-cols">
            <div class="form-group" id="group-cardExpiry">
              <label for="inputCardExpiry">Expiry Date (MM/YY) *</label>
              <input 
                type="text" 
                id="inputCardExpiry" 
                class="form-input" 
                maxlength="5" 
                placeholder="12/28" 
                value="${checkoutFormData.cardExpiry || '12/28'}"
                oninput="formatExpiryInput(this)"
                required />
              <span class="error-message">Use MM/YY format.</span>
            </div>

            <div class="form-group" id="group-cardCvv">
              <label for="inputCardCvv">Security CVV (3 Digits) *</label>
              <input 
                type="password" 
                id="inputCardCvv" 
                class="form-input" 
                maxlength="4" 
                placeholder="888" 
                value="${checkoutFormData.cardCvv || '888'}"
                required />
              <span class="error-message">Enter 3 or 4 digits.</span>
            </div>
          </div>
        </div>

        <div style="margin-top: 1.25rem; padding: 12px; background: var(--bg-secondary); border-radius: var(--radius-sm); font-size: 0.9rem; display: flex; justify-content: space-between;">
          <span>Total Authorized Amount:</span>
          <strong style="color: var(--accent-primary); font-size: 1.1rem;">${formatPrice(totals.total)}</strong>
        </div>

        <div class="checkout-step-footer">
          <button type="button" class="btn-secondary" onclick="setCheckoutStep(1)">&larr; Back to Shipping</button>
          <button type="submit" class="btn-primary">Review & Confirm Order &rarr;</button>
        </div>
      </form>
    `;

    updateLiveCardPreview();
  } else if (checkoutStep === 3) {
    stepContainer.innerHTML = `
      <div id="reviewStep">
        <h3 style="margin-bottom: 0.5rem; font-weight: 700;">Step 3: Review & Authorize Order</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.25rem; font-size: 0.88rem;">
          Please review your items and details before completing this mock transaction.
        </p>

        <div class="order-receipt-box">
          <div class="receipt-header">
            <span>Item</span>
            <span>Subtotal</span>
          </div>
          <ul class="receipt-items-list">
            ${appState.cart.map(item => `
              <li class="receipt-item-row">
                <span>${item.name} &times; ${item.quantity}</span>
                <span>${formatPrice(item.price * item.quantity)}</span>
              </li>
            `).join("")}
          </ul>
          <div class="breakdown-row">
            <span>Delivery:</span>
            <span>${totals.shipping === 0 ? "FREE" : formatPrice(totals.shipping)}</span>
          </div>
          <div class="breakdown-row">
            <span>Taxes (2.5%):</span>
            <span>${formatPrice(totals.tax)}</span>
          </div>
          <div class="breakdown-row total-row">
            <span>Total Payable:</span>
            <span>${formatPrice(totals.total)}</span>
          </div>
        </div>

        <div style="background: var(--bg-secondary); padding: 12px; border-radius: var(--radius-sm); font-size: 0.85rem; margin-bottom: 1.25rem;">
          <div><strong>Recipient:</strong> ${checkoutFormData.fullName} (${checkoutFormData.email})</div>
          <div><strong>Destination:</strong> ${checkoutFormData.address}, ${checkoutFormData.city} ${checkoutFormData.postalCode}</div>
          <div><strong>Payment Card:</strong> •••• •••• •••• ${checkoutFormData.cardNumber.slice(-4) || '4242'}</div>
        </div>

        <div class="checkout-step-footer">
          <button type="button" class="btn-secondary" onclick="setCheckoutStep(2)">&larr; Edit Payment</button>
          <button type="button" class="btn-primary" id="btnExecuteOrder" onclick="processFinalMockPayment()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <line x1="2" y1="10" x2="22" y2="10"></line>
            </svg>
            <span>Complete Mock Order (${formatPrice(totals.total)})</span>
          </button>
        </div>
      </div>
    `;
  }
}

function setCheckoutStep(step) {
  checkoutStep = step;
  renderCheckoutStep();
  announceForScreenReader(`Moved to checkout step ${step}`);
}

function handleShippingSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("inputFullName").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const address = document.getElementById("inputAddress").value.trim();
  const city = document.getElementById("inputCity").value.trim();
  const postal = document.getElementById("inputPostal").value.trim();

  let hasError = false;

  const validate = (condition, groupId) => {
    const el = document.getElementById(groupId);
    if (!condition) {
      el.classList.add("has-error");
      hasError = true;
    } else {
      el.classList.remove("has-error");
    }
  };

  validate(name.length >= 2, "group-fullName");
  validate(email.includes("@") && email.includes("."), "group-email");
  validate(address.length >= 5, "group-address");
  validate(city.length >= 2, "group-city");
  validate(postal.length >= 2, "group-postal");

  if (hasError) {
    showToast("Please correct highlighted fields before continuing.", "danger");
    return;
  }

  checkoutFormData.fullName = name;
  checkoutFormData.email = email;
  checkoutFormData.address = address;
  checkoutFormData.city = city;
  checkoutFormData.postalCode = postal;

  setCheckoutStep(2);
}

function handlePaymentSubmit(e) {
  e.preventDefault();
  const cardNum = document.getElementById("inputCardNumber").value.replace(/\s+/g, "");
  const expiry = document.getElementById("inputCardExpiry").value.trim();
  const cvv = document.getElementById("inputCardCvv").value.trim();

  let hasError = false;

  const validate = (condition, groupId) => {
    const el = document.getElementById(groupId);
    if (!condition) {
      el.classList.add("has-error");
      hasError = true;
    } else {
      el.classList.remove("has-error");
    }
  };

  validate(cardNum.length >= 15, "group-cardNumber");
  validate(/^\d{2}\/\d{2}$/.test(expiry), "group-cardExpiry");
  validate(cvv.length >= 3, "group-cardCvv");

  if (hasError) {
    showToast("Please enter valid mock payment details.", "danger");
    return;
  }

  checkoutFormData.cardNumber = document.getElementById("inputCardNumber").value;
  checkoutFormData.cardExpiry = expiry;
  checkoutFormData.cardCvv = cvv;

  setCheckoutStep(3);
}

function autofillTestCard(num, exp, cvv) {
  const cardInput = document.getElementById("inputCardNumber");
  const expInput = document.getElementById("inputCardExpiry");
  const cvvInput = document.getElementById("inputCardCvv");

  if (cardInput) cardInput.value = num;
  if (expInput) expInput.value = exp;
  if (cvvInput) cvvInput.value = cvv;

  updateLiveCardPreview();
  showToast("Applied mock test card credentials!", "info");
}

function formatCardNumberInput(input) {
  let val = input.value.replace(/\D/g, "").substring(0, 16);
  let formatted = val.match(/.{1,4}/g)?.join(" ") || val;
  input.value = formatted;
  updateLiveCardPreview();
}

function formatExpiryInput(input) {
  let val = input.value.replace(/\D/g, "").substring(0, 4);
  if (val.length >= 3) {
    input.value = val.substring(0, 2) + "/" + val.substring(2);
  } else {
    input.value = val;
  }
  updateLiveCardPreview();
}

function updateLiveCardPreview() {
  const cardEl = document.getElementById("previewCardNumber");
  const cardInput = document.getElementById("inputCardNumber");
  if (cardEl && cardInput) {
    cardEl.textContent = cardInput.value.trim() || "•••• •••• •••• ••••";
  }

  const expEl = document.getElementById("previewCardExpiry");
  const expInput = document.getElementById("inputCardExpiry");
  if (expEl && expInput) {
    expEl.textContent = expInput.value.trim() || "MM/YY";
  }
}

function processFinalMockPayment() {
  const btn = document.getElementById("btnExecuteOrder");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin">
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
      </svg>
      <span>Processing Mock Gateway...</span>
    `;
  }

  announceForScreenReader("Authorizing mock payment and decreasing inventory...");

  setTimeout(() => {
    // 1. Decrement Stock from Products in localStorage
    appState.cart.forEach(cartItem => {
      const prod = appState.products.find(p => p.id === cartItem.productId);
      if (prod) {
        prod.stock = Math.max(0, prod.stock - cartItem.quantity);
      }
    });
    saveProductsToStorage();

    // 2. Generate Receipt Record
    const orderId = `PB-${Math.floor(100000 + Math.random() * 900000)}`;
    const totals = calculateCartTotals();
    const newOrder = {
      orderId,
      date: new Date().toLocaleString(),
      customer: { ...checkoutFormData },
      items: [...appState.cart],
      totals: { ...totals }
    };

    appState.orders.unshift(newOrder);
    saveOrdersToStorage();

    // 3. Clear Cart
    appState.cart = [];
    saveCartToStorage();
    updateCartUI();
    renderProducts();

    // 4. Render Success Screen
    renderOrderSuccessScreen(newOrder);
  }, 1200);
}

function renderOrderSuccessScreen(order) {
  const stepContainer = document.getElementById("checkoutStepContainer");
  const modalHeader = document.querySelector("#checkoutModal .modal-title");
  if (modalHeader) modalHeader.textContent = "Order Placed Successfully!";

  // Mark all steps as complete
  document.querySelectorAll(".step-indicator").forEach(el => el.classList.add("completed"));

  stepContainer.innerHTML = `
    <div class="order-success-view">
      <div class="success-icon-badge">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>

      <h3 class="success-title">Thank You, ${order.customer.fullName}!</h3>
      <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 1.5rem;">
        Your mock order has been verified and recorded to browser localStorage.
      </p>

      <div class="order-receipt-box">
        <div class="receipt-header">
          <span>Order Confirmation ID:</span>
          <span style="color: var(--accent-primary); font-family: var(--font-mono);">${order.orderId}</span>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 10px;">
          Timestamp: ${order.date} &bull; Confirmation sent to: ${order.customer.email}
        </div>
        <ul class="receipt-items-list">
          ${order.items.map(item => `
            <li class="receipt-item-row">
              <span>${item.name} &times; ${item.quantity}</span>
              <span>${formatPrice(item.price * item.quantity)}</span>
            </li>
          `).join("")}
        </ul>
        <div class="breakdown-row total-row">
          <span>Total Mock Amount Paid:</span>
          <span>${formatPrice(order.totals.total)}</span>
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 12px; margin-top: 1.5rem;">
        <button class="btn-secondary" onclick="window.print()">Print Receipt</button>
        <button class="btn-primary" onclick="closeCheckoutModal()">Back to Storefront</button>
      </div>
    </div>
  `;

  showToast(`Mock Order ${order.orderId} successfully completed!`, "success");
  announceForScreenReader(`Order placed successfully. Confirmation number: ${order.orderId}`);
}

// ==========================================================================
// 8. ORDERS HISTORY MODAL (LOCALSTORAGE INSPECTION)
// ==========================================================================

function openOrdersHistoryModal() {
  const modal = document.getElementById("ordersModal");
  const listEl = document.getElementById("ordersListContent");
  if (!modal || !listEl) return;

  if (appState.orders.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-tertiary);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 1rem;">
          <rect x="2" y="3" width="20" height="14" rx="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
        <h4 style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">No Past Orders Recorded</h4>
        <p style="font-size: 0.85rem;">Complete a mock checkout to see your stored receipts here.</p>
      </div>
    `;
  } else {
    listEl.innerHTML = appState.orders.map(order => `
      <div class="order-receipt-box" style="margin-bottom: 1rem;">
        <div class="receipt-header">
          <span>Order ${order.orderId}</span>
          <span style="color: var(--accent-primary);">${formatPrice(order.totals.total)}</span>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-tertiary); margin-bottom: 8px;">
          ${order.date} &bull; ${order.customer.fullName}
        </div>
        <ul class="receipt-items-list">
          ${order.items.map(i => `
            <li class="receipt-item-row">
              <span>${i.name} &times; ${i.quantity}</span>
              <span>${formatPrice(i.price * i.quantity)}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    `).join("");
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeOrdersHistoryModal() {
  const modal = document.getElementById("ordersModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
}

// ==========================================================================
// 9. ACCESSIBILITY SHORTCUTS MODAL
// ==========================================================================

function openShortcutsModal() {
  const modal = document.getElementById("shortcutsModal");
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }
}

function closeShortcutsModal() {
  const modal = document.getElementById("shortcutsModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
}

// ==========================================================================
// 10. TOAST NOTIFICATIONS (TOLERANCE FOR ERROR & RECOVERY)
// ==========================================================================

function showToast(message, type = "info", showUndo = false) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");

  toast.innerHTML = `
    <div class="toast-content">${message}</div>
    ${showUndo ? `<button class="toast-action-btn" onclick="undoLastRemoval()">Undo</button>` : ""}
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 200ms ease-out";
    setTimeout(() => toast.remove(), 200);
  }, 4000);
}

// ==========================================================================
// 11. EVENT LISTENERS & INITIALIZATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Load LocalStorage State
  loadStateFromStorage();

  // 2. Render Products & Cart
  renderProducts();
  updateCartUI();

  // 3. Search Bar Listeners
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value;
      renderProducts();
    });
  }

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        appState.searchQuery = "";
        renderProducts();
        searchInput.focus();
      }
    });
  }

  // 4. Sort Dropdown Listener
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      appState.sortBy = e.target.value;
      renderProducts();
      announceForScreenReader(`Sorted by ${e.target.options[e.target.selectedIndex].text}`);
    });
  }

  // 5. In-Stock Filter
  const inStockCheck = document.getElementById("inStockOnly");
  if (inStockCheck) {
    inStockCheck.addEventListener("change", (e) => {
      appState.onlyInStock = e.target.checked;
      renderProducts();
      announceForScreenReader(e.target.checked ? "Filtering to only in-stock items" : "Showing all items");
    });
  }

  // 6. View Mode Toggles (Grid / List)
  const btnGridView = document.getElementById("btnGridView");
  const btnListView = document.getElementById("btnListView");

  if (btnGridView && btnListView) {
    btnGridView.addEventListener("click", () => {
      appState.viewMode = "grid";
      btnGridView.classList.add("active");
      btnListView.classList.remove("active");
      renderProducts();
    });

    btnListView.addEventListener("click", () => {
      appState.viewMode = "list";
      btnListView.classList.add("active");
      btnGridView.classList.remove("active");
      renderProducts();
    });
  }

  // 7. Global Keyboard Navigation (Universal Design Principle 1 & 6)
  document.addEventListener("keydown", (e) => {
    // If typing in an input field, do not trigger single-key hotkeys
    const isEditing = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName);

    if (e.key === "Escape") {
      closeCartDrawer();
      closeA11yPanel();
      closeQuickView();
      closeCheckoutModal();
      closeOrdersHistoryModal();
      closeShortcutsModal();
    }

    if (!isEditing) {
      if (e.key === "/") {
        e.preventDefault();
        searchInput?.focus();
      } else if (e.key === "a" || e.key === "A") {
        e.preventDefault();
        toggleA11yPanel();
      } else if (e.key === "c" || e.key === "C") {
        e.preventDefault();
        openCartDrawer();
      } else if (e.key === "h" || e.key === "H") {
        e.preventDefault();
        setCategory("all");
      } else if (e.key === "t" || e.key === "T") {
        e.preventDefault();
        toggleTheme();
      } else if (e.key === "k" || e.key === "K") {
        e.preventDefault();
        toggleHighContrast();
      } else if (e.key === "?") {
        e.preventDefault();
        openShortcutsModal();
      }
    }
  });
});
