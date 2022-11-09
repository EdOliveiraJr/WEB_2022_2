import { useState } from "react"
//import axios from 'axios'
import { useNavigate } from "react-router-dom"

import FirebaseContext from "../../utils/FirebaseContext"
import TeatcherService from "../../services/TeatcherService"

const CreateTeatcherPage = ()=> {
    return (
        <FirebaseContext.Consumer>
            {value => <CreateTeatcher firebase={value}/>}
        </FirebaseContext.Consumer>
    )
}



const CreateTeatcher = ({firebase})=> {
    const [name,setName] = useState('')
    const [course, setCourse] = useState('')
    const [salary, setSalary] = useState(0.0)
    const navigate = useNavigate()

    const handleSubmit = (event)=>{
        event.preventDefault()
        // console.log(name)
        // console.log(course)
        // console.log(salary)

        const newTeatcher = {name,course,salary}

        TeatcherService.add(
            firebase.getFirestoreDb(),
            (id)=>{
                alert(`Professor ${id} adicionado!`)
                navigate('/listTeatcher')
            },
            newTeatcher
        )
        // axios.post('http://localhost:3001/Teatcher', newTeatcher)
        // .then(
        //     (response)=>{
        //         console.log(response.data.id)
        //         navigate("/listTeatcher")
        //     }
        // )
        // .catch(error => console.log(error))
    }

    return (
        <div style={{marginTop:20}}>
            <h2>Criar Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nome: </label>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Digite seu nome'
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
                        onChange={
                            (event)=>{
                                setSalary(event.target.value)
                            }
                        }
                         />
                </div>
                <div className='form-group' style={{marginTop:15}}>
                    <input 
                        type='submit' 
                        value='Criar Professor'
                        className='btn btn-primary' 
                        />
                </div>
            </form>
        </div>
    )
}

export default CreateTeatcherPage