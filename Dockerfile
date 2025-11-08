# 1. Use the official Node.js image as base
FROM node:20-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# 4. Copy rest of the project
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Use a smaller image for production
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only the necessary output from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

# 7. Set environment variable for production
ENV NODE_ENV=production
ENV PORT=3000

# 8. Expose port and run
EXPOSE 3000
CMD ["npm", "start"]
