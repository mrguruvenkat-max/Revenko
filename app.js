// REVENKO E-commerce Core Logic & State Management

// 1. Products Database (Seller's Personal Products)
const PRODUCTS = [
  {
    id: "travel-backpack",
    name: "Adventure-Ready Backpack",
    category: "home-used",
    price: 899.00,
    image: "assets/Backpack.avif",
    desc: "A sturdy, multi-compartment travel and daily backpack. Features heavy-duty zippers, water-resistant material, and comfortable padded shoulder straps. Fits up to a 15-inch laptop easily.",
    specs: {
      chassis: "Water-resistant Polyester fabric",
      layout: "30L capacity with 3 major compartments",
      switches: "YKK heavy-duty zippers",
      connection: "Padded mesh shoulder straps"
    },
    thumbnails: [
      "assets/Backpack.avif"
    ],
    newArrival: true
  },
  {
    id: "bluetooth-speaker",
    name: "BassBoost Portable Bluetooth Speaker",
    category: "crazy-things",
    price: 1299.00,
    image: "assets/Bluetooth Speaker.avif",
    desc: "Crisp audio quality and deep bass in a compact, travel-friendly package. IPX6 water-resistant, up to 10 hours of continuous playtime on a single charge.",
    specs: {
      chassis: "Rugged fabric and rubberized shell",
      layout: "Compact cylindrical design",
      switches: "Tactile side controls",
      connection: "Bluetooth 5.0 and AUX input support"
    },
    thumbnails: [
      "assets/Bluetooth Speaker.avif"
    ]
  },
  {
    id: "ceramic-coffee-mug",
    name: "Cozy Glazed Ceramic Coffee Mug",
    category: "home-used",
    price: 149.00,
    image: "assets/Coffee Mug.avif",
    desc: "An ergonomic ceramic mug with a warm, minimalist glaze finish. Keeps your morning tea, coffee, or hot chocolate cozy and warm.",
    specs: {
      chassis: "Stoneware Ceramic clay construction",
      layout: "350ml standard mug cup volume",
      switches: "Dishwasher and microwave safe",
      connection: "Wide-grip C-shaped handle"
    },
    thumbnails: [
      "assets/Coffee Mug.avif"
    ],
    newArrival: true
  },
  {
    id: "smart-led-bulb",
    name: "Energy-Saving Smart LED Bulb",
    category: "home-used",
    price: 199.00,
    image: "assets/LED Bulb.avif",
    desc: "Bright 9W LED bulb. Extremely energy efficient, offering a very long lifespan and a crisp, flicker-free cool white light output.",
    specs: {
      chassis: "Polycarbonate and aluminum housing",
      layout: "Standard B22 base fitting pin structure",
      switches: "Instant-on flicker-free light source",
      connection: "220-240V standard input support"
    },
    thumbnails: [
      "assets/LED Bulb.avif"
    ]
  },
  {
    id: "insulated-lunchbox",
    name: "Insulated Leakproof Lunch Box",
    category: "home-used",
    price: 299.00,
    image: "assets/Lunch Box.avif",
    desc: "Multi-layered insulated lunch box to keep your home-cooked meals fresh and warm for hours. Features leakproof locking mechanism.",
    specs: {
      chassis: "BPA-free outer shell & food-grade steel",
      layout: "3 separate compartment trays",
      switches: "Secure lock-clip clamp mechanism",
      connection: "Leakproof silicone sealing rings"
    },
    thumbnails: [
      "assets/Lunch Box.avif"
    ]
  },
  {
    id: "aluminum-mobile-stand",
    name: "Adjustable Aluminum Mobile Stand",
    category: "home-used",
    price: 249.00,
    image: "assets/Mobile Stand.avif",
    desc: "Sturdy aluminum desktop holder for smartphones and tablets. Multi-angle adjustable with anti-slip rubber pads for stability.",
    specs: {
      chassis: "Premium aerospace aluminum alloy body",
      layout: "Universal fit (up to 10-inch screens)",
      switches: "Dual-hinge multi-angle adjustment",
      connection: "Convenient charging cable routing slot"
    },
    thumbnails: [
      "assets/Mobile Stand.avif"
    ]
  },
  {
    id: "classic-notebook",
    name: "Classic Kraft Cover Notebook",
    category: "crazy-things",
    price: 120.00,
    image: "assets/Notebook.avif",
    desc: "A minimalist notebook featuring thick, cream-colored ruled pages. Ideal for journaling, sketching, or recording daily thoughts.",
    specs: {
      chassis: "Thick recyclable Kraft paper cover",
      layout: "A5 size dimensions, 160 pages",
      switches: "Lay-flat thread binding structure",
      connection: "Acid-free paper prevents ink bleed"
    },
    thumbnails: [
      "assets/Notebook.avif"
    ]
  },
  {
    id: "plastic-storage-box",
    name: "Sturdy Plastic Storage Organizer",
    category: "delivery-boxes",
    price: 349.00,
    image: "assets/Plastic Storage Box.avif",
    desc: "Clear heavy-duty plastic storage box with latching lid. Perfect for organizing closet spaces, bookshelves, or tools.",
    specs: {
      chassis: "BPA-free transparent polypropylene",
      layout: "15L storage capacity volume",
      switches: "Secure dual-latch locking lid clamps",
      connection: "Stackable modular structural base"
    },
    thumbnails: [
      "assets/Plastic Storage Box.avif"
    ]
  },
  {
    id: "windproof-umbrella",
    name: "Windproof Compact Travel Umbrella",
    category: "home-used",
    price: 399.00,
    image: "assets/Umbrella.avif",
    desc: "Compact auto-open/close travel umbrella. Designed with windproof reinforced fiberglass ribs and water-repellent coating.",
    specs: {
      chassis: "Reinforced fiberglass and steel frame",
      layout: "Folds to 11 inches for easy packing",
      switches: "One-button automatic open/close trigger",
      connection: "Ergonomic non-slip rubber handle strap"
    },
    thumbnails: [
      "assets/Umbrella.avif"
    ]
  },
  {
    id: "steel-water-bottle",
    name: "Vacuum Insulated Steel Water Bottle",
    category: "home-used",
    price: 499.00,
    image: "assets/Water Bottle.avif",
    desc: "Double-walled vacuum insulated water bottle. Keeps beverages cold for up to 24 hours or hot for 12 hours. Sweat-free exterior finish.",
    specs: {
      chassis: "18/8 food-grade stainless steel body",
      layout: "750ml leakproof flask volume",
      switches: "Wide mouth design for ice cubes",
      connection: "Leak-free lid carry loop handle"
    },
    thumbnails: [
      "assets/Water Bottle.avif"
    ],
    newArrival: true
  },
  {
    id: "classic-analog-watch",
    name: "Minimalist Classic Analog Watch",
    category: "crazy-things",
    price: 1499.00,
    image: "assets/watch.avif",
    desc: "A classic analog wrist watch with a sleek black dial and genuine leather strap. Fits both formal and casual settings beautifully.",
    specs: {
      chassis: "Stainless steel back, zinc alloy casing",
      layout: "40mm case size, 20mm strap width",
      switches: "Japanese quartz movement timing",
      connection: "Water resistant up to 3ATM (splash proof)"
    },
    thumbnails: [
      "assets/watch.avif"
    ]
  }
];

