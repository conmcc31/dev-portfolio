import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import SocialButton from "./SocialButton.tsx";

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
        <div className="  w-screen flex flex-col justify-center items-center  ">
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
                <button className="btn btn-large mt-4">View my Projects</button>
            </Link>
            <div className="mt-10 flex items-center justify-center gap-4">
                <SocialButton href="https://github.com/conmcc31" label="GitHub">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48
    0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.12-1.5-1.12-1.5-.91-.64.07-.63.07-.63
    1.01.07 1.55 1.06 1.55 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07
    0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.29 9.29 0 0 1 12 6.8c.85 0
    1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74
    0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83
    0 .26.18.58.69.48A10.28 10.28 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </SocialButton>

                <SocialButton href="https://www.linkedin.com/in/conor-mccarthy-34aa0916a/" label="LinkedIn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                    >
                        <path d="M4.98 3.5C4.98 4.61 4.1 5.5 3 5.5s-2-.89-2-2
    0-2 2-2 2.98.89 2.98 2Zm.02 4H0v16h5V7.5Zm7.8 0h-4.9v16h5v-8.4c0-3.6
    4.5-3.9 4.5 0V23.5h5v-9.7c0-7.1-7.8-6.8-9.6-3.3V7.5Z"/>
                    </svg>
                </SocialButton>
            </div>

        </div>
    );
}
