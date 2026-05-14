/**
 * useSEO — Composable untuk mengatur meta tag SEO di setiap halaman
 * Nuxt 4 compatible (useHead, useSeoMeta)
 */
interface SeoOptions {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  canonical?: string
  noindex?: boolean
  schema?: Record<string, unknown>
}

export function useSEO(opts: SeoOptions) {
  const config = useRuntimeConfig()
  const route = useRoute()

  const siteUrl = config.public.siteUrl as string
  const siteName = config.public.siteName as string

  const fullTitle = opts.title.includes(siteName)
    ? opts.title
    : `${opts.title} | ${siteName}`

  const canonical = opts.canonical ?? `${siteUrl}${route.path}`
  const ogImage = opts.ogImage ?? `${siteUrl}/images/og-image.jpg`

  useSeoMeta({
    title: fullTitle,
    ogTitle: fullTitle,
    twitterTitle: fullTitle,

    description: opts.description,
    ogDescription: opts.description,
    twitterDescription: opts.description,

    ogImage,
    twitterImage: ogImage,
    ogUrl: canonical,

    robots: opts.noindex ? 'noindex,nofollow' : 'index,follow',
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
    ...(opts.keywords && {
      meta: [{ name: 'keywords', content: opts.keywords }],
    }),
    ...(opts.schema && {
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(opts.schema),
      }],
    }),
  })
}