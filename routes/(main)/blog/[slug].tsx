import type { Handlers, PageProps, FreshContext } from "$fresh/server.ts";
import { render } from "$gfm";
import { Head } from "$fresh/runtime.ts"
import {GET} from "../../../utils.ts"

type Page = {
  // deno-lint-ignore no-explicit-any
  attrs: Record<string, any>
  body: string
}

export const handler: Handlers<Page> = {
  GET(_req: Request, ctx: FreshContext) {
    return GET(_req, ctx, "routes/(main)/blog")
  }
}

export default (props: PageProps<Page>) => {
  return (
    <>
      <Head>
        <title>{String(props.data.attrs.meta.title)}</title>
        <meta name="description" content={String(props.data.attrs.meta.description)} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: render(props.data.body) }} />
    </>
  )
}
