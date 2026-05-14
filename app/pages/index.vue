<template>
  <div class="home">

    <!-- ═══════════════════════════════ HERO ═══════════════════════════════ -->
    <section class="hero" aria-label="Hero">
      <div class="hero-bg">
        <div class="hero-orb hero-orb--1" aria-hidden="true"></div>
        <div class="hero-orb hero-orb--2" aria-hidden="true"></div>
        <div class="hero-grid" aria-hidden="true"></div>
      </div>
      <div class="container hero-inner">
        <div class="hero-content">
          <div class="animate-fade-up">
            <span class="badge badge-white hero-badge">
              <span class="badge-dot"></span>
              Terpercaya Sejak 2010 · Melayani 5.000+ Pelanggan
            </span>
          </div>
          <h1 class="hero-title animate-fade-up animate-fade-up-delay-1">
            Supplier Mesin<br/>
            <em class="hero-title-em">Percetakan</em><br/>
            Terlengkap
          </h1>
          <p class="hero-subtitle animate-fade-up animate-fade-up-delay-2">
            Hikarimesindo menyediakan mesin fotokopi, laminating, digital printing,
            cutting, binding, dan spare part dengan harga kompetitif dan garansi resmi.
          </p>
          <div class="hero-actions animate-fade-up animate-fade-up-delay-3">
            <NuxtLink to="/produk" class="btn btn-accent btn-lg">
              Lihat Semua Produk
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </NuxtLink>
            <a href="https://wa.me/6281234567890?text=Halo%20Hikarimesindo%2C%20saya%20ingin%20konsultasi." target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Konsultasi Gratis
            </a>
          </div>
          <div class="hero-brands animate-fade-up animate-fade-up-delay-4">
            <span class="hero-brands-label">Merek Tersedia:</span>
            <div class="hero-brands-list">
              <span v-for="brand in heroBrands" :key="brand">{{ brand }}</span>
            </div>
          </div>
        </div>
        <div class="hero-visual animate-fade-up animate-fade-up-delay-2">
          <HeroIllustration />
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════ STATS ════════════════════════════════ -->
    <section class="stats-bar" aria-label="Statistik perusahaan">
      <div class="container stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-number">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════ CATEGORIES ═══════════════════════════ -->
    <section class="section" aria-labelledby="categories-heading">
      <div class="container">
        <div class="section-header center">
          <p class="section-label">Apa yang kami sediakan</p>
          <h2 class="section-title" id="categories-heading">Kategori Produk Unggulan</h2>
          <div class="divider center"></div>
          <p class="section-subtitle">
            Dari mesin fotokopi hingga finishing percetakan — semua tersedia dengan harga
            terbaik dan didukung teknisi berpengalaman.
          </p>
        </div>
        <div class="categories-grid">
          <NuxtLink
            v-for="cat in categories"
            :key="cat.slug"
            :to="`/produk?kategori=${cat.slug}`"
            class="category-card"
            :aria-label="`Kategori ${cat.name}: ${cat.description}`"
          >
            <div class="category-card-icon">{{ cat.icon }}</div>
            <div class="category-card-body">
              <h3 class="category-card-title">{{ cat.name }}</h3>
              <p class="category-card-desc">{{ cat.description }}</p>
              <span class="category-card-count">{{ cat.count }} Produk</span>
            </div>
            <svg class="category-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════ PRODUCTS ═════════════════════════════ -->
    <section class="section products-section" aria-labelledby="products-heading">
      <div class="container">
        <div class="section-header">
          <div class="section-header-row">
            <div>
              <p class="section-label">Pilihan Terlaris</p>
              <h2 class="section-title" id="products-heading">Produk Populer</h2>
              <div class="divider"></div>
            </div>
            <NuxtLink to="/produk" class="btn btn-outline">
              Lihat Semua
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </NuxtLink>
          </div>
        </div>
        <div class="products-grid">
          <article v-for="product in featuredProducts" :key="product.id" class="product-card card">
            <NuxtLink :to="`/produk/${product.slug}`" class="product-card-image-link">
              <div class="product-card-image">
                <ProductDummyImage :category="product.categorySlug" :name="product.name" />
                <div v-if="product.badge" class="product-badge" :class="badgeClass(product.badge)">
                  {{ product.badge }}
                </div>
                <div v-if="!product.inStock" class="product-out-of-stock">Stok Habis</div>
              </div>
            </NuxtLink>
            <div class="product-card-body">
              <p class="product-brand">{{ product.brand }}</p>
              <h3 class="product-name">
                <NuxtLink :to="`/produk/${product.slug}`">{{ product.name }}</NuxtLink>
              </h3>
              <p class="product-short-desc">{{ product.shortDesc }}</p>
              <div class="product-card-footer">
                <div class="product-price">
                  <span class="product-price-label">Mulai dari</span>
                  <strong class="product-price-value">{{ product.priceLabel }}</strong>
                </div>
                <div class="product-actions">
                  <NuxtLink :to="`/produk/${product.slug}`" class="btn btn-primary btn-sm">Detail</NuxtLink>
                  <a :href="`https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}`" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Tanya via WhatsApp">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Tanya
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════ WHY US ═══════════════════════════════ -->
    <section class="section why-section" aria-labelledby="why-heading">
      <div class="container why-inner">
        <div class="why-content">
          <p class="section-label">Mengapa Hikarimesindo?</p>
          <h2 class="section-title" id="why-heading">Keunggulan yang Membuat Kami Berbeda</h2>
          <div class="divider"></div>
          <p class="section-subtitle">
            Lebih dari sekadar supplier, kami adalah mitra bisnis jangka panjang yang
            memastikan operasional percetakan Anda berjalan tanpa hambatan.
          </p>
          <ul class="why-list">
            <li v-for="item in whyUs" :key="item.title" class="why-item">
              <div class="why-icon">{{ item.icon }}</div>
              <div>
                <h3 class="why-item-title">{{ item.title }}</h3>
                <p class="why-item-desc">{{ item.desc }}</p>
              </div>
            </li>
          </ul>
          <div class="why-cta">
            <NuxtLink to="/tentang-kami" class="btn btn-primary">Pelajari Lebih Lanjut</NuxtLink>
            <NuxtLink to="/kontak" class="btn btn-outline">Hubungi Kami</NuxtLink>
          </div>
        </div>
        <div class="why-visual">
          <div class="why-card-stack">
            <div v-for="(card, i) in whyCards" :key="i" class="why-card" :style="{ '--i': i }">
              <div class="why-card-icon">{{ card.icon }}</div>
              <div class="why-card-stat">{{ card.stat }}</div>
              <div class="why-card-label">{{ card.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════ TESTIMONIALS ════════════════════════════ -->
    <section class="section testimonials-section" aria-labelledby="testimonials-heading">
      <div class="container">
        <div class="section-header center">
          <p class="section-label">Kata Pelanggan Kami</p>
          <h2 class="section-title" id="testimonials-heading">Dipercaya Ribuan Pelanggan</h2>
          <div class="divider center"></div>
        </div>
        <div class="testimonials-grid">
          <blockquote v-for="t in testimonials" :key="t.name" class="testimonial-card card">
            <div class="testimonial-stars">
              <svg v-for="s in 5" :key="s" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            </div>
            <p class="testimonial-text">"{{ t.text }}"</p>
            <footer class="testimonial-footer">
              <div class="testimonial-avatar">{{ t.name[0] }}</div>
              <div>
                <cite class="testimonial-name">{{ t.name }}</cite>
                <p class="testimonial-role">{{ t.role }}</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════ BLOG ═════════════════════════════════ -->
    <section class="section" aria-labelledby="blog-heading">
      <div class="container">
        <div class="section-header">
          <div class="section-header-row">
            <div>
              <p class="section-label">Tips & Informasi</p>
              <h2 class="section-title" id="blog-heading">Artikel Terbaru</h2>
              <div class="divider"></div>
            </div>
            <NuxtLink to="/blog" class="btn btn-outline">Semua Artikel</NuxtLink>
          </div>
        </div>
        <div class="blog-grid">
          <article v-for="post in blogPosts" :key="post.slug" class="blog-card card">
            <div class="blog-card-image">
              <BlogDummyImage :category="post.category" />
              <span class="blog-category-tag">{{ post.category }}</span>
            </div>
            <div class="blog-card-body">
              <time class="blog-date" :datetime="post.dateIso">{{ post.date }}</time>
              <h3 class="blog-title">
                <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
              </h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <NuxtLink :to="`/blog/${post.slug}`" class="blog-read-more">
                Baca Selengkapnya
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════ CTA ══════════════════════════════════ -->
    <section class="cta-section" aria-labelledby="cta-heading">
      <div class="cta-bg" aria-hidden="true">
        <div class="cta-orb cta-orb--1"></div>
        <div class="cta-orb cta-orb--2"></div>
      </div>
      <div class="container cta-inner">
        <div class="cta-content">
          <h2 class="cta-title" id="cta-heading">Siap Tingkatkan Produktivitas Percetakan Anda?</h2>
          <p class="cta-subtitle">
            Konsultasikan kebutuhan mesin percetakan Anda dengan tim ahli kami.
            Gratis konsultasi, pengiriman ke seluruh Indonesia.
          </p>
          <div class="cta-actions">
            <a href="https://wa.me/6281234567890?text=Halo%20Hikarimesindo%2C%20saya%20ingin%20konsultasi%20kebutuhan%20mesin." target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat WhatsApp Sekarang
            </a>
            <NuxtLink to="/kontak" class="btn btn-ghost btn-lg">Kirim Pesan</NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import HeroIllustration from '~/components/HeroIllustration.vue'
import ProductDummyImage from '~/components/ProductDummyImage.vue'
import BlogDummyImage from '~/components/BlogDummyImage.vue'

// ── SEO ──────────────────────────────────────────────────────────────────────
useSEO({
  title: 'Hikarimesindo – Supplier Mesin Percetakan & Laminating Terpercaya',
  description:
    'Hikarimesindo adalah supplier mesin fotokopi, laminating, digital printing, digital cutting, binding, dan spare part mesin percetakan terlengkap di Indonesia. Garansi resmi, harga terbaik.',
  keywords:
    'mesin fotokopi, mesin laminating, digital printing, digital cutting, mesin binding, spare part mesin, supplier mesin percetakan, hikarimesindo',
  canonical: 'https://hikarimesindo.com',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Hikarimesindo – Supplier Mesin Percetakan',
    description: 'Supplier mesin percetakan terlengkap di Indonesia',
    url: 'https://hikarimesindo.com',
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://hikarimesindo.com' }] },
  },
})

// ── Data ──────────────────────────────────────────────────────────────────────
const { categories, getFeatured } = useProducts()
const featuredProducts = getFeatured()

const heroBrands = ['Canon', 'Ricoh', 'Kyocera', 'Konica Minolta', 'Sharp', 'GBC', 'Graphtec']

const stats = [
  { value: '15+', label: 'Tahun Pengalaman' },
  { value: '5.000+', label: 'Pelanggan Puas' },
  { value: '500+', label: 'Produk Tersedia' },
  { value: '34', label: 'Provinsi Terlayani' },
  { value: '24/7', label: 'Support Teknis' },
]

const whyUs = [
  { icon: '🏆', title: 'Produk Berkualitas & Bergaransi', desc: 'Semua produk dijamin original dengan garansi resmi dari produsen dan layanan purna jual terpercaya.' },
  { icon: '💰', title: 'Harga Kompetitif & Transparan', desc: 'Harga terbaik langsung dari distributor. Tidak ada biaya tersembunyi, penawaran terbuka untuk semua.' },
  { icon: '🛠️', title: 'Tim Teknisi Berpengalaman', desc: 'Tim teknisi bersertifikat siap membantu instalasi, pelatihan, dan perbaikan di seluruh wilayah Indonesia.' },
  { icon: '🚚', title: 'Pengiriman ke Seluruh Indonesia', desc: 'Jaringan pengiriman yang luas dengan packing aman memastikan mesin tiba dalam kondisi sempurna.' },
]

const whyCards = [
  { icon: '⭐', stat: '4.9/5', label: 'Rating Pelanggan' },
  { icon: '✅', stat: '98%', label: 'Kepuasan Pelanggan' },
  { icon: '🔧', stat: '<24 Jam', label: 'Waktu Respons Teknis' },
  { icon: '📦', stat: '500+', label: 'Produk Siap Kirim' },
]

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Owner, CV Cepat Print – Surabaya',
    text: 'Sudah 3 tahun berlangganan di Hikarimesindo. Pelayanan cepat, spare part selalu tersedia, dan teknisinya sangat profesional. Mesin fotokopi Canon kami tidak pernah ada masalah.',
  },
  {
    name: 'Siti Rahayu',
    role: 'Manajer, Toko Atk & Percetakan – Bandung',
    text: 'Harga mesin laminating di sini jauh lebih kompetitif dibanding tempat lain. Yang paling penting, garansinya nyata dan after-sales-nya luar biasa responsif.',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Direktur, PT Grafika Nusantara – Jakarta',
    text: 'Mesin digital cutting Graphtec yang kami beli berjalan sempurna. Pemasangan oleh teknisi Hikarimesindo sangat rapi dan training operator berjalan lancar.',
  },
]

