import * as Peko from "@sejori/peko"
import { router } from "./router.ts"

router.use(Peko.log(console.log))
router.use(async (_, next) => {
  try {
    await next()
  } catch (e) {
    console.log(e)
    return new Response("Uh-oh, spagheti-os!")
  }
});

// Start Deno server with Peko router :^)
Deno.serve(
  {
    port: 7777,
  },
  (req) => router.handle(req)
);

console.log("Deno server running with Peko router <3");