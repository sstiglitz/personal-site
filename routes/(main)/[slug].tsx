import type { Handlers, PageProps, FreshContext } from "$fresh/server.ts";
import { render } from "$gfm";
import { Head } from "$fresh/runtime.ts"
import {GET} from "../../utils.ts"

interface Page {
  attrs: Record<string, unknown>
  body: string
}

export const handler: Handlers<Page> = {
  GET(_req: Request, ctx: FreshContext) {
    return GET(_req, ctx, "routes/(main)")
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
