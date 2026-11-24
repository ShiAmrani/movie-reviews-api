import express from 'express';

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.use((req, res) => {
    res.status(404).json({ error: { message: `Route ${req.method} ${req.originalUrl} not found` } });
  });

  return app;
}
