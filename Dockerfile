FROM node
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8888
CMD npm start
