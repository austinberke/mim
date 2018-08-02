FROM node:8.11.3

WORKDIR /usr/src/mim/api
COPY api/package*.json ./
RUN npm install

WORKDIR ..
COPY . .

WORKDIR api
ENV DATABASE_HOST mongo
EXPOSE 1337
CMD ["npm", "start"]
