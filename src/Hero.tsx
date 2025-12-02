import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const skillsList = [
    "a Full-Stack Engineer",
    "an Angular & React Developer",
    "a Groovy / Spring Boot Developer",
    "a Cloud & DevOps Specialist"];

export default function Hero() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const firstDelay = 5000;
        const regularInterval = 2500;

        const first = setTimeout(() => {
            setIndex((i) => (i + 1) % skillsList.length);

            const interval = setInterval(() => {
                setIndex((i) => (i + 1) % skillsList.length);
            }, regularInterval);

            cleanup.interval = interval;
        }, firstDelay);

        const cleanup: any = {timeout: first, interval: null};

        return () => {
            clearTimeout(cleanup.timeout);
            if (cleanup.interval) clearInterval(cleanup.interval);
        };
    }, []);


    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <h1
                className="
          text-4xl md:text-5xl font-bold
          whitespace-nowrap overflow-hidden
          border-r-2
          inline-block
          animate-typewriter-cursor
        "
            >
                Hi! I’m Conor.
            </h1>
            <h1 className="
            text-xl md:text-2xl text-slate-200
            opacity-0
            animate-fade-in-delayed
          ">
                <span>I'm </span>
                <span
                    key={skillsList[index]}
                    className="text-sky-400
              transition-opacity duration-500
              opacity-100
              animate-fade-in
              ">
                    {skillsList[index]}
                </span>
            </h1>
            <Link to="/projects">
                <button className="my-4">View my Projects</button>
            </Link>
        </div>
    );
}
