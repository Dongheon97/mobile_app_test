from flask import Flask
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
def hello():
	return "<h1>Hello World!</h1>"

@app.route("/first")
def first():
	return "<h1>First Page!</h1>"


if __name__ == "__main__":
	app.run(host="0.0.0.0", debug=True, port="5000")
