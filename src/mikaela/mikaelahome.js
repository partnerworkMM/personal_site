import React,{useState,useEffect} from "react"
import axios from "axios"

function MikaelaHome(){
    const[mikaelaTestData,setMikaelaTestData]=useState({})

    useEffect(()=>{
        async function getTestData(){
            const testData = await axios.get("/api/sites/mikaela")
            console.log("testData: ",testData)
            setMikaelaTestData(testData.data)
        }
        getTestData()
    },[])

    return (
        <div id="test">
            <h1>welcome to Mikaela's personal site</h1>
            <p>{mikaelaTestData.creator}</p>

        </div>
    )
}

export default MikaelaHome