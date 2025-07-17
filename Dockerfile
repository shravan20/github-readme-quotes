# Base image
FROM node:18

# Arguments for build level (production or development)
ARG mode=prod
ENV NODE_ENV=${mode}

# Create work directory
WORKDIR /github-readme-quotes

# Copy file package.json and lock
COPY package*.json ./


RUN npm install

# Copy all resources
COPY . .

# Expose port
EXPOSE 3000


CMD if [ "$mode" = "dev" ]; then \
      npm run start-dev; \
    else \
      npm run start; \
    fi
