import * as Peko from "peko"
import { recursiveReaddir } from "recursiveReadDir"
import { fromFileUrl } from "fromFileUrl"

export const router = new Peko.Server()
const cache = new Peko.ResponseCache()

const prod = Deno.env.get("ENVIRONMENT") === "production"
const headers = new Headers({
  "Cache-Control": prod ? "max-age=600, stale-while-revalidate=86400" : ""
})

const indexUrl = new URL("./pages/index.html", import.meta.url)
const aboutUrl = new URL("./pages/about.html", import.meta.url)
const blogUrl = new URL("./pages/blog.html", import.meta.url)
const techUrl = new URL("./pages/tech.html", import.meta.url)

router.addRoute("/", Peko.staticHandler(indexUrl, { headers }))
router.addRoute("/about", Peko.staticHandler(aboutUrl, { headers }))
router.addRoute("/blog", Peko.staticHandler(blogUrl, { headers }))
router.addRoute("/tech", Peko.staticHandler(techUrl, { headers }))

const staticFiles = await recursiveReaddir(fromFileUrl(new URL("./static", import.meta.url)))
staticFiles.forEach((file): number => {
  const fileRoute = file.slice(`${Deno.cwd()}/static`.length+1)
  return router.addRoute(
    `/${fileRoute}`, 
    prod ? Peko.cacher(cache) : [], 
    Peko.staticHandler(new URL(`./static/${fileRoute}`, import.meta.url))
  )
})
