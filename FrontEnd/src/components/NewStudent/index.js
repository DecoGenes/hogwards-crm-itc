import React, { useState } from 'react'
import { createStudent } from "../../lib/api";


export default function NewStudent() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [course, setCourse] = useState([])
    const [magicSkillz, setMagicSkillz] = useState('')
    const [desiredSkillz, setDesiredSkillz] = useState('')
    const [magicSkillLevel, setMagicSkillLevel] = useState('')
    const [desiredSkillLevel, setDesiredSkillLevel] = useState('')

 
    let courseList = ['Alchemy Basics', 'Alchemy Advanced', 'Magic for Day-to-Day Life',
        'Magic for Medical Professionals', 'Dating With Magic', 'Street Magic',]

    let skillsList = ['Alchemy', 'Animation', 'Conjuror', 'Disintegration', 'Elemental', 'Healing', 'Illusion',
        'Immortality', 'Invisibility', 'Invulnerability', 'Necromancer', 'Omnipresent', 'Omniscient',
        'Poison', 'Possession', 'Self-Detonation', 'Summoning', 'Water Breathing',]

    let levelList = [1, 2, 3, 4, 5]

    function newStudent() {
        let studentObj = {}
        return studentObj = {
            'desired_skillz': [desiredSkillz, desiredSkillLevel],
            'first_name': firstName,
            'interest_course': course,
            'last_name': lastName,
            'magic_skillz': { magicSkillz, magicSkillLevel},
            
        }
    }

    function desiredSkillzCreation(){
        
    }

    function handleNewStudentFirstName(event){
        setFirstName(event.target.value)
    }
    
    function handleNewStudentLastName(event){
        setLastName(event.target.value)
    }

    function handleNewStudentCourse(event){
        setCourse(event.target.value)
    }

    function handleNewStudentMagicSkills(event){
        setMagicSkillz(event.target.value)
    }

    function handleNewStudentDesiredSkills(event){
        setDesiredSkillz(event.target.value)
    }
    function handleNewStudentMagicSkillsLevel(event){
        setMagicSkillLevel(event.target.value)
    }

    function handleNewStudentDesiredSkillsLevel(event){
        setDesiredSkillLevel(event.target.value)
    }

    function handleCreateStudent() {
        createStudent(newStudent())

    }

    return (
        <div>
            <h1>New Student</h1>
            <label>
                Name
                <input type='text' name='first_name' onChange={(event) => handleNewStudentFirstName(event)} />
            </label>
            <label>
                Last Name
                <input type='text' name='last_name' onChange={(event) => handleNewStudentLastName(event)} />
            </label>
            <label for='Course'>Course</label>
            <select multiple size='1' name="Course" onChange={(event) => handleNewStudentCourse(event)}>
                {courseList.map((course) => {
                    return (
                        <option name={course}>{course}</option>
                    )
                })}
            </select>
            <label for='Skills'>Skills</label>
            <select multiple size='1' name="Skills" onChange={(event) => handleNewStudentMagicSkills(event)}>
                {skillsList.map((skills) => {
                    return (
                        <option value={skills}>{skills}</option>
                    )
                })}
            </select>
            {/* <label for='level'></label> */}
            <select size='1' name="level" onChange={(event) => handleNewStudentMagicSkillsLevel(event)}>
            {levelList.map((level) => {
                return (
                    <option value={level}>{level}</option>
                )
            })}
            </select>
            <label for='desired skills'>Desired Skills</label>
            <select multiple size='1' name="desired skills" onChange={(event) => handleNewStudentDesiredSkills(event)}>
                {skillsList.map((skills) => {
                    return (
                        <option value={skills}>{skills}</option>
                    )
                })}
            </select>
            {/* <label for='level'></label> */}
            <select size='1' name="level" onChange={(event) => handleNewStudentDesiredSkillsLevel(event)}>
                {levelList.map((level) => {
                    return (
                        <option value={level}>{level}</option>
                    )
                })}
            </select>
            <button type='submit' name='Submit' onClick={() => handleCreateStudent(newStudent)}>Submit</button>
        </div>
    )
}
