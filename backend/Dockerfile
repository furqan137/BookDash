FROM node:20-alpine AS builder

WORKDIR /app
COPY backend/package*.json ./
RUN npm ci --omit=dev
COPY backend .

FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app .

EXPOSE 4000
CMD ["node", "index.js"]