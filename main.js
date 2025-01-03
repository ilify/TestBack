import { hono } from "hono"

const app = hono()
app.get("/", (c) => {
    c.json({ message: "Hello World" })
})

Bun.serve(
    {
        fetch: app.fetch,
        port: 3000,
    }
)