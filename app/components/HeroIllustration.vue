<template>
  <div class="hero-illus" aria-hidden="true">
    <svg viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" class="illus-svg">
      <!-- Background card -->
      <rect x="30" y="20" width="420" height="340" rx="24" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>

      <!-- Photocopier body -->
      <rect x="90" y="90" width="300" height="200" rx="16" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
      <rect x="90" y="90" width="300" height="50" rx="16" fill="rgba(255,255,255,0.18)"/>

      <!-- Screen -->
      <rect x="110" y="105" width="120" height="22" rx="6" fill="rgba(39,184,114,0.6)"/>
      <rect x="115" y="110" width="80" height="3" rx="2" fill="rgba(255,255,255,0.5)"/>
      <rect x="115" y="116" width="60" height="3" rx="2" fill="rgba(255,255,255,0.35)"/>
      <rect x="115" y="122" width="70" height="3" rx="2" fill="rgba(255,255,255,0.25)"/>

      <!-- Buttons panel -->
      <circle cx="265" cy="112" r="6" fill="rgba(245,200,66,0.8)"/>
      <circle cx="285" cy="112" r="6" fill="rgba(39,184,114,0.8)"/>
      <circle cx="305" cy="112" r="6" fill="rgba(255,100,100,0.6)"/>
      <rect x="260" y="123" width="60" height="10" rx="3" fill="rgba(255,255,255,0.15)"/>

      <!-- Paper tray top -->
      <rect x="110" y="155" width="260" height="6" rx="3" fill="rgba(255,255,255,0.25)"/>
      <!-- Paper stack -->
      <rect x="125" y="162" width="230" height="4" rx="2" fill="rgba(255,255,255,0.35)"/>
      <rect x="125" y="168" width="230" height="4" rx="2" fill="rgba(255,255,255,0.28)"/>
      <rect x="125" y="174" width="230" height="4" rx="2" fill="rgba(255,255,255,0.22)"/>

      <!-- Output tray -->
      <rect x="105" y="255" width="270" height="18" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>

      <!-- Animated paper output -->
      <rect class="paper-anim" x="150" y="250" width="180" height="3" rx="1.5" fill="rgba(255,255,255,0.7)"/>

      <!-- Control panel dots -->
      <circle cx="140" cy="200" r="4" fill="rgba(39,184,114,0.9)"/>
      <circle cx="155" cy="200" r="4" fill="rgba(255,255,255,0.3)"/>
      <circle cx="170" cy="200" r="4" fill="rgba(255,255,255,0.3)"/>

      <!-- Status bar -->
      <rect x="200" y="195" width="150" height="14" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <rect x="203" y="198" width="80" height="8" rx="2" fill="rgba(39,184,114,0.6)"/>

      <!-- Floating stats cards -->
      <!-- Card 1 -->
      <g class="float-card-1">
        <rect x="20" y="60" width="110" height="60" rx="12" fill="rgba(255,255,255,0.95)" filter="url(#shadow1)"/>
        <text x="32" y="84" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#6b7c72">Total Cetak</text>
        <text x="32" y="100" font-family="'Fraunces', serif" font-size="18" font-weight="700" fill="#0f7d49">5.248</text>
        <circle cx="110" cy="80" r="14" fill="rgba(39,184,114,0.1)"/>
        <text x="104" y="85" font-size="14">🖨️</text>
      </g>

      <!-- Card 2 -->
      <g class="float-card-2">
        <rect x="350" y="45" width="110" height="60" rx="12" fill="rgba(255,255,255,0.95)" filter="url(#shadow1)"/>
        <text x="362" y="69" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#6b7c72">Hemat Toner</text>
        <text x="362" y="85" font-family="'Fraunces', serif" font-size="18" font-weight="700" fill="#0f7d49">28%</text>
        <circle cx="440" cy="65" r="14" fill="rgba(245,200,66,0.15)"/>
        <text x="434" y="70" font-size="14">♻️</text>
      </g>

      <!-- Card 3 -->
      <g class="float-card-3">
        <rect x="340" y="265" width="120" height="60" rx="12" fill="rgba(255,255,255,0.95)" filter="url(#shadow1)"/>
        <text x="352" y="289" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#6b7c72">Status Mesin</text>
        <text x="352" y="305" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="#0f7d49">● Online</text>
        <text x="352" y="318" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#95a89e">Kondisi Optimal</text>
      </g>

      <!-- Decorative dots -->
      <circle cx="60" cy="310" r="40" fill="rgba(39,184,114,0.08)" />
      <circle cx="60" cy="310" r="25" fill="rgba(39,184,114,0.08)" />
      <circle cx="60" cy="310" r="8" fill="rgba(39,184,114,0.2)" />

      <circle cx="420" cy="340" r="30" fill="rgba(245,200,66,0.08)" />
      <circle cx="420" cy="340" r="16" fill="rgba(245,200,66,0.1)" />

      <defs>
        <filter id="shadow1" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(10,15,13,0.15)"/>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.hero-illus {
  display: flex;
  align-items: center;
  justify-content: center;
}
.illus-svg {
  width: 100%;
  max-width: 480px;
  filter: drop-shadow(0 20px 60px rgba(0,0,0,0.3));
}
.paper-anim {
  animation: paper-slide 2.5s ease-in-out infinite;
}
.float-card-1 { animation: float 5s ease-in-out infinite; }
.float-card-2 { animation: float 5s ease-in-out infinite; animation-delay: 1.5s; }
.float-card-3 { animation: float 5s ease-in-out infinite; animation-delay: 3s; }

@keyframes paper-slide {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(8px); opacity: 0.6; }
}
</style>