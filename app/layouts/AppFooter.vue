<template>
  <footer class="site-footer" aria-label="Footer">
    <!-- Main Footer -->
    <div class="footer-main">
      <div class="container footer-grid">

        <!-- Brand Column -->
        <div class="footer-brand">
          <NuxtLink to="/" class="footer-logo">
            <LogoMark class="footer-logo-icon" />
            <div>
              <span class="footer-logo-name">HIKARI<em>mesindo</em></span>
              <small>Mitra Mesin Percetakan Anda</small>
            </div>
          </NuxtLink>
          <p class="footer-desc">
            Supplier terpercaya mesin fotokopi, laminating, digital printing, cutting,
            binding, dan spare part mesin percetakan di Indonesia sejak 2010.
          </p>
          <div class="footer-socials">
            <a href="https://www.instagram.com/hikarimesindo" target="_blank" rel="noopener noreferrer" aria-label="Instagram Hikarimesindo" class="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/hikarimesindo" target="_blank" rel="noopener noreferrer" aria-label="Facebook Hikarimesindo" class="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.youtube.com/@hikarimesindo" target="_blank" rel="noopener noreferrer" aria-label="YouTube Hikarimesindo" class="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Hikarimesindo" class="social-btn social-btn--wa">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>

        <!-- Products Column -->
        <div class="footer-col">
          <h3 class="footer-heading">Kategori Produk</h3>
          <ul class="footer-links">
            <li><NuxtLink to="/produk?kategori=fotokopi">Mesin Fotokopi</NuxtLink></li>
            <li><NuxtLink to="/produk?kategori=laminating">Mesin Laminating</NuxtLink></li>
            <li><NuxtLink to="/produk?kategori=digital-printing">Digital Printing</NuxtLink></li>
            <li><NuxtLink to="/produk?kategori=cutting">Digital Cutting</NuxtLink></li>
            <li><NuxtLink to="/produk?kategori=binding">Mesin Binding</NuxtLink></li>
            <li><NuxtLink to="/produk?kategori=creasing">Mesin Creasing</NuxtLink></li>
            <li><NuxtLink to="/produk?kategori=sparepart">Spare Part</NuxtLink></li>
          </ul>
        </div>

        <!-- Company Column -->
        <div class="footer-col">
          <h3 class="footer-heading">Perusahaan</h3>
          <ul class="footer-links">
            <li><NuxtLink to="/tentang-kami">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="/blog">Blog & Artikel</NuxtLink></li>
            <li><NuxtLink to="/kontak">Kontak</NuxtLink></li>
            <li><NuxtLink to="/layanan">Layanan Purna Jual</NuxtLink></li>
            <li><a href="/sitemap.xml" target="_blank" rel="noopener">Sitemap</a></li>
          </ul>
          <h3 class="footer-heading" style="margin-top: 1.5rem;">Merek Kami Jual</h3>
          <div class="brand-tags">
            <span v-for="brand in brands" :key="brand" class="brand-tag">{{ brand }}</span>
          </div>
        </div>

        <!-- Contact Column -->
        <div class="footer-col">
          <h3 class="footer-heading">Hubungi Kami</h3>
          <ul class="footer-contact-list">
            <li>
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>Jl. Contoh No. 123, Tangerang, Banten 15111</span>
            </li>
            <li>
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:+6221-1234-5678">+62 21 1234-5678</a>
            </li>
            <li>
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:info@hikarimesindo.com">info@hikarimesindo.com</a>
            </li>
            <li>
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Senin – Sabtu: 08.00 – 17.00 WIB</span>
            </li>
          </ul>
          <a href="https://wa.me/6281234567890?text=Halo%20Hikarimesindo%2C%20saya%20ingin%20bertanya." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm footer-wa-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>© {{ new Date().getFullYear() }} <strong>Hikarimesindo</strong>. All rights reserved.</p>
        <div class="footer-bottom-links">
          <NuxtLink to="/kebijakan-privasi">Kebijakan Privasi</NuxtLink>
          <NuxtLink to="/syarat-ketentuan">Syarat & Ketentuan</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import LogoMark from '~/components/LogoMark.vue'

