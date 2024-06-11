import axios from 'axios'
import React, { useState } from 'react'
import LoginPage from './LoginPage'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Signup = () => {
    const[data,setdata]=useState(
        {
            "name":"",
            "dob":"",
            "bloodgroup":"",
            "mobileno":"",
            "address":"",
            "pincode":"",
            "district":"",
            "place":"",
            "emailid":"",
            "username":"",
            "password":"",
            "confirmpassword":""
        }
    )
    const inputHandler=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then((response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
            alert("added")  
                           
            } else {
                alert("failed")
            }

            
           
        }
    ).catch().finally()
    }
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="fom-label">Dob</label>
                            <input type="date"  id="" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Blood Group</label>
                            <input type="text" className="form-control" name='bloodgroup' value={data.bloodgroup} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Mobile</label>
                            <input type="text" className="form-control" name='mobileno' value={data.mobileno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea id="" className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Pincode</label>
                            <input type="text" className="form-control" name='pincode' value={data.address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">District</label>
                            <select  id="" className="form-control" name='district' value={data.district} onChange={inputHandler}>
                                <option value="">Alappuzha</option>
                                <option value="">Ernakulam</option>
                                <option value="">Idukki</option>
                                <option value="">Kannur</option>
                                <option value="">Kasaragod</option>
                                <option value="">Kollam</option>
                                <option value="">Kottayam</option>
                                <option value="">Kozhikode</option>
                                <option value="">Malappuram</option>
                                <option value="">Palakkad</option>
                                <option value="">Pathanamthitta</option>
                                <option value="">Thiruvananthapuram</option>
                                <option value="">Thrissur</option>
                                <option value="">Wayanad</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Place</label>
                            <input type="text" className="form-control"name='place' value={data.place} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email Id </label>
                            <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">UserName</label>
                            <input type="text" className="form-control"name='username' value={data.username} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password"  id="" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Confirm password</label>
                            <input type="text" className="form-control" name='confirmpassword' value={data.confirmpassword} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btm btn-success" onClick={readValue}>Sign Up</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup