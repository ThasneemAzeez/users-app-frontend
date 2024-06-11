import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const LoginPage = () => {
    const[data,setdata]=useState([
        {
            
                "username":"",
                "password":""
            
        }
    ]

    )
    const inputHandler=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/addlogin",data).then((response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("success")
            } else {
                alert("error")
            }
            }
        ).catch().finally()
    }
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center><img src="https://img.freepik.com/premium-vector/colorful-instagram-icon-vintage-style-art-vector-illustration_836950-30.jpg?w=360" alt=""></img></center>
                            </div><br />
                           
                            <h1><center>LOGIN</center></h1>
                            <div className="row g-3 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"><center>Username</center></label>
                            </div>
                            <div className="row g-3 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
                            </div>
                            <div className="row g-3 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"><center>Password</center></label>
                            </div>
                            <div className="row g-3 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <input type="password"  id="" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="row g-3 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-">
                               <center> <button className="btn btn-success" onClick={readValue}>Login</button></center>
                               <p>new users <Link  to="/signup">click here</Link>  to sign up</p>


                            </div>
                        </div>
                    </div>
              
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default LoginPage