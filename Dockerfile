FROM node:12.14.1-alpine

ARG NODE_ENV=development
ARG PORT=4444
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV DOT_CMS_URL=${DOT_CMS_URL}
ENV DOT_CMS_TOKEN=${DOT_CMS_TOKEN}

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn*.lock ./
RUN yarn

COPY lib /usr/src/app/lib

EXPOSE ${PORT}

CMD [ "yarn", "run", "start:prod" ]