import { useEffect, useState } from "react";
import LightButton from "/src/assets/toggle/light_mode.png";
import DarkButton from "/src/assets/toggle/dark_mode.png";

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        const element = document.documentElement;
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="relative">
            {theme === "dark" ? (
                // 🌙 Dark Mode Button (Click to switch to Light Mode)
                <img
                    onClick={() => setTheme("light")}
                    src={DarkButton}
                    alt="Dark Mode"
                    className="w-12 cursor-pointer transition-opacity duration-300"
                />
            ) : (
                // ☀️ Light Mode Button (Click to switch to Dark Mode)
                <img
                    onClick={() => setTheme("dark")}
                    src={LightButton}
                    alt="Light Mode"
                    className="w-12 cursor-pointer transition-opacity duration-300"
                />
            )}
        </div>
    );
};

export default DarkMode;
