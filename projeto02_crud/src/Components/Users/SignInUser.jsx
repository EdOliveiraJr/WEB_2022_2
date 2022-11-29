import { useState } from "react"
//import axios from 'axios'
//import { useNavigate } from "react-router-dom"
import FirebaseContext from "../../utils/FirebaseContext"
//import StudentService from "../../services/StudentService"
import UserService from "../../services/UserService"

const SignInUserPage = ()=> {
    return (
        <FirebaseContext.Consumer>
            {value => <SignInUser firebase={value}/>}
        </FirebaseContext.Consumer>
    )
}

const SignInUser = ({firebase})=> {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
        // console.log(email)
        // console.log(password)
        UserService.signIn(
            firebase.getAuthentication(),
            email,
            password,
            ()=>{

            }
        )
        
    }

    return (
        <div style={{marginTop:20}}>
            <h2>Login Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div className='col-5 form-group'>
                    <label>Email: </label>
                    <input 
                        type='email'
                        className='form-control'
                        placeholder='Digite seu e-mail'
                        onChange={
                            (event)=>{
                                setEmail(event.target.value)
                            }
                        }
                    />
                </div>
                <div className='col-5 form-group'>
                    <label>Senha: </label>
                    <input 
                        type='password'
                        className='form-control'
                        placeholder='Digite sua senha'
                        onChange={
                            (event)=>{
                                setPassword(event.target.value)
                            }
                        }
                    />
                </div>
                <div className='form-group' style={{marginTop:15}}>
                    <input 
                        type='submit' 
                        value='Entrar'
                        className='btn btn-primary' 
                        />
                </div>
            </form>
        </div>
    )
}

export default SignInUserPage