// 2. App State Store
let state = {
  cart: [],
  currentPromo: null,
  activeFilter: "all",
  currentQuickViewProduct: null,
  quickViewQuantity: 1
};

// Available Promo Codes (STUDENT25 unlocked dynamically)
const PROMOS = {
  "WELCOME10": { code: "WELCOME10", type: "percent", value: 0.10 },
  "REVENKO20": { code: "REVENKO20", type: "percent", value: 0.20 }
};

// 3. Document Elements
const el = {
  header: document.getElementById("main-header"),
  themeToggle: document.getElementById("theme-toggle"),
  themeMoon: document.getElementById("theme-icon-moon"),
  themeSun: document.getElementById("theme-icon-sun"),
  cartToggle: document.getElementById("cart-toggle"),
  cartBadge: document.getElementById("cart-badge"),
  cartDrawer: document.getElementById("cart-drawer"),
  cartOverlay: document.getElementById("cart-drawer-overlay"),
  cartClose: document.getElementById("cart-close-btn"),
  cartItemsContainer: document.getElementById("cart-items-container"),
  cartSubtotal: document.getElementById("cart-subtotal"),
  cartDiscount: document.getElementById("cart-discount"),
  discountRow: document.getElementById("discount-row"),
  cartShipping: document.getElementById("cart-shipping"),
  cartTotal: document.getElementById("cart-total"),
  promoInput: document.getElementById("promo-code-input"),
  applyPromoBtn: document.getElementById("apply-promo-btn"),
  checkoutBtn: document.getElementById("checkout-btn"),

  // Product Grid
  productGrid: document.getElementById("product-grid-container"),
  categoryTabs: document.querySelectorAll(".category-tab"),

  newArrivalsGrid: document.getElementById("new-arrivals-container"),

  // Quick View Modal
  quickviewModal: document.getElementById("quickview-modal"),
  quickviewClose: document.getElementById("quickview-close-btn"),
  qvMainImg: document.getElementById("qv-main-img"),
  qvThumbsContainer: document.getElementById("qv-thumbnails-container"),
  qvCategory: document.getElementById("qv-category"),
  qvName: document.getElementById("qv-name"),
  qvPrice: document.getElementById("qv-price"),
  qvDesc: document.getElementById("qv-desc"),
  qvSpecChassis: document.getElementById("qv-spec-chassis"),
  qvSpecLayout: document.getElementById("qv-spec-layout"),
  qvSpecSwitches: document.getElementById("qv-spec-switches"),
  qvSpecConn: document.getElementById("qv-spec-conn"),
  qvQtyMinus: document.getElementById("qv-qty-minus"),
  qvQtyPlus: document.getElementById("qv-qty-plus"),
  qvQtyVal: document.getElementById("qv-qty-val"),
  qvAddBtn: document.getElementById("qv-add-btn"),

  // Checkout Modal
  checkoutModal: document.getElementById("checkout-modal"),
  checkoutClose: document.getElementById("checkout-close-btn"),
  shippingForm: document.getElementById("shipping-form"),
  paymentForm: document.getElementById("payment-form"),
  paneShipping: document.getElementById("pane-shipping"),
  panePayment: document.getElementById("pane-payment"),
  paneReceipt: document.getElementById("pane-receipt"),
  stepShippingInd: document.getElementById("step-shipping-indicator"),
  stepPaymentInd: document.getElementById("step-payment-indicator"),
  stepReceiptInd: document.getElementById("step-receipt-indicator"),
  paymentBackBtn: document.getElementById("payment-back-btn"),
  receiptDoneBtn: document.getElementById("receipt-done-btn"),
  receiptOrderId: document.getElementById("receipt-order-id"),
  receiptDate: document.getElementById("receipt-date"),
  receiptItemsList: document.getElementById("receipt-items-list"),
  receiptGrandTotal: document.getElementById("receipt-grand-total"),

  // Credit Card Animation
  creditCard: document.getElementById("credit-card-view"),
  cardNumInput: document.getElementById("card-number-input"),
  cardHolderInput: document.getElementById("card-holder-input"),
  cardExpiryInput: document.getElementById("card-expiry-input"),
  cardCvvInput: document.getElementById("card-cvv-input"),
  cardNumPreview: document.getElementById("card-number-preview"),
  cardHolderPreview: document.getElementById("card-holder-preview"),
  cardExpiryPreview: document.getElementById("card-expiry-preview"),
  cardCvvPreview: document.getElementById("card-cvv-preview")
};

