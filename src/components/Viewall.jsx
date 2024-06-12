import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const Viewall = () => {
    const[data,changeData]=useState([
        
    ])
    const fetchData=()=>{
       axios.get("http://localhost:8080/view").then((response)=>{
           console.log(response.data)
            changeData(response.data)
        }).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
 return (
        <div>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Blood Group</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Pincode</th>
                                    <th scope="col">District</th>
                                    <th scope="col">Place</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">User name</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                               {
                                data.map(
                                    (value,index)=>{
                                        return <tr>
                                            <td>{value.name}</td>
                                            <td>{value.date}</td>
                                            <td>{value.bloodgroup}</td>
                                            <td>{value.mobileno}</td>
                                            <td>{value.address}</td>
                                            <td>{value.pincode}</td>
                                            <td>{value.district}</td>
                                            <td>{value.place}</td>
                                            <td>{value.emailid}</td>
                                            <td>{value.username}</td>
                                            
                                        </tr>
                                    

                                    }
                                )
                               }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Viewall