# To build the image, run, in the following order:
# docker build -t <SEU_USER_AQUI>/buscarlos:1.00 .
# docker run -p 4000:4000 --mount type=bind,source="$(pwd)",target=/usr/src/app <ID_DA_IMAGEM_CRIADA_AQUI>

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