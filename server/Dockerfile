FROM node:20

WORKDIR /app

# Only copy package files first for better Docker caching
COPY package*.json ./

# Install dependencies inside the container
RUN npm install
RUN npm rebuild node-pty

# Now copy the full app source code
COPY . .

EXPOSE 9000

CMD ["node", "index.js"]
