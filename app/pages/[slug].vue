<template>
  <div v-if="product" class="produk-detail">

    <!-- Breadcrumb -->
    <div class="detail-breadcrumb-bar">
      <div class="container">
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb-list">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li>/</li>
            <li><NuxtLink to="/produk">Produk</NuxtLink></li>
            <li>/</li>
            <li><NuxtLink :to="`/produk?kategori=${product.categorySlug}`">{{ product.category }}</NuxtLink></li>
            <li>/</li>
            <li aria-current="page">{{ product.name }}</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container detail-layout">

      <!-- Left: Images -->
      <div class="detail-gallery">
        <div class="gallery-main">
          <ProductDummyImage :category="product.categorySlug" :name="product.name" />
          <div v-if="product.badge" class="gallery-badge" :class="badgeClass(product.badge)">{{ product.badge }}</div>
        </div>
        <div class="gallery-thumbnails">
          <button v-for="(_, i) in 3" :key="i" class="thumb-btn" :class="{ active: i === 0 }">
            <ProductDummyImage :category="product.categorySlug" :name="product.name" />
          </button>
        </div>
      </div>

      <!-- Right: Info -->
      <div class="detail-info">
        <div class="detail-tags">
          <span class="badge badge-green">{{ product.category }}</span>
          <span v-if="product.isNew" class="badge" style="background:#dcfce7;color:#166534">Produk Baru</span>
          <span v-if="!product.inStock" class="badge" style="background:#fee2e2;color:#991b1b">Stok Habis</span>
        </div>

        <p class="detail-brand">{{ product.brand }}</p>
        <h1 class="detail-title">{{ product.name }}</h1>

        <div class="detail-rating">
          <div class="stars">
            <svg v-for="s in 5" :key="s" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>
          <span class="rating-text">4.9 (47 ulasan)</span>
        </div>

        <p class="detail-desc">{{ product.description }}</p>

        <div class="detail-price">
          <span class="detail-price-label">Harga Mulai</span>
          <strong class="detail-price-value">{{ product.priceLabel }}</strong>
          <span class="detail-price-note">*Harga dapat berubah. Hubungi kami untuk penawaran terbaik.</span>
        </div>

        <div class="detail-actions">
          <a
            :href="`https://wa.me/6281234567890?text=Halo%20Hikarimesindo%2C%20saya%20ingin%20memesan%20${encodeURIComponent(product.name)}.%20Mohon%20informasi%20harga%20dan%20ketersediaan%20stok.`"
            target="_blank" rel="noopener noreferrer"
            class="btn btn-primary btn-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Pesan via WhatsApp
          </a>
          <a href="tel:+62211234567890" class="btn btn-outline btn-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            Telepon Sekarang
          </a>
        </div>

        <!-- Guarantees -->
        <div class="detail-guarantees">
          <div v-for="g in guarantees" :key="g.label" class="guarantee-item">
            <span class="guarantee-icon">{{ g.icon }}</span>
            <span class="guarantee-label">{{ g.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Specs + Description Tabs -->
    <div class="container detail-tabs-section">
      <div class="tabs-header">
        <button class="tab-btn" :class="{ active: activeTab === 'desc' }" @click="activeTab = 'desc'">Deskripsi</button>
        <button class="tab-btn" :class="{ active: activeTab === 'spec' }" @click="activeTab = 'spec'">Spesifikasi</button>
        <button class="tab-btn" :class="{ active: activeTab === 'review' }" @click="activeTab = 'review'">Ulasan (47)</button>
      </div>
      <div class="tab-content">
        <div v-show="activeTab === 'desc'" class="tab-panel">
          <p>{{ product.description }}</p>
          <p style="margin-top:1rem;color:var(--c-gray-500)">
            Untuk informasi lebih lengkap mengenai produk ini, termasuk demo mesin dan uji coba, silakan hubungi tim kami melalui WhatsApp atau telepon.
          </p>
        </div>
        <div v-show="activeTab === 'spec'" class="tab-panel">
          <table class="spec-table">
            <tbody>
              <tr v-for="(value, key) in product.specs" :key="key">
                <th>{{ key }}</th>
                <td>{{ value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-show="activeTab === 'review'" class="tab-panel review-placeholder">
          <div class="review-summary">
            <div class="review-score">
              <span class="review-score-num">4.9</span>
              <div class="review-score-stars">
                <svg v-for="s in 5" :key="s" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              </div>
              <span style="font-size:0.875rem;color:var(--c-gray-400)">dari 47 ulasan</span>
            </div>
          </div>
          <p style="color:var(--c-gray-500);text-align:center;padding:2rem 0">
            Ulasan dari pelanggan terverifikasi akan ditampilkan di sini.
          </p>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div class="container" style="padding-bottom:var(--space-20)">
      <div class="section-header">
        <p class="section-label">Produk Terkait</p>
        <h2 class="section-title">Mungkin Anda Tertarik</h2>
        <div class="divider"></div>
      </div>
      <div class="related-grid">
        <article v-for="rel in relatedProducts" :key="rel.id" class="product-card card">
          <NuxtLink :to="`/produk/${rel.slug}`" class="rel-img-link">
            <div class="rel-img">
              <ProductDummyImage :category="rel.categorySlug" :name="rel.name" />
            </div>
          </NuxtLink>
          <div class="rel-body">
            <p class="product-brand">{{ rel.brand }}</p>
            <h3 class="product-name"><NuxtLink :to="`/produk/${rel.slug}`">{{ rel.name }}</NuxtLink></h3>
            <strong class="price-val">{{ rel.priceLabel }}</strong>
          </div>
        </article>
      </div>
    </div>

  </div>

  <!-- Not Found -->
  <div v-else class="not-found">
    <div class="container">
      <div style="text-align:center;padding:var(--space-20) 0">
        <div style="font-size:4rem;margin-bottom:1rem">🔍</div>
        <h1>Produk Tidak Ditemukan</h1>
        <p style="color:var(--c-gray-500);margin:1rem 0">Produk yang Anda cari tidak tersedia atau sudah tidak dijual.</p>
        <NuxtLink to="/produk" class="btn btn-primary">Kembali ke Katalog</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductDummyImage from '~/components/ProductDummyImage.vue'

const route = useRoute()
const { getBySlug, products } = useProducts()

const product = computed(() => getBySlug(route.params.slug as string))
const activeTab = ref('desc')

const relatedProducts = computed(() =>
  product.value
    ? products.filter(p => p.categorySlug === product.value!.categorySlug && p.id !== product.value!.id).slice(0, 4)
    : []
)

// SEO - only runs when product exists
watchEffect(() => {
  if (product.value) {
    useSeoMeta({
      title: `${product.value.name} | Hikarimesindo`,
      ogTitle: `${product.value.name} | Hikarimesindo`,
      description: product.value.shortDesc,
      ogDescription: product.value.shortDesc,
    })
    useHead({
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.value.name,
          description: product.value.description,
          brand: { '@type': 'Brand', name: product.value.brand },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'IDR',
            price: product.value.price,
            availability: product.value.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            seller: { '@type': 'Organization', name: 'Hikarimesindo' },
          },
        }),
      }],
    })
  }
})

