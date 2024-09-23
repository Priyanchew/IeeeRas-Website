"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ModeToggle({ className }) {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        // Check if user has previously selected a theme
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.add(storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.remove("dark");
            root.classList.add("light");
            setTheme("light");
            localStorage.setItem("theme", "light");
        } else {
            root.classList.remove("light");
            root.classList.add("dark");
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    return (
        <button onClick={toggleTheme} className={className}>
            {theme === "dark" ? <Sun /> : <Moon />}
        </button>
    );
}
