FROM node:12.14.1-alpine

ARG NODE_ENV=development
ARG PORT=4444
ARG START_ENV=start:dev
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV START_ENV=${START_ENV}

WORKDIR /usr/src/app

COPY src /usr/src/app/src
COPY package*.json ./
COPY yarn*.lock ./
RUN yarn && yarn build

EXPOSE ${PORT}

ENTRYPOINT [ "yarn", "run", ${START_ENV} ]