import { Head } from '$fresh/runtime.ts'
import type { FreshContext, Handlers, RouteContext } from '$fresh/server.ts'
import { extract } from '$std/front_matter/any.ts'
import { test } from '$std/front_matter/mod.ts'
import { marked } from 'npm:marked@11.1.1'

interface Page {
  attrs: Record<string, unknown>
  body: string
}

export const handler: Handlers<Page> = {
  async GET(_req: Request, ctx: FreshContext) {
    const rawMarkdown = await Deno.readTextFile(`routes/(main)/index.md`)
    const { attrs, body } = test(rawMarkdown)
      ? extract(rawMarkdown)
      : { attrs: undefined, body: undefined }
    return ctx.render({ slug: ctx.params.slug, attrs, body })
  },
}

export default async (_req: Request, ctx: RouteContext<Page>) => {
  return (
    <>
      <Head>
        <title>{String(ctx.data.attrs.title)}</title>
        <meta name='description' content={String(ctx.data.attrs.description)} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: await marked(ctx.data.body) }} />
    </>
  )
}
