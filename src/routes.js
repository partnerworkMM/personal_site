import React from "react";
import {Route} from 'react-router-dom';
import Test from "./components/test"

function Routes(){
    return(
            <Route path="/" component={Test}/>
    )
}

export default Routes