FROM node:6.9
MAINTAINER merlin

RUN useradd -m pokeserver -d /home/pokeserver

VOLUME /home/pokeserver
WORKDIR /home/pokeserver
EXPOSE 3000

COPY entrypoint.sh ../
RUN chmod +x ../entrypoint.sh

CMD ["../entrypoint.sh"]