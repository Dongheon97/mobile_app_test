from flask import Flask, render_template
import mysql.connector

app = Flask(__name__)

def getMysqlConnection():
	config = {
		"user": "root",
		"host": "db",
		"port": "3306",
		"password": "1234",
		"database": "testing",			# should change
		"auth_plugin": "mysql_native_password",
		"charset": "utf8"
	}
	return mysql.connector.connect(**config)

@app.route("/")
def index():
	return render_template('index.html')

@app.route("/page")
def page():
	return 'On Page'

@app.route("/first")
def first():
	return "<h1>First Page!</h1>"


if __name__ == "__main__":
	app.run(host="0.0.0.0", debug=True, port="5000")