const blogPosts = [
  {
    slug: 'tips-memilih-mesin-fotokopi-untuk-kantor',
    title: '7 Tips Memilih Mesin Fotokopi yang Tepat untuk Kebutuhan Kantor Anda',
    excerpt: 'Memilih mesin fotokopi bukan sekadar soal harga. Ada banyak faktor teknis yang perlu dipertimbangkan agar investasi Anda tepat sasaran.',
    category: 'Tips & Panduan',
    date: '12 Mei 2025',
    dateIso: '2025-05-12',
  },
  {
    slug: 'perbedaan-laminating-panas-vs-dingin',
    title: 'Perbedaan Laminating Panas dan Dingin: Mana yang Cocok untuk Bisnis Anda?',
    excerpt: 'Laminating panas dan dingin memiliki keunggulan masing-masing. Pelajari perbedaannya sebelum memutuskan membeli.',
    category: 'Edukasi Mesin',
    date: '5 Mei 2025',
    dateIso: '2025-05-05',
  },
  {
    slug: 'cara-merawat-mesin-fotokopi-agar-tahan-lama',
    title: 'Cara Merawat Mesin Fotokopi agar Lebih Awet dan Hemat Biaya Servis',
    excerpt: 'Perawatan rutin bisa memperpanjang usia mesin fotokopi Anda hingga 2x lipat. Berikut langkah-langkah sederhana yang bisa Anda lakukan sendiri.',
    category: 'Perawatan Mesin',
    date: '28 April 2025',
    dateIso: '2025-04-28',
  },
]

