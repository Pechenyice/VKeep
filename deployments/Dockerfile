FROM node:14-alpine as builder

WORKDIR /app

ENV REACT_APP_API_HOST=http://vkeep.don2quixote.ru
ENV REACT_APP_API_URL=/api

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.16.0-alpine

COPY --from=builder /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]