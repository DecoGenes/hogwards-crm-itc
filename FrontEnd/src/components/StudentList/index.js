import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { getStudentsList, deleteStudent } from "../../lib/api";

export default function StudentList() {

    const [studentList, setStudentList] = useState([])
    const [magicSkillz, setMagicSkillz] = useState([])

    useEffect(() => {
        getStudentsList().then(response => {
            const data = response.data.students
            setStudentList(data)
            // setMagicSkillz(data.magic_skillz)
            console.log(data)
        })
    }, [])

    function handleDeleteStudent(){
        deleteStudent(studentList)
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Interest Course</th>
                        <th>Magic Skills</th>
                        <th>Desired Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student) => {
                        return (
                            <tr key={student.student_id}>
                                <td key={student.student_id}><Link to={`students/${student.student_id}`}>{student.student_id}</Link></td>
                                <td key={student.student_id}>{student.first_name}</td>
                                <td key={student.student_id}>{student.last_name}</td>
                                {/* {magicSkillz.map(skill => {return (Object.entries(skill).map(([key, val]) => 
                                   {<td key={key}>{key}: {val} <br/></td>}))})} */}
                                {/* <td key={student.student_id}>{student.interest_course}</td>
                                <td key={student.student_id}>{student.magic_skillz{}}</td>
                                <td key={student.student_id}>{student.desired_skillz}</td> */}
                                <td><button type='button' onClick={}>Delete Student </button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button><Link to={'/newstudent'}>Add New Student</Link></button>
        </>
    )

}

