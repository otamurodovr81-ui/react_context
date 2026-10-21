import { createContext, useState } from "react";


 export const ThemeContext = createContext();

function Cantext({children}) {

    const [t, setTheme] = useState("light");
    const [lang, setLang] = useState("uzb");

    //  foni ozgartiradigan function
    function toggleTheme() {
        setTheme((prev)=> prev === "light" ? "dark" : "light")
    }
    
    return <>
    
      <ThemeContext.Provider value={{ t, toggleTheme, lang, setLang}}>
      {children}
    </ThemeContext.Provider>
        
    </>
}

export default Cantext;