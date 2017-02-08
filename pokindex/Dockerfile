FROM node:7
MAINTAINER merlin

RUN useradd -m pokindex -d /home/pokindex
RUN npm install -g create-react-app

VOLUME /home/pokindex
WORKDIR /home/pokindex
EXPOSE 3000

COPY entrypoint.sh ../
RUN chmod +x ../entrypoint.sh

CMD ["../entrypoint.sh"]