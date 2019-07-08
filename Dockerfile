# -_- change this my fish
FROM node:8-alpine

WORKDIR /app

COPY dist/ dist/
COPY package.json yarn.lock .env.example tsconfig.json tslint.json nodemon.json ./

RUN yarn

EXPOSE 3001

CMD ["yarn", "prod"]