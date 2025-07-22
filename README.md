# Megadrop APR Calculator

This project provides a simple APR calculator for ByBit Megadrop rewards. It is built with TypeScript, SCSS and served by a Node server behind Nginx via Docker Compose.

## Development

The source files are located under `src/`. To build the project locally you need Node and npm:

```bash
npm install
npm run build
```

The compiled files will appear in `dist/` and `public/`.

## Docker

Use Docker Compose to build and run the application:

```bash
docker-compose up --build
```

The calculator will be available at `http://localhost`.
