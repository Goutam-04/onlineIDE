# Use a Node.js image as the base for building and serving
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# --- Frontend Build Stage ---
# Copy frontend package files first for better Docker caching
# Assuming package.json and pnpm-lock.yaml are in the root for frontend
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally and then install frontend project dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the rest of your frontend application code
COPY . .

# Build the React Vite application for production
# This command generates static assets in the 'dist' directory at /app/dist
RUN pnpm run build

# --- Backend Setup and Serving Stage ---
# Copy backend package files (assuming they are in the 'server' directory)
COPY server/package.json ./server/
# COPY server/package.json server/package-lock.json ./server/

# Install backend dependencies
# Use --prefix to install dependencies specifically for the server directory
RUN npm install --prefix ./server
# Rebuild node-pty specifically for the backend environment
RUN npm rebuild node-pty --prefix ./server

# Copy the rest of your backend application code
COPY server/. ./server/

# Move the built frontend assets into a 'public' directory within the backend
# Your backend (server/index.js) must be configured to serve from this directory.
RUN mv dist ./server/public

# Expose the port your backend server listens on (e.g., 9000)
EXPOSE 9000

# Command to start the backend server
# The backend server will now also serve the frontend static files
CMD ["node", "server/index.js"]
