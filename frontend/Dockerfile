# Use Node.js official image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]
