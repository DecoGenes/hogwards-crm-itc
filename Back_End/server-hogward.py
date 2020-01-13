from json import JSONEncoder
from flask import Flask, request, jsonify
from flask_cors import CORS
from students import Student, StudentsData

app = Flask(__name__)
CORS(app)

student_data = StudentsData()


class MyEncoder(JSONEncoder):
    def default(self, o):
        return o.__dict__


@app.route("/students", methods=["GET", 'POST'])
def student_list():
    if request.method == "GET":
        return student_list()
    elif request.method == 'POST':
        return add_student()

def student_list():
    return jsonify(students=list(student_data.list_of_students().values()))

@app.route("/students/<student_id>", methods=['GET', 'DELETE', 'PUT'])
def student_handler(student_id):
    if request.method == 'GET':
        return jsonify(student_data.individual_student(student_id))
    elif request.method == 'DELETE':
        return jsonify(student_data.remove(student_id))
    elif request.method == 'PUT':
        return update_student()


# @app.route("/dashboard")
# def dashboard():
#     dashboard_display = request.get('')
#     return dashboard_display


def add_student():
    data = request.get_json()
    student = Student(data['first_name'], data['last_name'], data['interest_course'], data['magic_skillz'],
                      data['desired_skillz'])
    student_data.create_student(student)
    return jsonify(student_data.individual_student(Student.student_id))


def update_student():
    data = request.get_json()
    student = Student(first_name=data['first_name'], last_name=data['last_name'],
                      interest_course=data['interest_course'],
                      magic_skillz=data['magic_skillz'], desired_skillz=data['desired_skillz'])
    student_data.update_student(student)
    return jsonify(student_data.individual_student(Student.student_id))


if __name__ == '__main__':
    app.json_encoder = MyEncoder
    app.run()
