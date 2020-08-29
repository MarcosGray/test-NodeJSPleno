FROM node:12.18.3-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g nodemon --quiet
EXPOSE 3333
CMD ["npm", "start"]