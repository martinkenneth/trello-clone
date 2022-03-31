import "./App.css";
import ProjectBoard from "./views/ProjectBoard";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <div className="App">
            {/* <h1>We re finally getting this</h1>
            <h1>Changing app.js within feature branch</h1> */}
            <NavigationBar />
            <ProjectBoard />
        </div>
    );
}

export default App;