const guarantees = [
  { icon: '🛡️', label: 'Garansi Resmi 1 Tahun' },
  { icon: '🚚', label: 'Gratis Ongkos Kirim' },
  { icon: '🔧', label: 'Instalasi oleh Teknisi' },
  { icon: '📞', label: 'Support 24/7' },
]

function badgeClass(badge: string) {
  return { 'Best Seller': 'badge--gold', 'Baru': 'badge--green', 'Promo': 'badge--red' }[badge] ?? ''
}
</script>

<style scoped>
.detail-breadcrumb-bar {
  background: var(--c-gray-50);
  border-bottom: 1px solid var(--c-gray-100);
  padding-block: var(--space-3);
}
.breadcrumb-list {
  display: flex; flex-wrap: wrap; gap: var(--space-2);
  font-size: 0.8125rem; color: var(--c-gray-400);
}
.breadcrumb-list a { color: var(--c-gray-500); }
.breadcrumb-list a:hover { color: var(--c-primary-600); }
.breadcrumb-list [aria-current] { color: var(--c-gray-700); font-weight: 500; }

.detail-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-10);
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);
}
@media (min-width: 1024px) { .detail-layout { grid-template-columns: 1fr 1fr; } }

/* Gallery */
.gallery-main {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: var(--radius-xl);
  border: 1px solid var(--c-gray-100);
  background: var(--c-gray-50);
}
.gallery-badge {
  position: absolute; top: 1rem; left: 1rem;
  padding: 0.25rem 0.875rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem; font-weight: 700;
}
.badge--gold { background: #FEF3C7; color: #92400E; }
.badge--green { background: var(--c-primary-100); color: var(--c-primary-800); }
.badge--red { background: #FEE2E2; color: #991B1B; }
.gallery-thumbnails { display: flex; gap: var(--space-3); margin-top: var(--space-3); }
.thumb-btn {
  flex: 1;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: var(--radius-md);
  border: 2px solid transparent;
  transition: border-color var(--duration-fast);
  background: var(--c-gray-50);
}
.thumb-btn.active { border-color: var(--c-primary-500); }

/* Info */
.detail-tags { display: flex; gap: var(--space-2); flex-wrap: wrap; margin-bottom: var(--space-4); }
.detail-brand { font-size: 0.875rem; font-weight: 700; color: var(--c-primary-600); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: var(--space-2); }
.detail-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--c-gray-900);
  margin-bottom: var(--space-3);
  line-height: 1.2;
}
.detail-rating { display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-4); }
.stars { display: flex; gap: 2px; }
.stars svg { width: 16px; height: 16px; color: #F5C842; }
.rating-text { font-size: 0.875rem; color: var(--c-gray-500); }
.detail-desc { color: var(--c-gray-600); line-height: 1.7; margin-bottom: var(--space-5); }

.detail-price {
  background: var(--c-primary-50);
  border: 1px solid var(--c-primary-100);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  margin-bottom: var(--space-6);
}
.detail-price-label { display: block; font-size: 0.75rem; color: var(--c-gray-500); margin-bottom: var(--space-1); }
.detail-price-value { display: block; font-size: 1.75rem; font-weight: 800; color: var(--c-primary-700); font-family: var(--font-display); }
.detail-price-note { display: block; font-size: 0.75rem; color: var(--c-gray-400); margin-top: var(--space-2); }

.detail-actions { display: flex; gap: var(--space-3); flex-wrap: wrap; margin-bottom: var(--space-6); }
.detail-actions .btn { flex: 1; min-width: 140px; justify-content: center; }

.detail-guarantees {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
  padding-top: var(--space-5);
  border-top: 1px solid var(--c-gray-100);
}
.guarantee-item { display: flex; align-items: center; gap: var(--space-2); font-size: 0.8125rem; color: var(--c-gray-600); }
.guarantee-icon { font-size: 1.125rem; }
.guarantee-label { font-weight: 500; }

/* Tabs */
.detail-tabs-section { padding-bottom: var(--space-10); }
.tabs-header { display: flex; gap: 0; border-bottom: 2px solid var(--c-gray-100); margin-bottom: var(--space-6); }
.tab-btn {
  padding: var(--space-3) var(--space-5);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--c-gray-500);
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all var(--duration-fast);
  background: none;
}
.tab-btn.active { color: var(--c-primary-600); border-bottom-color: var(--c-primary-600); font-weight: 600; }
.tab-panel { line-height: 1.8; color: var(--c-gray-700); }