// 4. Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadCartFromStorage();
  renderProductGrid();
  renderNewArrivalsGrid();
  setupEventListeners();
  updateCartUI();
  setupNewArrivalsCarousel();
  initScrollReveal();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("revenko-theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    el.themeMoon.style.display = "none";
    el.themeSun.style.display = "block";
  } else {
    document.body.classList.remove("light-theme");
    el.themeMoon.style.display = "block";
    el.themeSun.style.display = "none";
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  localStorage.setItem("revenko-theme", isLight ? "light" : "dark");

  if (isLight) {
    el.themeMoon.style.display = "none";
    el.themeSun.style.display = "block";
  } else {
    el.themeMoon.style.display = "block";
    el.themeSun.style.display = "none";
  }
}

// Render E-commerce Product Grid
function renderProductGrid() {
  el.productGrid.innerHTML = "";

  const filteredProducts = state.activeFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === state.activeFilter);

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-id", product.id);

    card.innerHTML = `
      <div class="product-card-image" onclick="openQuickView('${product.id}')">
        <img src="${product.image}" alt="${product.name}">
        <button class="product-quickview-btn">Quick View</button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category.replace('-', ' ')}</span>
        <h3 class="product-name">${product.name}</h3>
      </div>
      <div class="product-footer">
        <span class="product-price">₹${product.price.toLocaleString("en-IN")}</span>
        <button class="product-add-btn" onclick="quickAdd('${product.id}', event)" aria-label="Add to Cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
    `;

    el.productGrid.appendChild(card);
  });
}

