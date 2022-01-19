import { useState,useEffect } from "react"
import { withRouter } from "next/router"
import Layout from "../../../components/Layout"
import jwt from 'jsonwebtoken'
import { showErrorMessage, showSuccessMessage } from "../../../helpers/alerts"
import axios from "axios"
import { API } from "../../../config"


const ActivateAccount  = ({router}) => {

    const [state,setState] = useState({
        name:'',
        token:'',
        buttonText:'Activate Account',
        success:'',
        error:''
    })

    const {name,token,buttonText,success,error} = state

    useEffect(() => {
        let token = router.query.id

        if(token)
        {
            const {name} = jwt.decode(token)
            setState({...state,name: name,token: token})
        }

    },[router]);


    const clickSubmit = async (e) => {

        e.preventDefault()

        //console.log('Activate Account')

        setState({...state,buttonText:'Activating'})

        try{

            const response = await axios.post(`${API}/register/activate`,{token})

            console.log("account activate response",response)

            setState({...state,name:'',token:'',buttonText:'Activated',success: response.data.message})

        }catch(err)
        {
            setState({...state,buttonText:'Activate Account',error: err.response.data.error})
        }

    }

    return(
        <>
            <Layout>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1>G'day {name}, Ready to activate your account?</h1>
                        <br/>
                        {success && showSuccessMessage(success)}
                        {error && showErrorMessage(error)}
                        <button className="btn btn-outline-dark btn-block" onClick={clickSubmit} >{buttonText}</button>
                    </div>
                </div>
            </Layout>
        </>
    )


}

export default withRouter(ActivateAccount)