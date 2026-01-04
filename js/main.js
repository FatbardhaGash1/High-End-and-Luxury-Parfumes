console.log("JavaScript connected successfully");
const PRODUCTS = [
  {
    id: "p1",
    name: "Maison Francis Kurkdjian – Baccarat Rouge 540",
    brand: "MFK",
    notes: "Amber • Saffron • Cedar",
    price: 255,
    salePrice: 215,
    tags: ["sale", "viral", "luxury"],
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "p2",
    name: "Tom Ford – Oud Wood",
    brand: "Tom Ford",
    notes: "Oud • Sandalwood • Vanilla",
    price: 240,
    salePrice: null,
    tags: ["niche", "viral"],
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "p3",
    name: "Creed – Aventus",
    brand: "Creed",
    notes: "Pineapple • Birch • Musk",
    price: 310,
    salePrice: null,
    tags: ["luxury", "viral"],
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "p4",
    name: "Dior – Sauvage Elixir",
    brand: "Dior",
    notes: "Spicy • Woody • Amber",
    price: 155,
    salePrice: 129,
    tags: ["sale", "bestseller", "viral"],
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "p5",
    name: "Le Labo – Santal 33",
    brand: "Le Labo",
    notes: "Sandalwood • Leather • Spice",
    price: 220,
    salePrice: 199,
    tags: ["sale", "niche"],
    image: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "p6",
    name: "Kilian – Angel’s Share",
    brand: "Kilian",
    notes: "Cognac • Cinnamon • Oak",
    price: 245,
    salePrice: null,
    tags: ["luxury", "viral"],
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "p7",
    name: "Chanel – Bleu de Chanel (EDP)",
    brand: "Chanel",
    notes: "Citrus • Incense • Woods",
    price: 150,
    salePrice: null,
    tags: ["new", "bestseller"],
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "p8",
    name: "Byredo – Gypsy Water",
    brand: "Byredo",
    notes: "Juniper • Pine • Amber",
    price: 190,
    salePrice: null,
    tags: ["niche"],
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=80"
  }
];

const SLIDES = [
  {
    title: "Winter Sale • Up to 25% off",
    desc: "Save on selected viral luxury perfumes.",
    tag: "SALE",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1600&q=80",
    action: { type: "filter", value: "sale" }
  },
  {
    title: "Niche + Luxury Picks",
    desc: "Oud, amber, woods—crafted for bold taste.",
    tag: "NICHE",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1600&q=80",
    action: { type: "search", value: "oud" }
  },
  {
    title: "Build your Wishlist",
    desc: "Tap ❤ to save perfumes you love (stored locally).",
    tag: "WISHLIST",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1600&q=80",
    action: { type: "filter", value: "wishlist" }
  }
];

const KEYS = {
  wishlist: "lhp_wishlist_v1",
  cart: "lhp_cart_v1"
};

const $ = (id) => document.getElementById(id);

const els = {
  productsGrid: $("productsGrid"),
  saleGrid: $("saleGrid"),
  metaText: $("metaText"),

  searchInput: $("searchInput"),
  sortSelect: $("sortSelect"),
  filters: Array.from(document.querySelectorAll(".filter")),

  wishlistCount: $("wishlistCount"),
  cartCount: $("cartCount"),

  // slider
  slideImg: $("slideImg"),
  slideTitle: $("slideTitle"),
  slideDesc: $("slideDesc"),
  slideTag: $("slideTag"),
  prevSlide: $("prevSlide"),
  nextSlide: $("nextSlide"),
  dots: $("dots"),
  shopNowBtn: $("shopNowBtn"),
  viewSaleBtn: $("viewSaleBtn"),
  filterSaleBtn: $("filterSaleBtn"),

  // drawers
  cartDrawer: $("cartDrawer"),
  openCartBtn: $("openCartBtn"),
  closeCartBtn: $("closeCartBtn"),
  cartBackdrop: $("cartBackdrop"),
  cartItems: $("cartItems"),
  subTotal: $("subTotal"),
  shipTotal: $("shipTotal"),
  grandTotal: $("grandTotal"),
  checkoutBtn: $("checkoutBtn"),
  clearCartBtn: $("clearCartBtn"),

  wishlistDrawer: $("wishlistDrawer"),
  openWishlistBtn: $("openWishlistBtn"),
  closeWishlistBtn: $("closeWishlistBtn"),
  wishlistBackdrop: $("wishlistBackdrop"),
  wishlistItems: $("wishlistItems"),
  clearWishlistBtn: $("clearWishlistBtn"),
  goWishlistFilterBtn: $("goWishlistFilterBtn"),

  // auth modal
  authModal: $("authModal"),
  openAuthBtn: $("openAuthBtn"),
  closeAuthBtn: $("closeAuthBtn"),
  authBackdrop: $("authBackdrop"),
  tabs: Array.from(document.querySelectorAll(".tab")),
  signinForm: $("signinForm"),
  signupForm: $("signupForm"),
  authTitle: $("authTitle"),

  // misc
  newsletterForm: $("newsletterForm"),
  toast: $("toast"),
  scrollTopBtn: $("scrollTopBtn"),

  // mobile
  hamburger: $("hamburger"),
  mobileNav: $("mobileNav"),
};

