# To build using docker compose: docker-compose up
# To build the image individually, run, in the following order:
# docker build -t brunowaldvogel/buscarlos:1.00 .
# docker run -p 4000:4000 --mount type=bind,source="$(pwd)",target=/usr/src/app brunowaldvogel/buscarlos:1.00

FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 4000
CMD [ "npm", "start" ]