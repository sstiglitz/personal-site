import type { PageProps } from '$fresh/server.ts'

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>netsplit</title>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/@picocss/pico@next/css/pico.min.css'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github-dark.min.css'
        >
        </link>
        <link rel='stylesheet' href='/styles.css' />
        <script src='https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/lib/index.min.js'>
        </script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  )
}
