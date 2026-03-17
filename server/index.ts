import express, { NextFunction, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import { createServer } from "http";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import contactRouter from "./routes/contact.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Security headers
  app.use(helmet());

  // ── Body parsing ──
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Rate limiting
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 200,
    })
  );

  // ── API routes (must be registered BEFORE the SPA catch-all) ──
  app.use("/api/contact", contactRouter);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res, next) => {
    res.sendFile(path.join(staticPath, "index.html"), (err) => {
      if (err) {
        next(err);
      }
    });
  });

  // 404 handler for non-GET requests to unknown routes
  app.use((_req: Request, res: Response) => {
    res.status(404).send("Not found");
  });

  // Global error handling middleware
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send("Internal server error");
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