// 5. Cart Operations
function loadCartFromStorage() {
  const stored = localStorage.getItem("revenko-cart");
  if (stored) {
    try {
      state.cart = JSON.parse(stored);
    } catch (e) {
      state.cart = [];
    }
  }
}

function saveCartToStorage() {
  localStorage.setItem("revenko-cart", JSON.stringify(state.cart));
}

function quickAdd(productId, event) {
  if (event) event.stopPropagation();
  addToCart(productId, 1);

  // Animate shopping bag badge
  el.cartToggle.classList.add("pulse");
  setTimeout(() => el.cartToggle.classList.remove("pulse"), 500);

  // Automatically open cart drawer to verify addition
  openCartDrawer();
}

function addToCart(productId, quantity, specs = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(item =>
    item.product.id === productId && item.specs === specs
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      product,
      quantity,
      specs
    });
  }

  saveCartToStorage();
  updateCartUI();
}

function updateCartQuantity(productId, specs, newQuantity) {
  const idx = state.cart.findIndex(item =>
    item.product.id === productId && item.specs === specs
  );

  if (idx > -1) {
    if (newQuantity <= 0) {
      state.cart.splice(idx, 1);
    } else {
      state.cart[idx].quantity = newQuantity;
    }
    saveCartToStorage();
    updateCartUI();
  }
}

function removeFromCart(productId, specs) {
  state.cart = state.cart.filter(item =>
    !(item.product.id === productId && item.specs === specs)
  );
  saveCartToStorage();
  updateCartUI();
}

function updateCartUI() {
  // Update badge count
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  el.cartBadge.textContent = totalItems;
  el.cartBadge.style.display = totalItems > 0 ? "flex" : "none";

  // Render Cart items list
  el.cartItemsContainer.innerHTML = "";

  if (state.cart.length === 0) {
    el.cartItemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Your workspace is clean. Cart is empty.</p>
      </div>
    `;
  } else {
    state.cart.forEach(item => {
      const itemNode = document.createElement("div");
      itemNode.className = "cart-item";
      itemNode.innerHTML = `
        <div class="cart-item-image">
          <img src="${item.product.image}" alt="${item.product.name}">
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.product.name}</h4>
          ${item.specs ? `<span class="cart-item-meta">${item.specs}</span>` : ""}
          <div class="cart-item-price">₹${(item.product.price * item.quantity).toLocaleString("en-IN")}</div>
        </div>
        <div class="cart-item-controls">
          <div class="quantity-selector">
            <button class="quantity-btn" onclick="updateCartQuantity('${item.product.id}', ${item.specs ? `'${item.specs}'` : 'null'}, ${item.quantity - 1})">-</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateCartQuantity('${item.product.id}', ${item.specs ? `'${item.specs}'` : 'null'}, ${item.quantity + 1})">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.product.id}', ${item.specs ? `'${item.specs}'` : 'null'})" aria-label="Remove item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `;
      el.cartItemsContainer.appendChild(itemNode);
    });
  }

  // Calculate Totals in Rupees
  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  let discount = 0;

  if (state.currentPromo) {
    if (state.currentPromo.type === "percent") {
      discount = subtotal * state.currentPromo.value;
    }
  }

  const shippingThreshold = 1500;
  const shippingCost = (subtotal === 0 || subtotal - discount >= shippingThreshold) ? 0 : 150;
  const total = subtotal - discount + shippingCost;

  el.cartSubtotal.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  el.cartShipping.textContent = shippingCost === 0 ? "FREE" : `₹${shippingCost.toLocaleString("en-IN")}`;
  el.cartTotal.textContent = `₹${total.toLocaleString("en-IN")}`;

  if (discount > 0) {
    el.discountRow.style.display = "flex";
    el.cartDiscount.textContent = `-₹${discount.toLocaleString("en-IN")}`;
  } else {
    el.discountRow.style.display = "none";
  }
}

