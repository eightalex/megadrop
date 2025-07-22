# Megadrop APR Calculator

A small React application that calculates APR rewards for ByBit Megadrop events.
The app is built with Vite and TypeScript and served as static files through
Nginx using Docker.

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

To create a production build:

```bash
npm run build
```

## Docker

Build the image and run the container with Docker Compose:

```bash
docker-compose up --build
```

The calculator will be available at `http://localhost`.
