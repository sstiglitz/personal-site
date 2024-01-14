import type { Handlers, PageProps, FreshContext } from "$fresh/server.ts";
import { extract } from "$std/front_matter/any.ts";
import { test } from "$std/front_matter/mod.ts";
import { render } from "$gfm";
import { Head } from "$fresh/runtime.ts"

interface Page {
  attrs: Record<string, unknown>
  body: string
}

export const handler: Handlers<Page> = {
  async GET(_req: Request, ctx: FreshContext) {
    const rawMarkdown = await Deno.readTextFile(`routes/(main)/index.md`)
    const { attrs, body } = test(rawMarkdown) ? extract(rawMarkdown) : {attrs: undefined, body: undefined}
    return ctx.render({slug: ctx.params.slug, attrs, body })
  }
}

export default (props: PageProps<Page>) => {
  return (
    <>
      <Head>
        <title>{String(props.data.attrs.title)}</title>
        <meta name="description" content={String(props.data.attrs.description)} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: render(props.data.body) }} />
    </>
  )
}
