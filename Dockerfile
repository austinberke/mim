FROM node:8.11.3

WORKDIR /usr/src/mim/app
COPY app/package*.json ./
RUN npm install

WORKDIR ..
COPY . .

WORKDIR app
ENV DATABASE_HOST mongo
EXPOSE 1337
CMD ["npm", "start"]
