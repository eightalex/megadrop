# build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY tsconfig*.json ./
COPY src ./src
RUN npm run build

# production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public
COPY package.json .
RUN npm install --omit=dev
CMD ["node", "dist/server.js"]