const state = {
  query: "",
  filter: "all", // all | sale | wishlist
  sort: "featured",
  slideIndex: 0,
  wishlist: new Set(loadJSON(KEYS.wishlist, [])),
  cart: loadJSON(KEYS.cart, {}) // {id: qty}
};

function loadJSON(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  }catch{ return fallback; }
}
function saveJSON(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

function money(n){
  return new Intl.NumberFormat("en-IE", { style:"currency", currency:"EUR" }).format(n);
}

function getPrice(p){ return p.salePrice ?? p.price; }

function toast(msg){
  els.toast.textContent = msg;
  els.toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => els.toast.classList.remove("show"), 1600);
}

function escapeHTML(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

/* Slider */
function renderDots(){
  els.dots.innerHTML = SLIDES.map((_, i) =>
    `<button class="dot ${i===state.slideIndex ? "active":""}" data-i="${i}" aria-label="Slide ${i+1}"></button>`
  ).join("");
  els.dots.querySelectorAll(".dot").forEach(b => {
    b.addEventListener("click", () => { state.slideIndex = Number(b.dataset.i); renderSlide(); restartSlider(); });
  });
}
function renderSlide(){
  const s = SLIDES[state.slideIndex];
  els.slideImg.src = s.image;
  els.slideTitle.textContent = s.title;
  els.slideDesc.textContent = s.desc;
  els.slideTag.textContent = s.tag;
  renderDots();
}
function nextSlide(){ state.slideIndex = (state.slideIndex + 1) % SLIDES.length; renderSlide(); }
function prevSlide(){ state.slideIndex = (state.slideIndex - 1 + SLIDES.length) % SLIDES.length; renderSlide(); }

let sliderTimer = null;
function restartSlider(){
  if(sliderTimer) clearInterval(sliderTimer);
  sliderTimer = setInterval(nextSlide, 4500);
}
function runSlideAction(){
  const a = SLIDES[state.slideIndex].action;
  if(a.type === "filter"){
    setFilter(a.value);
    document.querySelector("#products").scrollIntoView({behavior:"smooth"});
  } else if(a.type === "search"){
    state.query = a.value;
    els.searchInput.value = state.query;
    renderProducts();
    document.querySelector("#products").scrollIntoView({behavior:"smooth"});
  }
}

/* Filters */
function setFilter(f){
  state.filter = f;
  els.filters.forEach(btn => btn.classList.toggle("is-active", btn.dataset.filter === f));
  renderProducts();
  if(f === "sale") toast("Showing sale items");
  if(f === "wishlist") toast("Showing wishlist items");
}

/* Counts */
function updateCounts(){
  els.wishlistCount.textContent = String(state.wishlist.size);
  const totalQty = Object.values(state.cart).reduce((a,b)=>a+b,0);
  els.cartCount.textContent = String(totalQty);
}

/* Product rendering */
function productBadges(p){
  const out = [];
  if(p.salePrice != null) out.push(`<span class="badge2 sale">SALE</span>`);
  if(p.tags.includes("new")) out.push(`<span class="badge2 new">NEW</span>`);
  if(p.tags.includes("niche")) out.push(`<span class="badge2 niche">NICHE</span>`);
  if(p.tags.includes("viral")) out.push(`<span class="badge2">VIRAL</span>`);
  return out.join("");
}

function productCard(p){
  const isWish = state.wishlist.has(p.id);
  const onSale = p.salePrice != null;
  const offPct = onSale ? Math.round((1 - (p.salePrice/p.price))*100) : 0;

  return `
    <article class="card">
      <div class="card__media">
        <img src="${p.image}" alt="${escapeHTML(p.name)}" loading="lazy" />
        <div class="card__fade"></div>
        <div class="card__top">
          <div class="badges">${productBadges(p)}</div>
          <button class="heart ${isWish ? "is-on":""}" data-act="wish" data-id="${p.id}" aria-label="Wishlist">
            ${isWish ? "❤" : "♡"}
          </button>
        </div>
      </div>

      <div class="card__body">
        <h3 class="card__title">${escapeHTML(p.name)}</h3>
        <p class="card__meta">${escapeHTML(p.brand)} • ${escapeHTML(p.notes)}</p>

        <div class="price">
          <b>${money(getPrice(p))}</b>
          ${onSale ? `<s>${money(p.price)}</s><span class="off">-${offPct}%</span>` : ""}
        </div>

        <div class="card__actions">
          <button class="btn btn--primary" data-act="add" data-id="${p.id}">Add to cart</button>
          <button class="btn" data-act="quick" data-id="${p.id}">Quick view</button>
        </div>
      </div>
    </article>
  `;
}

function getVisibleProducts(){
  const q = state.query.trim().toLowerCase();
  let list = PRODUCTS.slice();

  if(state.filter === "sale") list = list.filter(p => p.salePrice != null);
  if(state.filter === "wishlist") list = list.filter(p => state.wishlist.has(p.id));

  if(q){
    list = list.filter(p => {
      const hay = `${p.name} ${p.brand} ${p.notes} ${p.tags.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }

  if(state.sort === "price-asc") list.sort((a,b)=>getPrice(a)-getPrice(b));
  if(state.sort === "price-desc") list.sort((a,b)=>getPrice(b)-getPrice(a));
  if(state.sort === "name-asc") list.sort((a,b)=>a.name.localeCompare(b.name));

  return list;
}

function renderProducts(){
  const list = getVisibleProducts();
  els.metaText.textContent = `Showing ${list.length} item${list.length===1 ? "" : "s"}`;
  els.productsGrid.innerHTML = list.map(productCard).join("");

  // bind actions
  els.productsGrid.querySelectorAll("[data-act]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const act = btn.dataset.act;
      if(act === "wish") toggleWishlist(id);
      if(act === "add") addToCart(id);
      if(act === "quick") quickView(id);
    });
  });

  // sale grid
  const sales = PRODUCTS.filter(p => p.salePrice != null);
  els.saleGrid.innerHTML = sales.map(productCard).join("");
  els.saleGrid.querySelectorAll("[data-act]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const act = btn.dataset.act;
      if(act === "wish") toggleWishlist(id);
      if(act === "add") addToCart(id);
      if(act === "quick") quickView(id);
    });
  });
}

function quickView(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const onSale = p.salePrice != null;
  toast(`${p.brand}: ${p.name} • ${money(getPrice(p))}${onSale ? " (sale ✅)" : ""}`);
}

/* Wishlist */
function toggleWishlist(id){
  if(state.wishlist.has(id)){
    state.wishlist.delete(id);
    toast("Removed from wishlist");
  }else{
    state.wishlist.add(id);
    toast("Added to wishlist");
  }
  saveJSON(KEYS.wishlist, Array.from(state.wishlist));
  updateCounts();
  renderProducts();
  renderWishlistDrawer();
}

function renderWishlistDrawer(){
  const items = Array.from(state.wishlist)
    .map(id => PRODUCTS.find(p=>p.id===id))
    .filter(Boolean);

  if(items.length === 0){
    els.wishlistItems.innerHTML = `<div class="muted">Your wishlist is empty. Tap ❤ on a perfume.</div>`;
    return;
  }

  els.wishlistItems.innerHTML = items.map(p => `
    <div class="lineItem">
      <div>
        <h4>${escapeHTML(p.name)}</h4>
        <p>${escapeHTML(p.brand)} • ${money(getPrice(p))}</p>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px; align-items:flex-end;">
        <button class="btn btn--primary" data-add="${p.id}">Add</button>
        <button class="remove" data-remove="${p.id}">Remove</button>
      </div>
    </div>
  `).join("");

  els.wishlistItems.querySelectorAll("[data-add]").forEach(b=>{
    b.addEventListener("click",()=>addToCart(b.dataset.add));
  });
  els.wishlistItems.querySelectorAll("[data-remove]").forEach(b=>{
    b.addEventListener("click",()=>toggleWishlist(b.dataset.remove));
  });
}

/* Cart */
function addToCart(id){
  state.cart[id] = (state.cart[id] ?? 0) + 1;
  saveJSON(KEYS.cart, state.cart);
  updateCounts();
  renderCart();
  toast("Added to cart");
}
function removeFromCart(id){
  delete state.cart[id];
  saveJSON(KEYS.cart, state.cart);
  updateCounts();
  renderCart();
}
function setQty(id, qty){
  if(qty <= 0) return removeFromCart(id);
  state.cart[id] = qty;
  saveJSON(KEYS.cart, state.cart);
  updateCounts();
  renderCart();
}
function totals(){
  let subtotal = 0;
  for(const [id, qty] of Object.entries(state.cart)){
    const p = PRODUCTS.find(x=>x.id===id);
    if(!p) continue;
    subtotal += getPrice(p) * qty;
  }
  const shipping = subtotal === 0 ? 0 : (subtotal >= 80 ? 0 : 6.5);
  return { subtotal, shipping, total: subtotal + shipping };
}
function renderCart(){
  const entries = Object.entries(state.cart);
  if(entries.length === 0){
    els.cartItems.innerHTML = `<div class="muted">Your cart is empty. Add a perfume to start.</div>`;
  }else{
    els.cartItems.innerHTML = entries.map(([id, qty]) => {
      const p = PRODUCTS.find(x=>x.id===id);
      if(!p) return "";
      return `
        <div class="lineItem">
          <div>
            <h4>${escapeHTML(p.name)}</h4>
            <p>${escapeHTML(p.brand)} • ${money(getPrice(p))} each</p>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px; align-items:flex-end;">
            <div class="qty">
              <button data-dec="${id}">−</button>
              <span>${qty}</span>
              <button data-inc="${id}">+</button>
            </div>
            <button class="remove" data-rem="${id}">Remove</button>
          </div>
        </div>
      `;
    }).join("");

    els.cartItems.querySelectorAll("[data-inc]").forEach(b=>{
      b.addEventListener("click",()=>setQty(b.dataset.inc, (state.cart[b.dataset.inc]??0)+1));
    });
    els.cartItems.querySelectorAll("[data-dec]").forEach(b=>{
      b.addEventListener("click",()=>setQty(b.dataset.dec, (state.cart[b.dataset.dec]??0)-1));
    });
    els.cartItems.querySelectorAll("[data-rem]").forEach(b=>{
      b.addEventListener("click",()=>removeFromCart(b.dataset.rem));
    });
  }

  const t = totals();
  els.subTotal.textContent = money(t.subtotal);
  els.shipTotal.textContent = money(t.shipping);
  els.grandTotal.textContent = money(t.total);
}

/* Drawer helpers */
function openDrawer(drawer){
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden","false");
}
function closeDrawer(drawer){
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden","true");
}

/* Auth modal */
function openAuth(){
  els.authModal.classList.add("is-open");
  els.authModal.setAttribute("aria-hidden","false");
}
function closeAuth(){
  els.authModal.classList.remove("is-open");
  els.authModal.setAttribute("aria-hidden","true");
}
function setAuthTab(tab){
  els.tabs.forEach(t => t.classList.toggle("is-active", t.dataset.tab === tab));
  els.signinForm.classList.toggle("hidden", tab !== "signin");
  els.signupForm.classList.toggle("hidden", tab !== "signup");
  els.authTitle.textContent = tab === "signin" ? "Sign in" : "Sign up";
}

/* Mobile menu */
function toggleMobileNav(){
  const open = els.mobileNav.classList.toggle("open");
  els.mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
}

/* Scroll-to-top */
function updateScrollTop(){
  const show = window.scrollY > 600;
  els.scrollTopBtn.classList.toggle("show", show);
}

/* Events */
els.prevSlide.addEventListener("click", ()=>{ prevSlide(); restartSlider(); });
els.nextSlide.addEventListener("click", ()=>{ nextSlide(); restartSlider(); });
els.shopNowBtn.addEventListener("click", ()=>{ runSlideAction(); });
els.viewSaleBtn.addEventListener("click", ()=>{ setFilter("sale"); document.querySelector("#sale").scrollIntoView({behavior:"smooth"}); });
els.filterSaleBtn.addEventListener("click", ()=>{ setFilter("sale"); document.querySelector("#products").scrollIntoView({behavior:"smooth"}); });

els.searchInput.addEventListener("input", (e)=>{ state.query = e.target.value; renderProducts(); });
els.sortSelect.addEventListener("change", (e)=>{ state.sort = e.target.value; renderProducts(); });

els.filters.forEach(btn=>{
  btn.addEventListener("click", ()=> setFilter(btn.dataset.filter));
});

els.openCartBtn.addEventListener("click", ()=>{ openDrawer(els.cartDrawer); renderCart(); });
els.closeCartBtn.addEventListener("click", ()=> closeDrawer(els.cartDrawer));
els.cartBackdrop.addEventListener("click", ()=> closeDrawer(els.cartDrawer));

els.openWishlistBtn.addEventListener("click", ()=>{ openDrawer(els.wishlistDrawer); renderWishlistDrawer(); });
els.closeWishlistBtn.addEventListener("click", ()=> closeDrawer(els.wishlistDrawer));
els.wishlistBackdrop.addEventListener("click", ()=> closeDrawer(els.wishlistDrawer));

els.clearCartBtn.addEventListener("click", ()=>{
  state.cart = {};
  saveJSON(KEYS.cart, state.cart);
  updateCounts();
  renderCart();
  toast("Cart cleared");
});

els.checkoutBtn.addEventListener("click", ()=>{
  const t = totals();
  if(t.total <= 0) return toast("Cart is empty");
  toast(`Checkout total: ${money(t.total)} (demo)`);
});

els.clearWishlistBtn.addEventListener("click", ()=>{
  state.wishlist = new Set();
  saveJSON(KEYS.wishlist, []);
  updateCounts();
  renderProducts();
  renderWishlistDrawer();
  toast("Wishlist cleared");
});

els.goWishlistFilterBtn.addEventListener("click", ()=>{
  closeDrawer(els.wishlistDrawer);
  setFilter("wishlist");
  document.querySelector("#products").scrollIntoView({behavior:"smooth"});
});

els.openAuthBtn.addEventListener("click", openAuth);
els.closeAuthBtn.addEventListener("click", closeAuth);
els.authBackdrop.addEventListener("click", closeAuth);

els.tabs.forEach(t=>{
  t.addEventListener("click", ()=> setAuthTab(t.dataset.tab));
});

els.signinForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  toast("Signed in (demo)");
  closeAuth();
});
els.signupForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  toast("Account created (demo)");
  closeAuth();
});

els.newsletterForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  toast("Subscribed (demo)");
  e.target.reset();
});

els.hamburger.addEventListener("click", toggleMobileNav);
els.mobileNav.querySelectorAll("a").forEach(a=>{
  a.addEventListener("click", ()=> els.mobileNav.classList.remove("open"));
});

els.scrollTopBtn.addEventListener("click", ()=>{
  window.scrollTo({top:0, behavior:"smooth"});
});

window.addEventListener("scroll", updateScrollTop);
document.addEventListener("keydown",(e)=>{
  if(e.key === "Escape"){
    closeDrawer(els.cartDrawer);
    closeDrawer(els.wishlistDrawer);
    closeAuth();
  }
});

/* Init */
(function init(){
  renderSlide();
  restartSlider();
  updateCounts();
  setFilter("all");
  renderProducts();
  renderCart();
  renderWishlistDrawer();
  updateScrollTop();
})();
