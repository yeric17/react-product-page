FROM node:14.15.0 as build

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build


FROM node:14.15.0

WORKDIR /app
COPY --from=dist /app/dist ./dist
COPY --from=build /app/index.js ./index.js

COPY . .


EXPOSE 3000
CMD ["node", "index.js"]