import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shady Shanab',
    short_name: 'Shady Shanab',
    description: 'Shady Shanab — Web & App Developer | UX Designer',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/assets/img/logo/darklogo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/img/logo/darklogo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
