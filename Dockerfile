FROM node:5
MAINTAINER Sven Koschnicke <s.koschnicke@gfxpro.com>

RUN apt-get update && apt-get install -y sudo
RUN adduser --disabled-password --gecos "" yeoman; \
  echo "yeoman ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
ENV HOME /home/yeoman
USER yeoman
WORKDIR /home/yeoman
RUN sudo npm install -g yo