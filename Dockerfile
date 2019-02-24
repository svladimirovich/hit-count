FROM node:alpine as buildhost
WORKDIR /build
COPY . .
RUN npm install
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --production
COPY --from=buildhost /build/dist /app/dist
EXPOSE 3000
CMD ["npm", "start"]