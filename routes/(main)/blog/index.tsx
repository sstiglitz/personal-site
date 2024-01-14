import type { Handlers, PageProps, FreshContext } from '$fresh/server.ts'
import { extract } from '$std/front_matter/any.ts'
import { Head } from '$fresh/runtime.ts'

type BlogItem = {
  title: string
  date: Date
  slug: string
  draft?: boolean
}

interface Page {
  blogList: BlogItem[]
}

export const handler: Handlers<Page> = {
  async GET(req: Request, ctx: FreshContext) {
    const dirList: Deno.DirEntry[] = []
    const dir = 'routes/(main)/blog'

    const url = new URL(req.url)
    const showDrafts = url.searchParams.get('draft') === 'true'

    for await (const dirEntry of Deno.readDir(dir)) {
      dirList.push(dirEntry)
    }

    const blogList = dirList
      .filter((file) => file.name.endsWith('.md'))
      .map((file) => {
        const fullPath = `${dir}/${file.name}`
        const rawMarkdown = Deno.readTextFileSync(fullPath)
        const { attrs } = extract(rawMarkdown)

        return {
          title: attrs.title,
          date: attrs.date,
          slug: file.name.replace(/\.mdx$|\.md$/g, ''),
          draft: attrs.draft,
        } as BlogItem
      })
      .filter((bi) => showDrafts || bi.draft === undefined || !bi.draft)
      .sort((a, b) => (a.date > b.date ? -1 : 1))

    return ctx.render({ blogList })
  },
}

export default (props: PageProps<Page>) => {
  // Using "sv" is a hacky way to get ISO date formatting.
  const dateFormatter = new Intl.DateTimeFormat('sv', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'UTC',
  })

  return (
    <>
      <Head>
        <title>blog | netsplit</title>
        <meta name='description' content='Sometimes I write things.' />
      </Head>
      <h1>Blog</h1>
      <ul className='no-style'>
        {props.data.blogList.map((bl) => (
          <li key={bl.slug}>
            <a href={`/blog/${bl.slug}`}>{bl.title}</a>
            <small>{dateFormatter.format(bl.date)}</small>
          </li>
        ))}
      </ul>
    </>
  )
}
