# ## Base ########################################################################
# # Use a larger node image to do the build for native deps (e.g., gcc, python)
# FROM node:lts

# # Reduce npm log spam and colour during install within Docker
# ENV NPM_CONFIG_LOGLEVEL=warn
# ENV NPM_CONFIG_COLOR=false

# # We'll run the app as the `node` user, so put it in their home directory
# WORKDIR /app

# # Copy the source code over
# COPY . /app

# # Install (not ci) with dependencies, and for Linux vs. Linux Musl (which we use for -alpine)
# RUN npm install

# # Expose port 3000
# EXPOSE 3000

# # Build the Docusaurus app
# RUN npm run build

# ## Deploy ######################################################################
# # Use a stable nginx image
# FROM nginx:stable-alpine

# # Copy what we've installed/built from production
# COPY /app/build /usr/share/nginx/



# Stage 1 - build
FROM node:lts-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - production
FROM nginx:stable-alpine as final
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]