import type { FreshContext } from '$fresh/server.ts'
import { extract } from '$std/front_matter/any.ts'
import { test } from '$std/front_matter/mod.ts'

export const GET = async (_req: Request, ctx: FreshContext, path: string) => {
  let rawMarkdown = ''
  const filepath = `${path}/${ctx.params.slug}.md`

  try {
    rawMarkdown = await Deno.readTextFile(filepath)
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      console.log(`no file found for ${filepath}`)
      return ctx.renderNotFound()
    } else {
      throw error
    }
  }

  const { attrs, body } = test(rawMarkdown)
    ? extract(rawMarkdown)
    : { attrs: undefined, body: undefined }
  return ctx.render({ attrs, body })
}
