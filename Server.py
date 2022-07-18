from flask import Flask


app = Flask(__name__)

@app.route('/easteregg')
def easteregg():
    return {"message":"Hello world"}


if __name__ == '__main__':
    app.run(debug=True)