import axios from 'axios'

export function getStudentsList() {
    return axios.get(`http://127.0.0.1:5000/students`)
}

export function getStudent(studentId) {
    return axios.get(`http://127.0.0.1:5000/students/${studentId}`)
}

export function createStudent(Student) {
    return axios.post(`http://127.0.0.1:5000/students`, Student)
    // , { student: studentObj }
}

// export function updateStudent(studentId) {
//     return axios.put(`http://127.0.0.1:5000/students/${studentId}`, { student: studentObj })
// }

export function deleteStudent(studentId) {
    return axios.delete(`http://127.0.0.1:5000/students/${studentId}`)
}

