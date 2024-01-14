import type { PageProps } from '$fresh/server.ts'

export default ({ Component }: PageProps) => {
  const navigation = [
    // { name: 'blog', href: '/blog' },
    { name: 'about', href: '/md/about' },
    { name: 'contact', href: '/md/contact' },
  ]

  return (
    <>
      <header className='container'>
        <nav>
          <ul>
            <li>
              <h3 className='brand'>
                <a href='/'>netsplit.dev</a>
              </h3>
            </li>
            {navigation.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className='container'>
        <Component />
      </main>
      <footer className='container'>
        <hr></hr>
        <small>
          The content for this site is CC-BY-SA. The code for this site is MIT.
        </small>
      </footer>
    </>
  )
}