const brands = ['Canon', 'Ricoh', 'Kyocera', 'Konica Minolta', 'Sharp', 'Brother', 'Duplo', 'GBC']
</script>

<style scoped>
.site-footer {
  background: var(--c-gray-950);
  color: var(--c-gray-300);
}

/* Main */
.footer-main { padding-block: var(--space-16) var(--space-12); }
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-10);
}
@media (min-width: 640px)  { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: var(--space-12); } }

/* Brand */
.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
  text-decoration: none;
}
.footer-logo-icon { width: 44px; height: 44px; flex-shrink: 0; }
.footer-logo-name {
  display: block;
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--c-white);
  letter-spacing: -0.02em;
}
.footer-logo-name em { font-style: normal; color: var(--c-primary-400); }
.footer-logo small {
  display: block;
  font-size: 0.6875rem;
  color: var(--c-gray-500);
  letter-spacing: 0.05em;
  margin-top: 2px;
}
.footer-desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--c-gray-400);
  margin-bottom: var(--space-6);
}
.footer-socials { display: flex; gap: var(--space-3); flex-wrap: wrap; }
.social-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  background: var(--c-gray-800);
  color: var(--c-gray-300);
  transition: all var(--duration-base) var(--ease-smooth);
}
.social-btn svg { width: 18px; height: 18px; }
.social-btn:hover { background: var(--c-primary-700); color: var(--c-white); transform: translateY(-2px); }
.social-btn--wa:hover { background: #25D366; }

/* Columns */
.footer-heading {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--c-gray-500);
  margin-bottom: var(--space-4);
}
.footer-links { display: flex; flex-direction: column; gap: var(--space-2); }
.footer-links li a {
  font-size: 0.9375rem;
  color: var(--c-gray-400);
  transition: color var(--duration-fast);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}
.footer-links li a::before {
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--c-primary-600);
  flex-shrink: 0;
  opacity: 0;
  transition: opacity var(--duration-fast);
}
.footer-links li a:hover { color: var(--c-primary-300); }
.footer-links li a:hover::before { opacity: 1; }

.brand-tags { display: flex; flex-wrap: wrap; gap: var(--space-2); }
.brand-tag {
  padding: 0.25rem 0.625rem;
  border: 1px solid var(--c-gray-700);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  color: var(--c-gray-400);
}

/* Contact */
.footer-contact-list { display: flex; flex-direction: column; gap: var(--space-4); margin-bottom: var(--space-6); }
.footer-contact-list li {
  display: flex;
  gap: var(--space-3);
  font-size: 0.875rem;
  color: var(--c-gray-400);
  line-height: 1.5;
}
.contact-icon { width: 18px; height: 18px; flex-shrink: 0; color: var(--c-primary-400); margin-top: 1px; }
.footer-contact-list a { color: var(--c-primary-300); transition: color var(--duration-fast); }
.footer-contact-list a:hover { color: var(--c-primary-200); }
.footer-wa-btn { width: 100%; justify-content: center; }

/* Bottom */
.footer-bottom {
  border-top: 1px solid var(--c-gray-800);
  padding-block: var(--space-5);
}
.footer-bottom-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  text-align: center;
}
@media (min-width: 640px) {
  .footer-bottom-inner { flex-direction: row; justify-content: space-between; text-align: left; }
}
.footer-bottom p { font-size: 0.875rem; color: var(--c-gray-600); }
.footer-bottom p strong { color: var(--c-primary-400); }
.footer-bottom-links { display: flex; gap: var(--space-5); }
.footer-bottom-links a { font-size: 0.8125rem; color: var(--c-gray-600); transition: color var(--duration-fast); }
.footer-bottom-links a:hover { color: var(--c-primary-400); }
</style>