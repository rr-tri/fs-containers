# Use a base image - preferably Node.js, assuming it's a Node.js backend
FROM node:16 AS build-stage

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the rest of the app source code to the container
COPY  . .

# Install dependencies
RUN npm ci 


# Run the tests with CI=true
RUN CI=true npm test

# Set the environment variable for the backend URL
ENV REACT_APP_BACKEND_URL=http://localhost:8000/api

# Command to start the app
RUN npm run build

# This is a new stage, everything before this is gone, except the files we want to COPY
FROM nginx:1.20-alpine
# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the Docker hub page
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

# Command to start the NGINX server
CMD ["nginx", "-g", "daemon off;"]