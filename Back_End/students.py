import time


class Student:
    counter = 1

    def __init__(self, first_name, last_name, interest_course, magic_skillz, desired_skillz,
                 student_id=None, creation_time=None):
        if student_id is None:
            self.student_id = str(Student.counter)
            Student.counter += 1
            self.creation_time = time.asctime(time.gmtime(time.time()))
            self.update_time = self.creation_time

        else:
            self.student_id = student_id
            self.creation_time = creation_time
            self.update_time = time.asctime(time.gmtime(time.time()))
        self.first_name = first_name
        self.last_name = last_name
        self.magic_skillz = magic_skillz
        self.interest_course = interest_course
        self.desired_skillz = desired_skillz


class StudentsData:
    def __init__(self):
        self.students = {
            '1': Student('Harry', 'Potter', ['Magic day to day life'], {'Conjuror': 2}, {'Conjuror': 3},),
            '2': Student('Hermione', 'Granger', ['Magic day to day life'], {'Alchemy': 4}, {'Alchemy': 5},),
            '3': Student('Ron', 'Weisly', ['Magic day to day life'], {'Animation': 1}, {'Animation': 2},)
        }

    def list_of_students(self):
        return self.students

    def individual_student(self, student_id):
        return self.students.get(student_id)

    def create_student(self, student):
        self.students[student.student_id] = student

    def update_student(self, student):
        self.students[student.student_id] = student

    def remove_student(self, student_id):
        self.students.pop(student_id)