function badgeClass(badge: string) {
  const map: Record<string, string> = {
    'Best Seller': 'badge--gold',
    'Baru': 'badge--green',
    'Promo': 'badge--red',
  }
  return map[badge] ?? ''
}
</script>

<style scoped>
/* ═══ HERO ═══════════════════════════════════════════════════════════════ */
.hero {
  position: relative;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--c-primary-900) 0%, var(--c-primary-700) 50%, var(--c-primary-800) 100%);
  overflow: hidden;
  padding-block: var(--space-20);
}
.hero-bg { position: absolute; inset: 0; pointer-events: none; }
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}
.hero-orb--1 {
  width: 600px; height: 600px;
  top: -200px; left: -100px;
  background: radial-gradient(circle, rgba(39,184,114,0.3) 0%, transparent 70%);
}
.hero-orb--2 {
  width: 400px; height: 400px;
  bottom: -150px; right: -50px;
  background: radial-gradient(circle, rgba(245,200,66,0.2) 0%, transparent 70%);
}
.hero-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
  position: relative;
  z-index: 1;
}
@media (min-width: 1024px) {
  .hero-inner { grid-template-columns: 1.1fr 0.9fr; }
}

.hero-badge {
  margin-bottom: var(--space-5);
  display: inline-flex;
  gap: var(--space-2);
  align-items: center;
}
.badge-dot {
  width: 8px; height: 8px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse-green 2s infinite;
  flex-shrink: 0;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: var(--c-white);
  line-height: 1.1;
  margin-bottom: var(--space-5);
}
.hero-title-em {
  font-style: italic;
  color: var(--c-accent);
}
.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: rgba(255,255,255,0.8);
  line-height: 1.7;
  margin-bottom: var(--space-8);
  max-width: 52ch;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}
