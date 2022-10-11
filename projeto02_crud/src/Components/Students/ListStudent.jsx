import { useState, useEffect } from "react"
//import { studentsList } from "./data.js"
import axios from 'axios'

const ListStudent = ()=> {
    const [students, setStudents] = useState([])

    useEffect (
        ()=>{
            axios.get('http://localhost:3001/students')
            .then(
                (response)=>{
                    //console.log(response)
                    setStudents(response.data)
                }
            )
            .catch(
                (error)=>{
                    console.log(error)
                }
            )
        }
        ,
        []
        
    )

    const generateTableBody = ()=>{
        return students.map(
            (element)=> {
                return (
                    <tr>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.ira}</td>
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
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {generateTableBody()}
                </tbody>
            </table>
        </div>
    )
}

export default ListStudent