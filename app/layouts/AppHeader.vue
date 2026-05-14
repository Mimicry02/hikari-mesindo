<template>
  <header :class="['site-header', { 'scrolled': isScrolled, 'menu-open': isMobileOpen }]" role="banner">
    <div class="container header-inner">
      <!-- Logo -->
      <NuxtLink to="/" class="logo-link" aria-label="Hikarimesindo – Kembali ke beranda">
        <LogoMark class="logo-icon" />
        <div class="logo-text">
          <span class="logo-name">HIKARI</span>
          <span class="logo-sub">mesindo</span>
        </div>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="desktop-nav" aria-label="Navigasi utama">
        <ul class="nav-list">
          <li><NuxtLink to="/" class="nav-link" exact-active-class="nav-link--active">Beranda</NuxtLink></li>
          <li class="has-dropdown">
            <button class="nav-link nav-link-btn" aria-haspopup="true" :aria-expanded="isProductDropOpen" @click="toggleProductDrop" @blur="closeProductDrop">
              Produk
              <svg class="chevron" :class="{ open: isProductDropOpen }" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div class="dropdown" v-show="isProductDropOpen">
              <div class="dropdown-inner">
                <div class="dropdown-col">
                  <p class="dropdown-label">Mesin Percetakan</p>
                  <NuxtLink to="/produk?kategori=fotokopi" class="dropdown-item">
                    <span class="dropdown-item-icon">🖨️</span>
                    <div>
                      <strong>Mesin Fotokopi</strong>
                      <small>Canon, Ricoh, Kyocera, Sharp</small>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/produk?kategori=laminating" class="dropdown-item">
                    <span class="dropdown-item-icon">📄</span>
                    <div>
                      <strong>Mesin Laminating</strong>
                      <small>Panas & Dingin, berbagai ukuran</small>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/produk?kategori=digital-printing" class="dropdown-item">
                    <span class="dropdown-item-icon">🖼️</span>
                    <div>
                      <strong>Digital Printing</strong>
                      <small>Format besar, sublimasi, DTF</small>
                    </div>
                  </NuxtLink>
                </div>
                <div class="dropdown-col">
                  <p class="dropdown-label">Mesin Finishing</p>
                  <NuxtLink to="/produk?kategori=cutting" class="dropdown-item">
                    <span class="dropdown-item-icon">✂️</span>
                    <div>
                      <strong>Digital Cutting</strong>
                      <small>Sticker, vinyl, kertas, karton</small>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/produk?kategori=binding" class="dropdown-item">
                    <span class="dropdown-item-icon">📚</span>
                    <div>
                      <strong>Mesin Binding</strong>
                      <small>Spiral, hard cover, perfect bind</small>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/produk?kategori=creasing" class="dropdown-item">
                    <span class="dropdown-item-icon">📐</span>
                    <div>
                      <strong>Mesin Creasing</strong>
                      <small>Lipat, potong, perforasi</small>
                    </div>
                  </NuxtLink>
                </div>
                <div class="dropdown-col">
                  <p class="dropdown-label">Spare Part & Layanan</p>
                  <NuxtLink to="/produk?kategori=sparepart" class="dropdown-item">
                    <span class="dropdown-item-icon">🔧</span>
                    <div>
                      <strong>Spare Part</strong>
                      <small>Original & Compatible</small>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/layanan" class="dropdown-item">
                    <span class="dropdown-item-icon">🛠️</span>
                    <div>
                      <strong>Service & Teknis</strong>
                      <small>Garansi & purna jual</small>
                    </div>
                  </NuxtLink>
                  <div class="dropdown-cta">
                    <NuxtLink to="/produk" class="btn btn-primary btn-sm">Lihat Semua Produk →</NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li><NuxtLink to="/tentang-kami" class="nav-link" active-class="nav-link--active">Tentang Kami</NuxtLink></li>
          <li><NuxtLink to="/blog" class="nav-link" active-class="nav-link--active">Blog</NuxtLink></li>
          <li><NuxtLink to="/kontak" class="nav-link" active-class="nav-link--active">Kontak</NuxtLink></li>
        </ul>
      </nav>

      <!-- CTA + Hamburger -->
      <div class="header-actions">
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-sm header-cta"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
        <button
          class="hamburger"
          :class="{ active: isMobileOpen }"
          @click="isMobileOpen = !isMobileOpen"
          :aria-expanded="isMobileOpen"
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
    <Transition name="mobile-nav">
      <div v-if="isMobileOpen" class="mobile-nav" @click.self="isMobileOpen = false">
        <nav aria-label="Navigasi mobile">
          <ul class="mobile-nav-list">
            <li><NuxtLink to="/" @click="isMobileOpen = false">Beranda</NuxtLink></li>
            <li>
              <button class="mobile-category" @click="mobileProductOpen = !mobileProductOpen">
                Produk <span :class="{ 'rotate-180': mobileProductOpen }">▾</span>
              </button>
              <ul v-show="mobileProductOpen" class="mobile-sub">
                <li><NuxtLink to="/produk?kategori=fotokopi" @click="isMobileOpen = false">Mesin Fotokopi</NuxtLink></li>
                <li><NuxtLink to="/produk?kategori=laminating" @click="isMobileOpen = false">Mesin Laminating</NuxtLink></li>
                <li><NuxtLink to="/produk?kategori=digital-printing" @click="isMobileOpen = false">Digital Printing</NuxtLink></li>
                <li><NuxtLink to="/produk?kategori=cutting" @click="isMobileOpen = false">Digital Cutting</NuxtLink></li>
                <li><NuxtLink to="/produk?kategori=binding" @click="isMobileOpen = false">Mesin Binding</NuxtLink></li>
                <li><NuxtLink to="/produk?kategori=sparepart" @click="isMobileOpen = false">Spare Part</NuxtLink></li>
              </ul>
            </li>
            <li><NuxtLink to="/tentang-kami" @click="isMobileOpen = false">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="/blog" @click="isMobileOpen = false">Blog</NuxtLink></li>
            <li><NuxtLink to="/kontak" @click="isMobileOpen = false">Kontak</NuxtLink></li>
          </ul>
          <div class="mobile-nav-footer">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="btn btn-primary" @click="isMobileOpen = false">
              Hubungi via WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LogoMark from '~/components/LogoMark.vue'

