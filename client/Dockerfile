FROM node:alpine
RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client
COPY package.json /srv/app/client
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . .
CMD [ "npm", "start" ]