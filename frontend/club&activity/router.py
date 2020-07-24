from flask import Flask
from flask import request
import csv
import pandas as pd
app = Flask(__name__)

@app.route('/', methods=["POST"])
def club():
    print(request.headers)
    # print(request.stream.read())
    print(request.form)
    name = request.form.get('name')
    number = request.form.get('number')
    clubname = request.form.get('clubname')
    ps = request.form.get('ps')

    with open('./csv/club.csv','a+') as f:
        csv_write = csv.writer(f)
        data_row = [name, number, clubname, ps]
        csv_write.writerow(data_row)

    return '<h1>Hello World</h1>'

@app.route('/activ', methods=["POST"])
def activ():
    print(request.headers)
    # print(request.stream.read())
    print(request.form)
    name = request.form.get('name')
    number = request.form.get('number')
    activname = request.form.get('activname')
    ps = request.form.get('ps')

    with open('./csv/activ.csv','a+') as f:
        csv_write = csv.writer(f)
        data_row = [name, number, activname, ps]
        csv_write.writerow(data_row)

    return '<h1>Hello World</h1>'

if __name__ == '__main__':
    app.run(host='127.0.0.1',port=5010)