const isScrolled = ref(false)
const isMobileOpen = ref(false)
const isProductDropOpen = ref(false)
const mobileProductOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function toggleProductDrop() {
  isProductDropOpen.value = !isProductDropOpen.value
}

function closeProductDrop() {
  setTimeout(() => { isProductDropOpen.value = false }, 200)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: var(--header-height);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: all var(--duration-base) var(--ease-smooth);
}
.site-header.scrolled {
  border-bottom-color: var(--c-gray-100);
  box-shadow: 0 2px 20px rgba(10, 15, 13, 0.08);
}

.header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

/* Logo */
.logo-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  flex-shrink: 0;
}
.logo-icon {
  width: 40px;
  height: 40px;
}
.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}
.logo-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--c-primary-700);
  letter-spacing: -0.02em;
}
.logo-sub {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 500;
  color: var(--c-gray-500);
  text-transform: lowercase;
  letter-spacing: 0.06em;
}

/* Desktop Nav */
.desktop-nav { display: none; }
@media (min-width: 1024px) {
  .desktop-nav { display: flex; align-items: center; }
}

.nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.nav-link, .nav-link-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: var(--space-2) var(--space-4);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--c-gray-700);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast) var(--ease-smooth);
  background: none;
  cursor: pointer;
}
.nav-link:hover, .nav-link-btn:hover {
  color: var(--c-primary-600);
  background: var(--c-primary-50);
}
.nav-link--active {
  color: var(--c-primary-600);
  background: var(--c-primary-50);
  font-weight: 600;
}

.chevron {
  width: 16px;
  height: 16px;
  transition: transform var(--duration-base) var(--ease-smooth);
}
.chevron.open { transform: rotate(180deg); }

/* Mega Dropdown */
.has-dropdown { position: relative; }
.dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--c-white);
  border: 1px solid var(--c-gray-100);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  width: 720px;
  z-index: 100;
  animation: scaleIn 0.2s var(--ease-spring);
  transform-origin: top center;
}
.dropdown-inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}
.dropdown-col {
  padding: var(--space-6);
  border-right: 1px solid var(--c-gray-100);
}
.dropdown-col:last-child { border-right: none; }
.dropdown-label {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--c-gray-400);
  margin-bottom: var(--space-3);
}
.dropdown-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-1);
  transition: background var(--duration-fast) var(--ease-smooth);
}
.dropdown-item:hover { background: var(--c-primary-50); }
.dropdown-item-icon { font-size: 1.25rem; flex-shrink: 0; }
.dropdown-item strong {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--c-gray-800);
}
.dropdown-item small {
  font-size: 0.75rem;
  color: var(--c-gray-500);
}
.dropdown-cta {
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--c-gray-100);
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}
.header-cta { display: none; }
@media (min-width: 768px) { .header-cta { display: inline-flex; } }

/* Hamburger */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  transition: background var(--duration-fast);
}
@media (min-width: 1024px) { .hamburger { display: none; } }

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--c-gray-700);
  border-radius: var(--radius-full);
  transition: all var(--duration-base) var(--ease-smooth);
}
.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; transform: translateX(-8px); }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile Nav */
.mobile-nav {
  position: fixed;
  inset: var(--header-height) 0 0 0;
  background: rgba(10, 15, 13, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: flex;
  justify-content: flex-end;
}
.mobile-nav > nav {
  width: min(320px, 90vw);
  background: var(--c-white);
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: var(--space-6);
  border-left: 1px solid var(--c-gray-100);
}
.mobile-nav-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.mobile-nav-list li a,
.mobile-category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: 1rem;
  font-weight: 500;
  color: var(--c-gray-700);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast);
}
.mobile-nav-list li a:hover, .mobile-category:hover {
  background: var(--c-primary-50);
  color: var(--c-primary-600);
}
.mobile-sub {
  padding-left: var(--space-4);
  border-left: 2px solid var(--c-primary-100);
  margin-left: var(--space-4);
  margin-top: var(--space-2);
}
.mobile-sub li a {
  font-size: 0.9375rem;
  padding: var(--space-2) var(--space-3);
}
.mobile-nav-footer {
  margin-top: var(--space-6);
  padding-top: var(--space-6);
  border-top: 1px solid var(--c-gray-100);
}
.mobile-nav-footer .btn { width: 100%; justify-content: center; }

.rotate-180 { display: inline-block; transform: rotate(180deg); }

/* Transitions */
.mobile-nav-enter-active, .mobile-nav-leave-active { transition: opacity var(--duration-base) var(--ease-smooth); }
.mobile-nav-enter-from, .mobile-nav-leave-to { opacity: 0; }
.mobile-nav-enter-active > nav, .mobile-nav-leave-active > nav { transition: transform var(--duration-base) var(--ease-smooth); }
.mobile-nav-enter-from > nav, .mobile-nav-leave-to > nav { transform: translateX(100%); }
</style>