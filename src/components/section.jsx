import { useContext } from "react";
import { ThemeContext } from "../cantext";

function Section() {

    const {  lang, setLang } = useContext(ThemeContext);
    
    return <>
    
        {lang === "uzb" ? <p className="text-[21px] max-w-[550px]">Assalom alakum men Fronted dasturchiman men HTML, CSS, JavaScript, TypeScript, React, texnalogialarni bilamn </p>
            : <p className="text-[21px]">
                Hello, I am a Frontend developer. I know HTML, CSS, JavaScript, TypeScript, and React.
        </p> }
    
    </>
}

export default Section;