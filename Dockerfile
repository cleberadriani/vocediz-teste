FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000 9229 8080 80

ARG PORT
ENV PORT=$PORT

CMD [ "npm", "run", "start:prod" ]