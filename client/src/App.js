import "./App.css";
import ProjectBoard from "./views/ProjectBoard";
import NavigationBar from "./components/NavigationBar";
import { Switch, Route } from "react-router-dom";

function App() {

    return (
        <div className="App">
            <Switch>
                <Route path={"/"}>
                    <NavigationBar />
                    <ProjectBoard />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
