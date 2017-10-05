FROM node:8.6.0

RUN mkdir /app
RUN mkdir /app/data
WORKDIR /app

COPY package.json /app
COPY  . /app 

RUN npm i nodemon -g
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
