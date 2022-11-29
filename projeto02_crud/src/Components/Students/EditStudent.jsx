import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'

import FirebaseContext from "../../utils/FirebaseContext"
import StudentService from "../../services/StudentService"

const EditStudentPage = ()=> {
    return (
        <FirebaseContext.Consumer>
            {value => <EditStudent firebase={value}/>}
        </FirebaseContext.Consumer>
    )
}

const EditStudent = ({firebase})=> {
    
    const [name,setName] = useState('') //useState monitora as mudanças da variáveis
    const [course, setCourse] = useState('')
    const [ira, setIra] = useState(0.0)
    
    const navigate = useNavigate() //Navegar entre telas

    const params = useParams() //pega os parametros das varíaveis

    useEffect(
        ()=> {
            StudentService.retrieve(firebase.getFirestoreDb(),
                (student)=>{
                    setName(student.name)
                    setCourse(student.course)
                    setIra(student.ira)
                },
                params.id
            )
            // axios.get('http://localhost:3001/student/' + params.id)
            // .then(
            //     (response)=>{
            //         console.log(response.data.id)
            //         setName(response.data.name)
            //         setCourse(response.data.course)
            //         setIra(response.data.ira)
            //     }
            // )
            // .catch(error => console.log(error))
        },
        []
    )


    const handleSubmit = (event)=>{
        event.preventDefault()
        const studentUpdate = {name,course,ira}

        StudentService.update(
            firebase.getFirestoreDb(),
            (result)=>{
                alert('Estudante atualizado!')
                navigate('/listStudent')
            },
            params.id,
            studentUpdate
        )
        // axios.put('http://localhost:3001/student/'+ params.id, studentUpdate)
        // .then(
        //     (response)=>{
        //         navigate('/listStudent')
        //     }
        // )
        // .catch(error => console.log(error))
        
    }

    return (
        <div style={{marginTop:20}}>
            <h2>Editar Estudante</h2>
            <form onSubmit={handleSubmit}>
                <div className='col-5 form-group'>
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
                <div className='col-5 form-group'>
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
                <div className='col-5 form-group'>
                    <label>IRA: </label>
                    <input 
                        type='number'
                        step='any'
                        className='form-control'
                        placeholder='Digite seu IRA'
                        value={ira ?? 0.0}
                        onChange={
                            (event)=>{
                                setIra(event.target.value)
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

export default EditStudentPage