.hero-brands { display: flex; align-items: center; gap: var(--space-3); flex-wrap: wrap; }
.hero-brands-label { font-size: 0.8125rem; color: rgba(255,255,255,0.5); white-space: nowrap; }
.hero-brands-list { display: flex; flex-wrap: wrap; gap: var(--space-2); }
.hero-brands-list span {
  font-size: 0.8125rem;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  padding: 0.2rem 0.625rem;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: var(--radius-full);
}

/* ═══ STATS ══════════════════════════════════════════════════════════════ */
.stats-bar {
  background: var(--c-primary-800);
  border-bottom: 1px solid var(--c-primary-700);
}
.stats-inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
}
@media (min-width: 640px)  { .stats-inner { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1024px) { .stats-inner { grid-template-columns: repeat(5, 1fr); } }

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-6) var(--space-4);
  border-right: 1px solid rgba(255,255,255,0.1);
  text-align: center;
}
.stat-item:last-child { border-right: none; }
.stat-number {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--c-white);
  line-height: 1;
}
.stat-label {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.6);
  margin-top: var(--space-1);
}

/* ═══ CATEGORIES ═════════════════════════════════════════════════════════ */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}
@media (min-width: 640px)  { .categories-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1024px) { .categories-grid { grid-template-columns: repeat(4, 1fr); } }

