import React,{useState,useEffect} from "react"
import {BrowserRouter as Router,Route,Link, Redirect} from "react-router-dom"
import axios from "axios"

function Test(){
    const[masonTestData,setMasonTestData]=useState({})

    useEffect(()=>{
        async function getTestData(){
            const testData = await axios.get("/api/sites/mason")
            console.log("testData: ",testData)
            setMasonTestData(testData.data)
        }
        getTestData()
    },[])

    return (
        <div id="test">
            <h1>welcome to personal site</h1>
            <p>{masonTestData.name}</p>
            <Link to = "/mason">mason</Link>
            <br/>
            <Link to = "/mikaela">mikaela</Link>

        </div>
    )
}

export default Test