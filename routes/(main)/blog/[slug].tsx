import { Head } from '$fresh/runtime.ts'
import type { FreshContext, Handlers, RouteContext } from '$fresh/server.ts'
import hljs from 'npm:highlight.js@11.9.0'
import { markedHighlight } from 'npm:marked-highlight@2.1.0'
import { Marked } from 'npm:marked@11.1.1'
import { GET } from '../../../utils.ts'

const marked = new Marked(markedHighlight({
  highlight(code, lang, info) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
}))

type Page = {
  // deno-lint-ignore no-explicit-any
  attrs: Record<string, any>
  body: string
}

export const handler: Handlers<Page> = {
  GET(_req: Request, ctx: FreshContext) {
    return GET(_req, ctx, 'routes/(main)/blog')
  },
}

export default async (_req: Request, ctx: RouteContext<Page>) => {
  return (
    <>
      <Head>
        <title>{String(ctx.data.attrs.meta.title)}</title>
        <meta
          name='description'
          content={String(ctx.data.attrs.meta.description)}
        />
      </Head>
      <div
        dangerouslySetInnerHTML={{ __html: await marked.parse(ctx.data.body) }}
      />
    </>
  )
}