.category-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);
  background: var(--c-white);
  border: 1px solid var(--c-gray-100);
  border-radius: var(--radius-xl);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all var(--duration-slow) var(--ease-smooth);
}
.category-card::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--c-primary-500), var(--c-primary-200));
  transform: scaleX(0);
  transition: transform var(--duration-base) var(--ease-smooth);
}
.category-card:hover::before { transform: scaleX(1); }
.category-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: var(--c-primary-200);
}
.category-card-icon { font-size: 2rem; }
.category-card-title {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--c-gray-900);
  font-family: var(--font-body);
  line-height: 1.3;
}
.category-card-desc {
  font-size: 0.8125rem;
  color: var(--c-gray-500);
  line-height: 1.5;
  flex: 1;
}
.category-card-count {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--c-primary-600);
}
.category-card-arrow {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  width: 18px;
  height: 18px;
  color: var(--c-gray-300);
  transition: all var(--duration-base) var(--ease-spring);
}
.category-card:hover .category-card-arrow {
  color: var(--c-primary-500);
  transform: translateX(3px);
}

/* ═══ PRODUCTS ═══════════════════════════════════════════════════════════ */
.products-section { background: var(--c-gray-50); }
.section-header-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
}
.products-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}
@media (min-width: 640px)  { .products-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .products-grid { grid-template-columns: repeat(3, 1fr); } }

.product-card { display: flex; flex-direction: column; }
.product-card-image-link { display: block; }
.product-card-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: var(--c-gray-50);
}
.product-badge {
  position: absolute;
  top: var(--space-3);
  left: var(--space-3);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
}
.badge--gold { background: #FEF3C7; color: #92400E; }
.badge--green { background: var(--c-primary-100); color: var(--c-primary-800); }
.badge--red { background: #FEE2E2; color: #991B1B; }
.product-out-of-stock {
  position: absolute; inset: 0;
  background: rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--c-gray-500);
  font-size: 0.9375rem;
  backdrop-filter: blur(2px);
}

.product-card-body {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  flex: 1;
}
.product-brand { font-size: 0.75rem; font-weight: 600; color: var(--c-primary-600); text-transform: uppercase; letter-spacing: 0.08em; }
.product-name { font-size: 1rem; font-weight: 700; color: var(--c-gray-900); font-family: var(--font-body); line-height: 1.4; }
.product-name a { color: inherit; text-decoration: none; }
.product-name a:hover { color: var(--c-primary-600); }
.product-short-desc { font-size: 0.875rem; color: var(--c-gray-500); line-height: 1.6; flex: 1; }
.product-card-footer { margin-top: auto; padding-top: var(--space-4); border-top: 1px solid var(--c-gray-100); display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); flex-wrap: wrap; }
.product-price-label { display: block; font-size: 0.6875rem; color: var(--c-gray-400); }
.product-price-value { display: block; font-size: 1rem; font-weight: 700; color: var(--c-primary-700); }
.product-actions { display: flex; gap: var(--space-2); }

/* ═══ WHY US ══════════════════════════════════════════════════════════════ */
.why-section { background: var(--c-primary-50); }
.why-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-16);
  align-items: center;
}
@media (min-width: 1024px) { .why-inner { grid-template-columns: 1fr 1fr; } }

