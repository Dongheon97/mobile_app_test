FROM python:3.7

ENV HOST 0.0.0.0
ENV PORT 5000
ENV DEBUG true

# Expose ports
EXPOSE 5000

ADD requirements.txt .

RUN pip install -r requirements.txt

WORKDIR /app
ADD . /app

CMD ["python3", "app.py"]


