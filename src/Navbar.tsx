import {NavLink} from "react-router-dom";

export default function Navbar() {
    const linkBase =
        "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    const linkInactive = "text-slate-300 hover:text-white hover:bg-slate-700/60";
    const linkActive = "text-white bg-slate-700";

    return (
        <nav className="fixed top-0 left-0 right-0 z-20
        w-full
        bg-slate-900/95
        border-b border-slate-800
        backdrop-blur">
            <div className="w-screen mx-auto ">
                <div className="flex items-center h-14 ">
                    <div className="flex pl-1  w-2/5 "><NavLink to="/" className="text-slate-100 font-semibold">
                        Conor McCarthy
                    </NavLink></div>
                    <div className="flex w-1/5  justify-center">
                        <NavLink to="/"
                                 className={({isActive}) =>
                                     `${linkBase} ${isActive ? linkActive : linkInactive}`
                                 }>
                            Home
                        </NavLink>
                        <NavLink to="/projects"
                                 className={({isActive}) =>
                                     `${linkBase} ${isActive ? linkActive : linkInactive}`
                                 }>
                            Projects
                        </NavLink>
                    </div>
                    <div className="flex w-2/5"></div>
                </div>
            </div>
        </nav>
    )
}