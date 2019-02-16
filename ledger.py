# deployed webhook url -

from flask import Flask, request, make_response
import urllib.request, json
import datetime as dt

app = Flask(__name__)
# app.listen(process.env.PORT || 3000)

@app.route("/")
def hello():
    return "Hello Da Vinci!"

@app.route("/webhook", methods=['POST'])
def webhook():
    # return "Fetching data..."
    req = request.get_json(silent=True, force=True)
    print("Request received: ")
    req2 = json.dumps(req, indent = 4)
    # print (req2)


if __name__ == "__main__":
    # currentEvents()
    # port = int(os.environ.get("PORT", 5000))
    # app.run(host='0.0.0.0', port=port)
    app.run()
