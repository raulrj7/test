FROM node:lts-alpine
WORKDIR /api
ENV NODE_ENV=dev
COPY ./ ./
RUN npm install
EXPOSE 3000
RUN npm run build
CMD [ "npm", "run", "serve" ]