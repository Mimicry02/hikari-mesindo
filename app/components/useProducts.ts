export interface Product {
  id: number
  slug: string
  name: string
  brand: string
  category: string
  categorySlug: string
  price: number | null
  priceLabel: string
  description: string
  shortDesc: string
  specs: Record<string, string>
  badge?: string
  isNew?: boolean
  isBestSeller?: boolean
  image: string
  images: string[]
  inStock: boolean
}

export interface Category {
  slug: string
  name: string
  icon: string
  description: string
  count: number
}

export function useProducts() {
  const categories: Category[] = [
    { slug: 'fotokopi',        name: 'Mesin Fotokopi',      icon: '🖨️', description: 'Mesin fotokopi multifungsi untuk kantor dan percetakan', count: 24 },
    { slug: 'laminating',      name: 'Mesin Laminating',    icon: '📄', description: 'Laminating panas & dingin berbagai ukuran', count: 18 },
    { slug: 'digital-printing', name: 'Digital Printing',   icon: '🖼️', description: 'Printer format besar, sublimasi, dan DTF', count: 15 },
    { slug: 'cutting',         name: 'Digital Cutting',     icon: '✂️', description: 'Mesin cutting stiker, vinyl, dan berbagai media', count: 12 },
    { slug: 'binding',         name: 'Mesin Binding',       icon: '📚', description: 'Spiral, hard cover, dan perfect binding', count: 10 },
    { slug: 'creasing',        name: 'Mesin Creasing',      icon: '📐', description: 'Lipat, potong, dan perforasi dokumen', count: 8 },
    { slug: 'sparepart',       name: 'Spare Part',          icon: '🔧', description: 'Spare part original & compatible semua merek', count: 50 },
  ]

  const products: Product[] = [
    {
      id: 1,
      slug: 'canon-imagerunner-advance-dx-4825i',
      name: 'Canon imageRUNNER ADVANCE DX 4825i',
      brand: 'Canon',
      category: 'Mesin Fotokopi',
      categorySlug: 'fotokopi',
      price: 45000000,
      priceLabel: 'Rp 45.000.000',
      shortDesc: 'Mesin fotokopi A3 multifungsi 25 ppm, WiFi, cloud printing, touchscreen 10".',
      description: 'Canon imageRUNNER ADVANCE DX 4825i adalah solusi percetakan kantor yang andal. Dengan kecepatan cetak 25 ppm dan fitur cloud printing terintegrasi, mesin ini sempurna untuk kebutuhan bisnis modern.',
      specs: { 'Kecepatan Cetak': '25 ppm', 'Ukuran Kertas': 'A3 / A4', 'RAM': '3 GB', 'HDD': '250 GB', 'Garansi': '1 Tahun' },
      badge: 'Best Seller',
      isBestSeller: true,
      image: '/images/products/dummy-fotokopi-1.svg',
      images: ['/images/products/dummy-fotokopi-1.svg'],
      inStock: true,
    },
    {
      id: 2,
      slug: 'ricoh-im-c3000',
      name: 'Ricoh IM C3000',
      brand: 'Ricoh',
      category: 'Mesin Fotokopi',
      categorySlug: 'fotokopi',
      price: 52000000,
      priceLabel: 'Rp 52.000.000',
      shortDesc: 'Mesin fotokopi warna A3 30 ppm, touch panel 10.1", smart operation panel.',
      description: 'Ricoh IM C3000 menghadirkan kualitas cetak warna yang superior dengan panel operasi cerdas yang mudah digunakan.',
      specs: { 'Kecepatan Cetak': '30 ppm', 'Resolusi': '1200×1200 dpi', 'Ukuran Kertas': 'A3 / A4', 'Garansi': '1 Tahun' },
      badge: 'Baru',
      isNew: true,
      image: '/images/products/dummy-fotokopi-2.svg',
      images: ['/images/products/dummy-fotokopi-2.svg'],
      inStock: true,
    },
    {
      id: 3,
      slug: 'kyocera-taskalfa-2553ci',
      name: 'Kyocera TASKalfa 2553ci',
      brand: 'Kyocera',
      category: 'Mesin Fotokopi',
      categorySlug: 'fotokopi',
      price: 48000000,
      priceLabel: 'Rp 48.000.000',
      shortDesc: 'Multifungsi warna A3 25 ppm, drum life panjang, hemat toner.',
      description: 'Kyocera TASKalfa 2553ci terkenal dengan biaya operasional rendah berkat teknologi drum dan toner berumur panjang.',
      specs: { 'Kecepatan Cetak': '25 ppm', 'Drum Life': '600.000 halaman', 'Ukuran Kertas': 'A3 / A4', 'Garansi': '1 Tahun' },
      image: '/images/products/dummy-fotokopi-3.svg',
      images: ['/images/products/dummy-fotokopi-3.svg'],
      inStock: true,
    },
    {
      id: 4,
      slug: 'mesin-laminating-royal-sovereign-rsl-2702s',
      name: 'Royal Sovereign RSL-2702S',
      brand: 'Royal Sovereign',
      category: 'Mesin Laminating',
      categorySlug: 'laminating',
      price: 8500000,
      priceLabel: 'Rp 8.500.000',
      shortDesc: 'Mesin laminating A2 panas/dingin, kecepatan 600 mm/menit, layar LED.',
      description: 'Royal Sovereign RSL-2702S adalah mesin laminating profesional untuk percetakan dengan lebar 27 inci dan sistem panas/dingin.',
      specs: { 'Lebar Maksimal': '700 mm', 'Kecepatan': '0-600 mm/mnt', 'Suhu': '60-140°C', 'Garansi': '1 Tahun' },
      badge: 'Best Seller',
      isBestSeller: true,
      image: '/images/products/dummy-laminating-1.svg',
      images: ['/images/products/dummy-laminating-1.svg'],
      inStock: true,
    },
    {
      id: 5,
      slug: 'mesin-laminating-gbc-catena-65',
      name: 'GBC Catena 65',
      brand: 'GBC',
      category: 'Mesin Laminating',
      categorySlug: 'laminating',
      price: 12000000,
      priceLabel: 'Rp 12.000.000',
      shortDesc: 'Laminating sistem dingin untuk banner & poster, lebar 65 cm.',
      description: 'GBC Catena 65 ideal untuk laminating poster dan banner dalam jumlah besar dengan sistem dingin yang aman untuk media sensitif panas.',
      specs: { 'Lebar Maksimal': '650 mm', 'Sistem': 'Dingin', 'Kecepatan': '1.200 mm/mnt', 'Garansi': '1 Tahun' },
      image: '/images/products/dummy-laminating-2.svg',
      images: ['/images/products/dummy-laminating-2.svg'],
      inStock: true,
    },
    {
      id: 6,
      slug: 'digital-cutting-graphtec-fc9000-60',
      name: 'Graphtec FC9000-60',
      brand: 'Graphtec',
      category: 'Digital Cutting',
      categorySlug: 'cutting',
      price: 28000000,
      priceLabel: 'Rp 28.000.000',
      shortDesc: 'Cutting plotter profesional 61 cm, kecepatan 1050 mm/s, presisi tinggi.',
      description: 'Graphtec FC9000-60 adalah cutting plotter kelas atas untuk produksi stiker, signage, dan label dengan akurasi luar biasa.',
      specs: { 'Lebar Cutting': '584 mm', 'Kecepatan': '1050 mm/s', 'Tekanan': '10-750 gf', 'Garansi': '1 Tahun' },
      badge: 'Promo',
      image: '/images/products/dummy-cutting-1.svg',
      images: ['/images/products/dummy-cutting-1.svg'],
      inStock: true,
    },
    {
      id: 7,
      slug: 'mesin-binding-duplo-db-280',
      name: 'Duplo DB-280',
      brand: 'Duplo',
      category: 'Mesin Binding',
      categorySlug: 'binding',
      price: 18500000,
      priceLabel: 'Rp 18.500.000',
      shortDesc: 'Mesin binding spiral otomatis, kapasitas 500 lembar/jam.',
      description: 'Duplo DB-280 menghadirkan efisiensi tinggi dalam proses binding spiral dengan sistem otomatis yang mudah dioperasikan.',
      specs: { 'Kapasitas': '500 buku/jam', 'Diameter Kawat': '6-38 mm', 'Ukuran Kertas': 'A4 / A5 / B5', 'Garansi': '1 Tahun' },
      image: '/images/products/dummy-binding-1.svg',
      images: ['/images/products/dummy-binding-1.svg'],
      inStock: false,
    },
    {
      id: 8,
      slug: 'mesin-fotokopi-sharp-mx-m465n',
      name: 'Sharp MX-M465N',
      brand: 'Sharp',
      category: 'Mesin Fotokopi',
      categorySlug: 'fotokopi',
      price: 38000000,
      priceLabel: 'Rp 38.000.000',
      shortDesc: 'Fotokopi A3 hitam-putih 46 ppm, layar sentuh 10.1", OCR built-in.',
      description: 'Sharp MX-M465N adalah pilihan tepat untuk volume cetak tinggi dengan fitur OCR bawaan dan konektivitas lengkap.',
      specs: { 'Kecepatan Cetak': '46 ppm', 'Resolusi': '1200 dpi', 'Kapasitas Kertas': '2.600 lembar', 'Garansi': '1 Tahun' },
      image: '/images/products/dummy-fotokopi-4.svg',
      images: ['/images/products/dummy-fotokopi-4.svg'],
      inStock: true,
    },
  ]

  function getByCategory(slug: string) {
    return products.filter(p => p.categorySlug === slug)
  }

  function getBySlug(slug: string) {
    return products.find(p => p.slug === slug) ?? null
  }

  function getFeatured() {
    return products.filter(p => p.isBestSeller || p.isNew).slice(0, 6)
  }

  function formatPrice(price: number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price)
  }

  return { products, categories, getByCategory, getBySlug, getFeatured, formatPrice }
}