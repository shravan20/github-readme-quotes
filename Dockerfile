# Base image
FROM node:18

# Build arg & env
ARG MODE=prod
ENV NODE_ENV=$MODE

# Create app dir
WORKDIR /app

# Copy all project
COPY . .

# Install concurrently
RUN npm install -g concurrently

# Setting backend deps
RUN npm install

# Setup frontend deps
RUN cd frontend && npm install


RUN if [ "$MODE" = "prod" ]; then \
    cd frontend && npm run build; \
  fi

# Expose frontend (3000) và backend (3004)
EXPOSE 3000
EXPOSE 3004

# Start mode
CMD sh -c 'if [ "$MODE" = "dev" ]; then concurrently "cd frontend && npm start" "npm run start-dev"; else npm run start; fi'


