FROM python:3

WORKDIR /usr/local/app

COPY ./requirements.txt /usr/local/app/requirements.txt

RUN pip install -r requirements.txt

COPY . /usr/local/app

ENTRYPOINT [ "python" ]

CMD ["run.py"]