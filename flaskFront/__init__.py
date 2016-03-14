# -*- coding: utf-8 -*-
import os
import httplib2
import logging
import sys

logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)

from flask import Flask, render_template, make_response, request, send_from_directory

app = Flask( __name__ , static_url_path='')


@app.route('/flaskFront/<path:path>')
def send_js(path):
    return send_from_directory('templates/flaskFront', path)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/s/near')
def near():

    lng = request.args.get('lng', None)
    lat = request.args.get('lat', None)
    distance = request.args.get('distance', None)
    url = request.args.get('url', "http://172.17.0.1:5000")

    url += "/near?distance=" + distance + "&lng=" + lng + "&lat=" + lat

    logging.info("Calling to %s" % url)

    r, content = httplib2.Http(timeout=60).request(url)

    resp = make_response(content, 200)
    resp.headers['Content-Type'] = 'application/json'
    return resp

if __name__ == '__main__':

    PORT = os.getenv("PORT", 8080)

    logging.info("Starting server!!!")
    app.run(host="0.0.0.0", port=PORT, debug=False)