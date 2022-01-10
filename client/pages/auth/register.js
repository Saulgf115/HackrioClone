import { useState } from "react"
import Layout from "../../components/Layout"

const Register = () =>{


    const [state,setState] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:'',
        buttonText: 'Register'
    })

    const {name,email,password,error,success,buttonText} = state


    const handleChange = (name) => (e) =>{

        setState({...state,[name]: e.target.value,error: '',success:'',buttonText:'Register'})

    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        console.table({name,email,password})
    }

    const RegisterForm = () =>{
        return(
            <>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <input value={name} onChange={handleChange('name')} className="form-control" type="text" placeholder="Type your username..." />
                    </div>
                    <div className="form-group">
                        <input value={email} onChange={handleChange('email')} className="form-control" type="email" placeholder="Type your email..." />
                    </div>
                    <div className="form-group">
                        <input value={password} onChange={handleChange('password')} className="form-control" type="password" placeholder="Type your password..." />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-dark" >{buttonText}</button>
                    </div>
                </form>
            </>
        )
    }

    return(
        <>
            <Layout>
                <div className="col-md-6 offset-md-3">

                    <h1>Register</h1>

                    <br/>

                    {RegisterForm()}

                    <hr/>

                    {JSON.stringify(state)}

                </div>
            </Layout>
        </>
    )
}

export default Register