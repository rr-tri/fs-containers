# Use a base image - preferably Node.js, assuming it's a Node.js backend
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the rest of the app source code to the container
COPY --chown=node:node . .

# Install dependencies
RUN npm ci --only=production

EXPOSE 3000

ENV DEBUG=playground:*

USER node

# Command to start the app
CMD npm start