.why-list { display: flex; flex-direction: column; gap: var(--space-6); margin-block: var(--space-8); }
.why-item { display: flex; gap: var(--space-4); align-items: flex-start; }
.why-icon {
  font-size: 1.5rem;
  width: 52px; height: 52px;
  display: flex; align-items: center; justify-content: center;
  background: var(--c-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
}
.why-item-title { font-size: 1rem; font-weight: 700; color: var(--c-gray-900); margin-bottom: var(--space-1); font-family: var(--font-body); }
.why-item-desc { font-size: 0.9rem; color: var(--c-gray-500); line-height: 1.6; }
.why-cta { display: flex; gap: var(--space-3); flex-wrap: wrap; }

.why-card-stack {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}
.why-card {
  background: var(--c-white);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  text-align: center;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--c-gray-100);
  transition: transform var(--duration-slow) var(--ease-spring);
  animation: float 4s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.8s);
}
.why-card-icon { font-size: 2rem; margin-bottom: var(--space-3); }
.why-card-stat { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--c-primary-700); margin-bottom: var(--space-1); }
.why-card-label { font-size: 0.8125rem; color: var(--c-gray-500); }

/* ═══ TESTIMONIALS ════════════════════════════════════════════════════════ */
.testimonials-section { background: var(--c-white); }
.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
}
@media (min-width: 640px)  { .testimonials-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(3, 1fr); } }

.testimonial-card { padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-4); }
.testimonial-stars { display: flex; gap: 2px; }
.testimonial-stars svg { width: 16px; height: 16px; color: #F5C842; }
.testimonial-text { font-size: 0.9375rem; color: var(--c-gray-600); line-height: 1.7; font-style: italic; flex: 1; }
.testimonial-footer { display: flex; align-items: center; gap: var(--space-3); margin-top: auto; }
.testimonial-avatar {
  width: 44px; height: 44px;
  background: linear-gradient(135deg, var(--c-primary-500), var(--c-primary-700));
  border-radius: var(--radius-full);
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 1.125rem; color: white;
  flex-shrink: 0;
}
.testimonial-name { font-weight: 700; font-size: 0.9375rem; color: var(--c-gray-900); font-style: normal; }
.testimonial-role { font-size: 0.8125rem; color: var(--c-gray-500); }

/* ═══ BLOG ════════════════════════════════════════════════════════════════ */
.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}
@media (min-width: 640px)  { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .blog-grid { grid-template-columns: repeat(3, 1fr); } }

.blog-card { display: flex; flex-direction: column; }
.blog-card-image {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}
.blog-category-tag {
  position: absolute;
  top: var(--space-3); left: var(--space-3);
  background: var(--c-primary-600);
  color: white;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.2rem 0.625rem;
  border-radius: var(--radius-full);
}
.blog-card-body {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  flex: 1;
}
.blog-date { font-size: 0.8125rem; color: var(--c-gray-400); }
.blog-title { font-size: 1rem; font-weight: 700; color: var(--c-gray-900); font-family: var(--font-body); line-height: 1.4; }
.blog-title a { color: inherit; text-decoration: none; }
.blog-title a:hover { color: var(--c-primary-600); }
.blog-excerpt { font-size: 0.875rem; color: var(--c-gray-500); line-height: 1.6; flex: 1; }
.blog-read-more {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--c-primary-600);
  margin-top: auto;
  padding-top: var(--space-3);
  transition: gap var(--duration-fast);
  text-decoration: none;
}
.blog-read-more:hover { gap: var(--space-2); }

/* ═══ CTA ════════════════════════════════════════════════════════════════ */
.cta-section {
  position: relative;
  padding-block: var(--space-24);
  background: linear-gradient(135deg, var(--c-primary-900) 0%, var(--c-primary-700) 100%);
  overflow: hidden;
  text-align: center;
}
.cta-bg { position: absolute; inset: 0; pointer-events: none; }
.cta-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}
.cta-orb--1 {
  width: 500px; height: 500px;
  top: -200px; left: -100px;
  background: radial-gradient(circle, rgba(39,184,114,0.25) 0%, transparent 70%);
}
.cta-orb--2 {
  width: 400px; height: 400px;
  bottom: -150px; right: -100px;
  background: radial-gradient(circle, rgba(245,200,66,0.2) 0%, transparent 70%);
}
.cta-inner { position: relative; z-index: 1; }
.cta-content { max-width: 680px; margin-inline: auto; }
.cta-title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--c-white);
  margin-bottom: var(--space-4);
}
.cta-subtitle {
  font-size: 1.0625rem;
  color: rgba(255,255,255,0.75);
  line-height: 1.7;
  margin-bottom: var(--space-8);
}
.cta-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-4);
}
</style>