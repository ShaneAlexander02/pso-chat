FROM node:20-alpine3.18 as builder

WORKDIR /app
<<<<<<< HEAD
COPY package.json ./
RUN npm install
COPY . .
RUN npm install --save-dev @types/jest
=======
COPY package=.json ./
RUN npm install --production
COPY . .
>>>>>>> 85d91df653777aea07746becb03ecc47f20ffd87
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]
