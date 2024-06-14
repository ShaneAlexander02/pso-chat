FROM node:20-alpine3.18 as builder

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm install --save-dev @types/jest
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]

# Add SSH key for deployment
ARG SSH_PRIVATE_KEY
RUN mkdir -p /root/.ssh/ && \
    echo "${SSH_PRIVATE_KEY}" > /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa && \
    ssh-keyscan -H <your-hostname> >> /root/.ssh/known_hosts