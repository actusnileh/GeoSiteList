FROM node:18-alpine

WORKDIR /code

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

# RUN pnpm build

EXPOSE 5173
