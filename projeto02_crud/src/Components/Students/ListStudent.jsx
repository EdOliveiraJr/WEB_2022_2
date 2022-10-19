import React from "react"
import { useState, useEffect } from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'

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

    function deleteStudent(id){
        if(window.confirm('Deseja excluir')){
            axios.delete('http://localhost:3001/students/'+ id)
            .then(()=>console.log('ok'))
            .catch(error=>console.log(error))
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

export default ListStudent