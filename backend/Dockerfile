FROM python:3.10-slim

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./app /code/app

# รัน uvicorn บนพอร์ต 3340 ตามโจทย์
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "3340"]