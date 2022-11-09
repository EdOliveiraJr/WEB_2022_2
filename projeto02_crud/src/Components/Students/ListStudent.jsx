import React from "react"
import { useState, useEffect } from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'

import FirebaseContext from "../../utils/FirebaseContext"
import StudentService from "../../services/StudentService"

const ListStudentPage = ()=> {
    return (
        <FirebaseContext.Consumer>
            {value => <ListStudent firebase={value}/>}
        </FirebaseContext.Consumer>
    )
}

const ListStudent = ({firebase})=> {
    const [students, setStudents] = useState([])

    useEffect (
        ()=>{
            StudentService.listOnSnapshot(
                firebase.getFirestoreDb(),
                (students)=> {
                    // console.log(students)
                    setStudents(students)
                }
            )
            // axios.get('http://localhost:3001/student')
            // .then(
            //     (response)=>{
            //         //console.log(response)
            //         setStudents(response.data)
            //     }
            // )
            // .catch(
            //     (error)=>{
            //         console.log(error)
            //     }
            // )
        }
        ,
        []
        
    )

    function deleteStudentV2(id) {
        if(window.confirm('Deseja excluir?')){
            StudentService.delete(firebase.getFirestoreDb(),
                ()=>{
                    let studentsTemp = students
                        for(let i = 0; i < studentsTemp.length; i++)
                        if(studentsTemp[i].id === id){
                            studentsTemp.splice(i,1)
                            break
                    }
                    setStudents(studentsTemp)
                },
                id
            )
        }
    }

    function deleteStudent(id) {
        if(window.confirm('Deseja excluir?')){
            StudentService.delete(firebase.getFirestoreDb(),
                ()=>{
                    let studentsResult = students.filter(
                        (student)=> student.id !== id
                    )
                    setStudents(studentsResult)
                },
                id
            )
            // axios.delete('http://localhost:3001/student/' + id)
            // .then(
            //     ()=>{
            //         let result = students.filter(
                            // (student)=>student.id !== id
                            // )
            //         setStudents(result)
            //     }
            // )
            // .catch(error=>console.log(error))
        }
    }

    const generateTableBody = ()=>{
        return students.map(
            (element)=> {
                return (
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.ira}</td>
                        <td>
                            <Link to={'/editStudent/' + element.id} className='btn btn-primary'>Editar</Link>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>deleteStudent(element.id)}>Excluir</button>
                        </td>
                    </tr>
                )
            }
        )
    }

    return (
        <div>
            <h1>Listar estudante</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
                        <th colSpan={2}> Ações </th>
                    </tr>
                    
                </thead>
                <tbody>
                    {generateTableBody()}
                </tbody>
            </table>
        </div>
    )
}

export default ListStudentPage