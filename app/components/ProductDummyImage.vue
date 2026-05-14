<template>
  <div class="dummy-img" :style="{ background: bgColor }">
    <div class="dummy-icon">{{ icon }}</div>
    <div class="dummy-label">{{ name }}</div>
    <div class="dummy-badge">Gambar Produk</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ category: string; name: string }>()

const categoryMap: Record<string, { icon: string; bg: string }> = {
  'fotokopi':        { icon: '🖨️', bg: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' },
  'laminating':      { icon: '📄', bg: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' },
  'digital-printing':{ icon: '🖼️', bg: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)' },
  'cutting':         { icon: '✂️', bg: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)' },
  'binding':         { icon: '📚', bg: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)' },
  'creasing':        { icon: '📐', bg: 'linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)' },
  'sparepart':       { icon: '🔧', bg: 'linear-gradient(135deg, #efebe9 0%, #d7ccc8 100%)' },
}

const mapped = computed(() => categoryMap[props.category] ?? { icon: '📦', bg: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)' })
const icon = computed(() => mapped.value.icon)
const bgColor = computed(() => mapped.value.bg)
</script>

<style scoped>
.dummy-img {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: transform var(--duration-slow) var(--ease-smooth);
}
.dummy-img:hover { transform: scale(1.04); }
.dummy-icon { font-size: 3.5rem; }
.dummy-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--c-gray-600);
  text-align: center;
  padding: 0 1rem;
  line-height: 1.3;
  max-width: 160px;
}
.dummy-badge {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--c-gray-400);
  background: rgba(255,255,255,0.6);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-full);
}
</style>