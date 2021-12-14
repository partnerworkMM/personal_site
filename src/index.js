import React from "react";
import ReactDOM from "react-dom";
import { Route,BrowserRouter as Router,Routes} from "react-router-dom";
import Test from "./components/test"
import MasonHome from "./mason/masonhome"
import MikaelaHome from "./mikaela/mikaelahome"

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
                        <Route exact path = "/" element={<Test/>}/>
                        <Route path="/mason" element={<MasonHome/>}/>
                        <Route path="/mikaela" element={<MikaelaHome/>}/>
                    </Routes>
                </Router>
            </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))