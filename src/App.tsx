import './App.css'
import Hero from "./Hero.tsx";
import {Route, Routes} from "react-router-dom";
import ProjectPage from "./ProjectPage.tsx";
import Navbar from "./Navbar.tsx";

function App() {
    return (
        <div className="min-h-screen  text-slate-100">
            <Navbar/>
            <main className="pt-4">
                <Routes>
                    <Route path="/" element={<Hero/>}/>
                    <Route path="/projects" element={<ProjectPage/>}/>
                </Routes>
            </main>
        </div>

    )
}

export default App
