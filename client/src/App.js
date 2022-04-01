import "./App.css";
import ProjectBoard from "./views/ProjectBoard";
import NavigationBar from "./components/NavigationBar";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={"/"}>
                    {/* <h1>We re finally getting this</h1>
                    <h1>Changing app.js within feature branch</h1> */}
                    <NavigationBar />
                    <ProjectBoard />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
