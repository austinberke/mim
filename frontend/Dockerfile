FROM node:8.11.3
 WORKDIR /usr/src/mim/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
 FROM nginx:1.15.2
 COPY ./build /usr/share/nginx/html
 EXPOSE 8080