// Drawer Visibility
function openCartDrawer() {
  el.cartDrawer.classList.add("active");
  el.cartOverlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable scroll
}

function closeCartDrawer() {
  el.cartDrawer.classList.remove("active");
  el.cartOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Promo Code Apply
function handleApplyPromo() {
  const rawCode = el.promoInput.value.trim().toUpperCase();
  if (PROMOS[rawCode]) {
    state.currentPromo = PROMOS[rawCode];
    el.promoInput.value = "";
    updateCartUI();
    alert(`Success: Promo code "${rawCode}" applied successfully!`);
  } else {
    alert("Error: Invalid promo code. Try 'WELCOME10', 'REVENKO20', or student code.");
  }
}

// 6. New Arrivals Showcase Renderer & Scroll Controller
function renderNewArrivalsGrid() {
  if (!el.newArrivalsGrid) return;
  el.newArrivalsGrid.innerHTML = "";

  const arrivals = PRODUCTS.filter(p => p.newArrival === true);

  arrivals.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-id", product.id);

    card.innerHTML = `
      <div class="product-card-image" onclick="openQuickView('${product.id}')">
        <span class="product-badge" style="background: linear-gradient(135deg, #10b981, #059669); color: #fff;">NEW</span>
        <img src="${product.image}" alt="${product.name}">
        <button class="product-quickview-btn">Quick View</button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category.replace('-', ' ')}</span>
        <h3 class="product-name">${product.name}</h3>
      </div>
      <div class="product-footer">
        <span class="product-price">₹${product.price.toLocaleString("en-IN")}</span>
        <button class="product-add-btn" onclick="quickAdd('${product.id}', event)" aria-label="Add to Cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
    `;

    el.newArrivalsGrid.appendChild(card);
  });
}

function setupNewArrivalsCarousel() {
  const prevBtn = document.getElementById("new-arr-prev");
  const nextBtn = document.getElementById("new-arr-next");
  const grid = el.newArrivalsGrid;

  if (prevBtn && nextBtn && grid) {
    prevBtn.addEventListener("click", () => {
      grid.scrollBy({ left: -320, behavior: "smooth" });
    });
    nextBtn.addEventListener("click", () => {
      grid.scrollBy({ left: 320, behavior: "smooth" });
    });
  }
}

