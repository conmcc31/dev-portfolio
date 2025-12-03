import Hero from "./Hero.tsx";
import {Route, Routes} from "react-router-dom";
import ProjectPage from "./ProjectPage.tsx";
import Navbar from "./Navbar.tsx";

function App() {
    return (
        <div>
            <Navbar/>
            <main className=" min-h-fit pt-14">
                <Routes>
                    <Route path="/" element={<Hero/>}/>
                    <Route path="/projects" element={<ProjectPage/>}/>
                </Routes>
            </main>
        </div>

    )
}

export default App
