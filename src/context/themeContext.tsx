import { createContext, useState, type ReactNode } from "react";

type ThemeData = {
    theme: "light" | "dark",
    toggleTheme: () => void
}
export const ThemeContext = createContext<ThemeData>({
    theme: "light",
    toggleTheme: () => { }
}
);


export const ThemeContextProvider = ({ children }: { children: ReactNode | ReactNode[] }) => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme: () => setTheme(currentTheme => currentTheme === "light" ? "dark" : "light")
        }}>
            {children}
            {/* <button onClick={() => setTheme(currentTheme => currentTheme === "light" ? "dark" : "light")}>Toggle Theme</button> */}

        </ThemeContext.Provider>
    )
};