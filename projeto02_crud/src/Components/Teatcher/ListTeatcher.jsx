import React from "react"
import { useState, useEffect } from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'

import FirebaseContext from "../../utils/FirebaseContext"
import TeatcherService from "../../services/TeatcherService"

const ListTeatcherPage = ()=> {
    return (
        <FirebaseContext.Consumer>
            {value => <ListTeatcher firebase={value}/>}
        </FirebaseContext.Consumer>
    )
}

const ListTeatcher = ({firebase})=> {
    const [teatchers, setTeatchers] = useState([])

    useEffect (
        ()=>{
            TeatcherService.listOnSnapshot(
                firebase.getFirestoreDb(),
                (teatchers)=> {
                    // console.log(Teatchers)
                    setTeatchers(teatchers)
                }
            )
            // axios.get('http://localhost:3001/Teatcher')
            // .then(
            //     (response)=>{
            //         //console.log(response)
            //         setTeatchers(response.data)
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

    function deleteTeatcherV2(id) {
        if(window.confirm('Deseja excluir?')){
            TeatcherService.delete(firebase.getFirestoreDb(),
                ()=>{
                    let teatchersTemp = teatchers
                        for(let i = 0; i < teatchersTemp.length; i++)
                        if(teatchersTemp[i].id === id){
                            teatchersTemp.splice(i,1)
                            break
                    }
                    setTeatchers(teatchersTemp)
                },
                id
            )
        }
    }

    function deleteTeatcher(id) {
        if(window.confirm('Deseja excluir?')){
            TeatcherService.delete(firebase.getFirestoreDb(),
                ()=>{
                    let teatchersResult = teatchers.filter(
                        (teatcher)=> teatcher.id !== id
                    )
                    setTeatchers(teatchersResult)
                },
                id
            )
            // axios.delete('http://localhost:3001/Teatcher/' + id)
            // .then(
            //     ()=>{
            //         let result = Teatchers.filter(
                            // (Teatcher)=>Teatcher.id !== id
                            // )
            //         setTeatchers(result)
            //     }
            // )
            // .catch(error=>console.log(error))
        }
    }

    const generateTableBody = ()=>{
        return teatchers.map(
            (element)=> {
                return (
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.salary}</td>
                        <td>
                            <Link to={'/editTeatcher/' + element.id} className='btn btn-primary'>Editar</Link>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>deleteTeatcher(element.id)}>Excluir</button>
                        </td>
                    </tr>
                )
            }
        )
    }

    return (
        <div style={{marginTop:20}}>
            <h2>Listar Professor</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Salário</th>
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

export default ListTeatcherPage