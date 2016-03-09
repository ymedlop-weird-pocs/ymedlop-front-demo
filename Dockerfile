FROM ubuntu:latest

MAINTAINER BBVA Google Cloud Platform Team  <gcp.team@bbva.com>

RUN apt-get update

RUN apt-get install -y \
    python-dev python-pip \
    curl rlwrap

RUN apt-get clean all

RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.4-1nodesource1~trusty1_amd64.deb > node.deb \
 && dpkg -i node.deb \
 && rm node.deb

ADD . /app/front

WORKDIR /app/front/
RUN npm install && npm run build

WORKDIR /app/front/flaskFront/
RUN pip install -U -r requirements.txt

EXPOSE 8080
CMD ["python", "__init__.py"]