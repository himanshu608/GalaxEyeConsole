FROM node:alpine
RUN mkdir -p /srv/app/server
WORKDIR /srv/app/server
COPY package.json /srv/app/server
RUN npm install --silent
COPY . .
CMD [ "npm", "start" ]