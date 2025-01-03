import { Hono } from "hono";

const app = new Hono();
app.get("/", async (c) => {
    return c.json({ message: "Hello there" });
});

Bun.serve(
    {
        fetch: app.fetch,
        port: 3000,
    },
);
