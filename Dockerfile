FROM node:10.13.0-alpine AS build

WORKDIR /app

ADD . .
RUN yarn install
RUN yarn build

FROM node:10.13.0-alpine

WORKDIR /app

COPY --from=build /app/package.json package.json
COPY --from=build /app/yarn.lock yarn.lock
COPY --from=build /app/.env .env
COPY --from=build /app/dist dist
COPY --from=build /app/server.js server.js

RUN yarn install --production

ENV NODE_ENV="production"

CMD ["node", "server.js"]
