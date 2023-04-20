# build stage
FROM node:16-alpine as build-stage
WORKDIR /app
COPY  package.json . 
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.19.0 as production-stage
WORKDIR /usr/share/nginx/html
# RUN rm -ft ./*
COPY --from=build-stage /app/build .
CMD ["nginx", "-g", "daemon off;"]