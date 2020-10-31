### STAGE 1: Build UI app ###
FROM node:12.7-alpine AS build

WORKDIR /tmp
COPY package.json ./
RUN yarn install

WORKDIR /usr/src/app
COPY . .
RUN cp -a /tmp/node_modules .
RUN yarn build

### STAGE 2: Run NGINX server ###
FROM nginx:1.17.1-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80