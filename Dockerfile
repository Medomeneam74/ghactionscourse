FROM node:20-alpine
WORKDIR /app
copy app.js .
CMD [ "node","app.js" ]