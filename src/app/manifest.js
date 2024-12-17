export default function manifest() {
  return {
    name: 'Out-Of-Ore',
    short_name: 'ooore',
    description: 'Out of Ore web',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    // screenshots: [
    //   {
    //     src: '/screenshots/screenshot-wide.png',
    //     sizes: '1920x1080',
    //     type: 'image/png',
    //     form_factor: 'wide', // Desktop or wide screen
    //   },
    //   {
    //     src: '/screenshots/screenshot-mobile.png',
    //     sizes: '1080x1920',
    //     type: 'image/png',
    //     form_factor: 'narrow', // Mobile or narrow screen
    //   },
    // ],
  }
}