FROM node:current-alpine

RUN npm install -g npm@8.18.0

ENV NODE_ENV=production

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

CMD ["npm", "start"]
