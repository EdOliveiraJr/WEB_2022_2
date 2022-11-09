import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'

import FirebaseContext from "../../utils/FirebaseContext"
import TeatcherService from "../../services/TeatcherService"

const EditTeatcherPage = ()=> {
    return (
        <FirebaseContext.Consumer>
            {value => <EditTeatcher firebase={value}/>}
        </FirebaseContext.Consumer>
    )
}

const EditTeatcher = ({firebase})=> {
    
    const [name,setName] = useState('') //useState monitora as mudanças da variáveis
    const [course, setCourse] = useState('')
    const [salary, setsalary] = useState(0.0)
    
    const navigate = useNavigate() //Navegar entre telas

    const params = useParams() //pega os parametros das varíaveis

    useEffect(
        ()=> {
            TeatcherService.retrieve(firebase.getFirestoreDb(),
                (teatcher)=>{
                    setName(teatcher.name)
                    setCourse(teatcher.course)
                    setsalary(teatcher.salary)
                },
                params.id
            )
            // axios.get('http://localhost:3001/Teatcher/' + params.id)
            // .then(
            //     (response)=>{
            //         console.log(response.data.id)
            //         setName(response.data.name)
            //         setCourse(response.data.course)
            //         setsalary(response.data.salary)
            //     }
            // )
            // .catch(error => console.log(error))
        },
        []
    )


    const handleSubmit = (event)=>{
        event.preventDefault()
        const teatcherUpdate = {name,course,salary}

        TeatcherService.update(
            firebase.getFirestoreDb(),
            (result)=>{
                alert('Estudante atualizado!')
                navigate('/listTeatcher')
            },
            params.id,
            teatcherUpdate
        )
        // axios.put('http://localhost:3001/Teatcher/'+ params.id, TeatcherUpdate)
        // .then(
        //     (response)=>{
        //         navigate('/listTeatcher')
        //     }
        // )
        // .catch(error => console.log(error))
        
    }

    return (
        <div style={{marginTop:20}}>
            <h2>Editar Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nome: </label>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Digite seu nome'
                        value={name ?? ''}
                        onChange={
                            (event)=>{
                                setName(event.target.value)
                            }
                        }
                    />
                </div>
                <div className='form-group'>
                    <label>Curso: </label>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Digite seu curso'
                        value={course ?? ''}
                        onChange={
                            (event)=>{
                                setCourse(event.target.value)
                            }
                        }
                    />
                </div>
                <div className='form-group'>
                    <label>salary: </label>
                    <input 
                        type='number'
                        step='any'
                        className='form-control'
                        placeholder='Digite o Salário'
                        value={salary ?? 0.0}
                        onChange={
                            (event)=>{
                                setsalary(event.target.value)
                            }
                        }
                         />
                </div>
                <div className='form-group' style={{marginTop:15}}>
                    <input 
                        type='submit' 
                        value='Salvar'
                        className='btn btn-primary' 
                        />
                </div>
            </form>
        </div>
    )
}

export default EditTeatcherPage