// 7. Product Quick View Modal Logic
window.openQuickView = function (productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.currentQuickViewProduct = product;
  state.quickViewQuantity = 1;

  // Populate details
  el.qvMainImg.src = product.image;
  el.qvCategory.textContent = product.category.replace('-', ' ');
  el.qvName.textContent = product.name;
  el.qvPrice.textContent = `₹${product.price.toLocaleString("en-IN")}`;
  el.qvDesc.textContent = product.desc;

  // Specs
  el.qvSpecChassis.textContent = product.specs.chassis;
  el.qvSpecLayout.textContent = product.specs.layout;
  el.qvSpecSwitches.textContent = product.specs.switches;
  el.qvSpecConn.textContent = product.specs.connection;

  // Quantity counter
  el.qvQtyVal.textContent = state.quickViewQuantity;

  // Render Thumbnails
  el.qvThumbsContainer.innerHTML = "";
  product.thumbnails.forEach((thumbSrc, idx) => {
    const thumb = document.createElement("button");
    thumb.className = `quickview-thumb ${idx === 0 ? "active" : ""}`;
    thumb.innerHTML = `<img src="${thumbSrc}" alt="Thumbnail">`;
    thumb.onclick = () => {
      document.querySelectorAll(".quickview-thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      el.qvMainImg.src = thumbSrc;
    };
    el.qvThumbsContainer.appendChild(thumb);
  });

  el.quickviewModal.classList.add("active");
  document.body.style.overflow = "hidden";
};

function closeQuickView() {
  el.quickviewModal.classList.remove("active");
  if (!el.cartDrawer.classList.contains("active")) {
    document.body.style.overflow = "";
  }
}

function handleQvQuantityChange(delta) {
  state.quickViewQuantity = Math.max(1, state.quickViewQuantity + delta);
  el.qvQtyVal.textContent = state.quickViewQuantity;
}

function addQvProductToCart() {
  if (!state.currentQuickViewProduct) return;
  addToCart(state.currentQuickViewProduct.id, state.quickViewQuantity);
  closeQuickView();
  openCartDrawer();
}

// 8. Interactive Checkout Wizard
function openCheckout() {
  if (state.cart.length === 0) {
    alert("Your shopping cart is empty!");
    return;
  }
  closeCartDrawer();

  // Set up panels
  el.paneShipping.classList.add("active");
  el.panePayment.classList.remove("active");
  el.paneReceipt.classList.remove("active");

  el.stepShippingInd.className = "checkout-step active";
  el.stepPaymentInd.className = "checkout-step";
  el.stepReceiptInd.className = "checkout-step";

  // Show modal
  el.checkoutModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  el.checkoutModal.classList.remove("active");
  document.body.style.overflow = "";
}

function handleShippingSubmit(event) {
  event.preventDefault();

  // Shift Wizard to Payment Pane
  el.paneShipping.classList.remove("active");
  el.panePayment.classList.add("active");

  el.stepShippingInd.className = "checkout-step completed";
  el.stepPaymentInd.className = "checkout-step active";
}

function handlePaymentBack() {
  el.panePayment.classList.remove("active");
  el.paneShipping.classList.add("active");

  el.stepShippingInd.className = "checkout-step active";
  el.stepPaymentInd.className = "checkout-step";
}

function handlePaymentSubmit(event) {
  event.preventDefault();

  // Capture transaction totals
  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  let discount = 0;
  if (state.currentPromo) {
    if (state.currentPromo.type === "percent") {
      discount = subtotal * state.currentPromo.value;
    }
  }
  const shippingThreshold = 1500;
  const shippingCost = (subtotal === 0 || subtotal - discount >= shippingThreshold) ? 0 : 150;
  const total = subtotal - discount + shippingCost;

  // Render Receipt Itemization
  el.receiptItemsList.innerHTML = "";
  state.cart.forEach(item => {
    const itemNode = document.createElement("div");
    itemNode.className = "receipt-item";
    itemNode.innerHTML = `
      <span>${item.product.name} (x${item.quantity})</span>
      <span>₹${(item.product.price * item.quantity).toLocaleString("en-IN")}</span>
    `;
    el.receiptItemsList.appendChild(itemNode);
  });

  // Details
  const orderNumber = `REVENKO-${Math.floor(10000 + Math.random() * 90000)}`;
  el.receiptOrderId.textContent = `Order ${orderNumber}`;

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  el.receiptDate.textContent = new Date().toLocaleDateString("en-IN", options);
  el.receiptGrandTotal.textContent = `₹${total.toLocaleString("en-IN")}`;

  // Shift Wizard to Receipt pane
  el.panePayment.classList.remove("active");
  el.paneReceipt.classList.add("active");

  el.stepPaymentInd.className = "checkout-step completed";
  el.stepReceiptInd.className = "checkout-step active";

  // Clear Shopping State
  state.cart = [];
  state.currentPromo = null;
  saveCartToStorage();
  updateCartUI();
}

// Card input synchronization
function setupCreditCardSync() {
  // Sync holder name
  el.cardHolderInput.addEventListener("input", (e) => {
    const val = e.target.value.toUpperCase();
    el.cardHolderPreview.textContent = val ? val : "AARAV SHARMA";
  });

  // Format and Sync card number (adding space every 4 digits)
  el.cardNumInput.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "");
    val = val.substring(0, 16);
    let formatted = val.match(/.{1,4}/g)?.join(" ") || "";
    e.target.value = formatted;
    el.cardNumPreview.textContent = formatted ? formatted : "•••• •••• •••• ••••";
  });

  // Format and Sync Expiry Date
  el.cardExpiryInput.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 2) {
      val = val.substring(0, 2) + "/" + val.substring(2, 4);
    }
    e.target.value = val;
    el.cardExpiryPreview.textContent = val ? val : "MM/YY";
  });

  // Sync CVV and trigger FLIP on focus
  el.cardCvvInput.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "");
    val = val.substring(0, 3);
    e.target.value = val;
    el.cardCvvPreview.textContent = val ? val : "•••";
  });

  el.cardCvvInput.addEventListener("focus", () => {
    el.creditCard.classList.add("flipped");
  });

  el.cardCvvInput.addEventListener("blur", () => {
    el.creditCard.classList.remove("flipped");
  });
}

