import { Head } from '$fresh/runtime.ts'
import type { FreshContext, Handlers, RouteContext } from '$fresh/server.ts'
import { marked } from 'npm:marked@11.1.1'
import { GET } from '../../utils.ts'

interface Page {
  attrs: Record<string, unknown>
  body: string
}

export const handler: Handlers<Page> = {
  GET(_req: Request, ctx: FreshContext) {
    return GET(_req, ctx, 'routes/(main)')
  },
}

export default async (_req: Request, ctx: RouteContext<Page>) => {
  return (
    <>
      <Head>
        <title>{String(ctx.data.attrs.title)}</title>
        <meta
          name='description'
          content={String(ctx.data.attrs.description)}
        />
      </Head>
      <div
        dangerouslySetInnerHTML={{
          __html: await marked.parse(ctx.data.body),
        }}
      />
    </>
  )
}
