FROM node:14.4.0

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm install

COPY . /app/

EXPOSE 8080

CMD ["npm", "run", "start"]