// 9. Attach Event Listeners
function setupEventListeners() {
  // Mobile Hamburger Toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileMenuToggle.classList.toggle("active");
    });
    // Close mobile nav when clicking on menu links
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      });
    });
  }

  // Sticky header & Scroll tracking
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      el.header.classList.add("scrolled");
    } else {
      el.header.classList.remove("scrolled");
    }

    // Auto-highlight active navigation link
    const sections = ["hero", "new-arrivals", "shop", "why-choose", "footer"];
    let currentActive = "hero";

    sections.forEach(secId => {
      const section = document.getElementById(secId);
      if (section) {
        const top = section.offsetTop - 150;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          currentActive = secId;
        }
      }
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentActive}`) {
        link.classList.add("active");
      }
    });
  });

  // Theme Toggle
  el.themeToggle.addEventListener("click", toggleTheme);

  // Cart Drawer
  el.cartToggle.addEventListener("click", openCartDrawer);
  el.cartClose.addEventListener("click", closeCartDrawer);
  el.cartOverlay.addEventListener("click", closeCartDrawer);

  // Promo code
  el.applyPromoBtn.addEventListener("click", handleApplyPromo);
  el.promoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleApplyPromo();
  });

  // Checkout triggers
  el.checkoutBtn.addEventListener("click", openCheckout);
  el.checkoutClose.addEventListener("click", closeCheckout);

  // Shop Category Filters
  el.categoryTabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      el.categoryTabs.forEach(t => t.classList.remove("active"));
      e.target.classList.add("active");
      state.activeFilter = e.target.getAttribute("data-category");
      renderProductGrid();
    });
  });

  // Quick View controls
  el.quickviewClose.addEventListener("click", closeQuickView);
  el.qvQtyMinus.addEventListener("click", () => handleQvQuantityChange(-1));
  el.qvQtyPlus.addEventListener("click", () => handleQvQuantityChange(1));
  el.qvAddBtn.addEventListener("click", addQvProductToCart);

  // Checkout navigation
  el.shippingForm.addEventListener("submit", handleShippingSubmit);
  el.paymentForm.addEventListener("submit", handlePaymentSubmit);
  el.paymentBackBtn.addEventListener("click", handlePaymentBack);
  el.receiptDoneBtn.addEventListener("click", () => {
    closeCheckout();
    window.location.hash = "#shop";
  });

  // Credit Card Real-time Synchronization
  setupCreditCardSync();
}

// 10. Scroll-Triggered Section Entrance Reveals
function initScrollReveal() {
  const sections = document.querySelectorAll(".hero, .new-arrivals-section, .shop-section, .benefits-section, footer");
  
  sections.forEach(section => {
    section.classList.add("reveal-element");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  sections.forEach(sec => observer.observe(sec));
}
