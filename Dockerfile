# Pull base image
FROM node:15.14.0-alpine

# Set working directory
WORKDIR /app

# Add node modules to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Add app
COPY . ./

# Start app
CMD ["npm","start"]
