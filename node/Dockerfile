# To build using docker compose: docker-compose up
# To build the image individually, run, in the following order:
# docker build -t brunowaldvogel/buscarlos:1.00 .
# docker run -p 4000:4000 --mount type=bind,source="$(pwd)",target=/usr/src/app brunowaldvogel/buscarlos:1.00

FROM node:latest

ADD start_node.sh /start_node.sh
RUN chmod 755 /start_node.sh
CMD [ "/start_node.sh" ]
