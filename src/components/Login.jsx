import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [data,setData] = useState(
        {
            "emailid":"",
            "pass":""
        }
    )

    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue = () =>{
        console.log(data)
        axios.post("http://localhost:8080/login",data).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userId",response.data.userId)
                    navigate("/add")
                    
                } else {
                    alert(response.data.status)
                    
                }
            }
        ).catch().finally()
    }
    let navigate = useNavigate()
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="email" name="emailid" id="" className="form-control" value={data.emailid} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="password" name="pass" id="" className="form-control" value={data.pass} onChange={inputHandler}/>
                            
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>LOGIN</button>
                        </div>
                        </center>
                    </div>
                    <br/>
                    <center>
                        <p>New User<Link to="/signup">Click here</Link></p>
                        </center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login