.spec-table { width: 100%; border-collapse: collapse; }
.spec-table th, .spec-table td { padding: var(--space-3) var(--space-4); text-align: left; border-bottom: 1px solid var(--c-gray-100); font-size: 0.9375rem; }
.spec-table th { font-weight: 600; color: var(--c-gray-700); background: var(--c-gray-50); width: 40%; }
.spec-table td { color: var(--c-gray-600); }

.review-summary { display: flex; justify-content: center; padding: var(--space-4) 0; }
.review-score { display: flex; flex-direction: column; align-items: center; gap: var(--space-2); }
.review-score-num { font-size: 3rem; font-weight: 800; color: var(--c-primary-700); font-family: var(--font-display); line-height: 1; }
.review-score-stars { display: flex; gap: 2px; }
.review-score-stars svg { width: 20px; height: 20px; color: #F5C842; }

/* Related */
.related-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
}
@media (min-width: 768px) { .related-grid { grid-template-columns: repeat(4, 1fr); } }
.product-card { display: flex; flex-direction: column; }
.rel-img-link { display: block; }
.rel-img { aspect-ratio: 4/3; overflow: hidden; background: var(--c-gray-50); }
.rel-body { padding: var(--space-4); display: flex; flex-direction: column; gap: var(--space-2); }
.product-brand { font-size: 0.6875rem; font-weight: 700; color: var(--c-primary-600); text-transform: uppercase; letter-spacing: 0.08em; }
.product-name { font-size: 0.875rem; font-weight: 700; font-family: var(--font-body); }
.product-name a { color: var(--c-gray-900); text-decoration: none; }
.product-name a:hover { color: var(--c-primary-600); }
.price-val { font-size: 0.9375rem; font-weight: 700; color: var(--c-primary-700); }
</style>