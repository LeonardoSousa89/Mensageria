FROM node:14

WORKDIR /src

COPY package*.json . 

RUN npm install

COPY . .

EXPOSE 8767

CMD [ "npm", "start" ]