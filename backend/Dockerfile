FROM node:alpine3.10
ENV APP_IS_DEV=false
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm ci
COPY src/ ./src
COPY tsconfig.json .
RUN npm run build
EXPOSE 3000
CMD [ "node", "dist/index.js" ]
