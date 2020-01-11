import Flask
import requests

app = Flask(__name__)

@app.route("/")
def main_page():
    return 'main page'

@app.route("/students")
def student_list():
    list_of_students = requests.get('')
    return list_of_students


@app.route("/dashboard")
def dashboard():
    dashboard_display = requests.get('')
    return dashboard_display


@app.route("/students/profile")
def student_profile():
    student_profile_display = resquests.get('')
    return student_profile_display

@app.route("/students/profile")
def students_register():
    student_registration = requests.post('')
    return 'registered'

