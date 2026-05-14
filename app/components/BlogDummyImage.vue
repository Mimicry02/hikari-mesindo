<template>
  <div class="blog-image-wrapper">
    <img 
      src="https://placehold.co/800x400/10b981/ffffff?text=Gambar+Artikel+Blog" 
      alt="Dummy Gambar Blog" 
      class="dummy-img"
    />
  </div>
</template>

<style scoped>
.blog-image-wrapper {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}

.dummy-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.dummy-img:hover {
  transform: scale(1.05);
}
</style>