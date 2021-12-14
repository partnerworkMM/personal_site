import React from "react";
import ReactDOM from "react-dom";
import { Route,BrowserRouter as Router,Routes} from "react-router-dom";
import Test from "./components/test"

// ReactDOM.render(
//     <Router>
//         <Routes>
//             <Route path="/" component={Test}/>
//         </Routes>
//     </Router>,
//     document.getElementById("root")
// )

const App = ()=>{
    return(
            <div id="app">
            <h1>hang in there!</h1>
                <Router>
                    <Routes>
                        <Route path="/" element={<Test/>}/>
                    </Routes>
                </Router>
            </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))