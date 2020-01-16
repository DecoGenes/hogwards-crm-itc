import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { getStudent } from "../../lib/api";


export default function Student() {

    const [student, setStudent] = useState({})
    let location = useLocation()

    useEffect(() => {
        const urlId = location.pathname.split('/')
        getStudent(urlId[2]).then(response => {
            const data = response.data
            setStudent(data)
        })
    }, [location])

    //     handleChange(event) {
    //         setStudent({ student: event.target.data })
    //     }

    return (
        <>
            <h1>{student.first_name}</h1>
            <h1>{student.last_name}</h1>
            <h1>{student.student_id}</h1>
            <form>
                <label>First Name
                <input type='text' value={student.first_name} />
                </label>
                <label>Last Name
                <input type='text' value={student.last_name} />
                </label>
                {student.magic_skillz.map(skill => Object.entries(skill).map(([key, val]) => 
                                   <span key={key}>{key}: {val} <br/></span> ) )}
                {/* {student.map((student) => {
                    return (
                        <label> {student.interest_course}
                        <input type='text' value={student.interest_course} />
                        </label>
                    )
                })} */}
                {/* {student.map((student) => {
                    return (
                        <>
                        <input type='text' value={student.magic_skillz.key}>{student.magic_skillz.key}</input>
                        <input type='text' value={student.magic_skillz.level}>{student.magic_skillz.level}</input>
                        </>
                    )})} */}
                {/* {student.map((student) => {
                    return (
                        <input type='text' value={student.desired_skillz}>{student.desired_skillz}</input>
                    )
                })} */}
                {/* <input type='text' value={student.magic_skillz[0]}>{student.magic_skillz[0]}</input>
                <input type='text' value={student.desired_skillz[0]}>{student.desired_skillz[0]}</input> */}
            </form>
        </>
    )
}
