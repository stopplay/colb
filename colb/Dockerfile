FROM python:3.6-stretch
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/app

RUN apt-get -y install gcc g++

ADD get-pip.py get-pip.py
RUN python3 get-pip.py
ADD requirements.txt /usr/src/app/
RUN pip3 install Cython
RUN pip3 install -r requirements.txt
ADD ./ /usr/src/app/