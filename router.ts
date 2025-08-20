import * as Peko from "@sejori/peko"
import { 
  renderToString,
  renderToReadableStream 
} from "react-dom/server"
import { marky } from "marky"
import { recursiveReaddir } from "recursiveReadDir"
import { fromFileUrl } from "fromFileUrl"

import { html } from "./utils/react.ts"
import Index from "./pages/Index.ts"
import About from "./pages/About.ts"
import Blog from "./pages/Blog.ts"

export const router = new Peko.HttpRouter()

const prod = Deno.env.get("ENVIRONMENT") === "production"
const headers = new Headers({
  "Cache-Control": prod ? "max-age=600, stale-while-revalidate=86400" : ""
})

router.GET(
  "/", 
  Peko.ssr(() => renderToReadableStream(html`<${Index} />` as any), { headers })
)
router.GET(
  "/about", 
  Peko.ssr(() => renderToReadableStream(html`<${About} />` as any), { headers })
)


const blogHTML = await renderToString(html`<${Blog} />` as any)
const articles = await recursiveReaddir(fromFileUrl(new URL("./articles", import.meta.url)))

router.GET("/blog", Peko.ssr(() => {
  return blogHTML.replace(
    /(?<=<main(.)*>)(.|\n)*?(?=<\/main>)/,
    `<a id="scrolly" href="#blog" class="didot">👇</a>
    <h1>Writings and musings:</h1>
    <ul class="article-list">
      ${articles.filter(path => !path.includes("completed.md")).map(path => {
        const name = path.slice(`${Deno.cwd()}/articles`.length+1).slice(0, -3)
        return `<li>
          <a href="/blog/${name}">
            <h2>${name}</h2>
          </a>
        </li>`
      }).join("\n")}
    </ul>`
  )
}))

articles.forEach(async (file) => {
  const fileRoute = file.slice(`${Deno.cwd()}/articles`.length+1)
  const articleMD = await Deno.readTextFile(file)

  return router.GET(
    `/blog/${fileRoute.slice(0, -3)}`, 
    (prod ? [Peko.cache()] : []) as Peko.Middleware[], 
    Peko.ssr(() => blogHTML.replace(
      /(?<=<main(.)*>)(.|\n)*?(?=<\/main>)/,
      `<a id="scrolly" href="#blog" class="didot">👇</a>
      ${marky(articleMD)}
      `
    ))
  )
})

const staticFiles = await recursiveReaddir(fromFileUrl(new URL("./static", import.meta.url)))
for (const file of staticFiles) {
  const fileRoute = file.slice(`${Deno.cwd()}/static`.length+1)

  // derive mime type
  let contentType = "application/octet-stream"; // fallback
  if (fileRoute.endsWith(".js")) {
    contentType = "application/javascript";
  } else if (fileRoute.endsWith(".svg")) {
    contentType = "image/svg+xml";
  } else if (fileRoute.endsWith(".jpg") || fileRoute.endsWith(".jpeg")) {
    contentType = "image/jpeg";
  } else if (fileRoute.endsWith(".png")) {
    contentType = "image/png";
  } else if (fileRoute.endsWith(".css")) {
    contentType = "text/css";
  }

  router.GET(
    `/${fileRoute}`, 
    (prod ? [Peko.cache()] : []) as Peko.Middleware[], 
    await Peko.file(
      new URL(`./static/${fileRoute}`, import.meta.url),
      {
        headers: new Headers({
          "Content-Type": contentType
        })
      }
    )
  )
}
